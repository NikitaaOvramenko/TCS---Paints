import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

type ChatMessage =
  | { type: "text"; content: string; sender: "user" | "agent" }
  | { type: "image"; src: string; sender: "user" | "agent" }; // no pending flag

export default function Chat() {
  const [uniqueId, setUniqueId] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [expanded, setExpanded] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change or panel expands
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [chat, expanded]);

  // Create a session once on mount
  useEffect(() => {
    const id = uuidv4();
    globalThis.MY_GLOBAL_DATA = id;
    setUniqueId(id);

    setChat([
      { type: "text", content: "Hi, I'm your Paint-Agent!", sender: "agent" },
      {
        type: "text",
        content: "Ask me about the surface you want to paint (walls for now).",
        sender: "agent",
      },
      {
        type: "text",
        content: "Upload a photo and I’ll return a recolored version.",
        sender: "agent",
      },
    ]);

    axios
      .post(import.meta.env.VITE_SK_CREATE_SESSION_URL, { Id: id })
      .catch((err) => console.error("Session create failed:", err));
  }, []);

  async function handleSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    if (!input.trim() && !file) return;

    // Add user text immediately
    if (input.trim()) {
      setChat((prev) => [
        ...prev,
        { type: "text", content: input, sender: "user" },
      ]);
    }

    // Add user image immediately (no pending state, no overlay)
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setChat((prev) => [
        ...prev,
        { type: "image", src: previewUrl, sender: "user" },
      ]);
    }

    const formData = new FormData();
    formData.append("MessageT", input || "(Image uploaded)");
    formData.append("Id", uniqueId);
    formData.append("Author", "User");
    if (file) formData.append("Image", file);

    setInput("");
    setFile(null);

    // Add typing indicator for agent
    setChat((prev) => [
      ...prev,
      { type: "text", content: "⋯", sender: "agent" },
    ]);

    try {
      const res = await axios.post(
        import.meta.env.VITE_SK_WRITE_TO_CHAT_URL,
        formData
      );

      setChat((prev) => {
        // Remove only typing indicator; keep user's image + everything else
        const withoutTyping = prev.filter(
          (m) => !(m.type === "text" && m.content === "⋯")
        );

        const newMessages: ChatMessage[] = [];
        if (res.data?.Message) {
          newMessages.push({
            type: "text",
            content: res.data.Message,
            sender: "agent",
          });
        }
        if (res.data?.Url) {
          newMessages.push({
            type: "image",
            src: res.data.Url,
            sender: "agent",
          });
        }

        return [...withoutTyping, ...newMessages];
      });
    } catch (err) {
      console.error(err);
      setChat((prev) => {
        const filtered = prev.filter(
          (m) => !(m.type === "text" && m.content === "⋯")
        );
        return [
          ...filtered,
          {
            type: "text",
            content: "Agent: (Error connecting to server)",
            sender: "agent",
          },
        ];
      });
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) setFile(e.target.files[0]);
  }

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[640px]">
      {/* Container */}
      <div
        className={`backdrop-blur-md rounded-2xl shadow-2xl border border-white/10
                    ${
                      expanded ? "h-[70vh]" : "h-14"
                    } bg-[rgba(10,15,25,0.75)] overflow-hidden
                   transition-all duration-300`}
      >
        {/* Header */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="w-full h-14 flex items-center justify-between px-4
                     text-white/90 bg-gradient-to-r from-slate-900/60 to-sky-900/40"
          aria-label={expanded ? "Collapse chat" : "Expand chat"}
          type="button"
        >
          <div className="flex items-center gap-2 font-semibold">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-400" />
            Paint-Agent
          </div>
          <span className="text-white/70 text-sm">
            {expanded ? "Hide" : "Open"}
          </span>
        </button>

        {/* Messages */}
        <div
          ref={listRef}
          className={`px-3 sm:px-4 py-3 space-y-2 h-[calc(70vh-7rem)] overflow-y-auto ${
            expanded ? "block" : "hidden"
          }`}
        >
          {chat.map((message, i) => (
            <div
              key={i}
              className={`flex ${
                message.sender === "agent" ? "justify-end" : "justify-start"
              }`}
            >
              {message.type === "text" ? (
                <span
                  className={`px-3 py-2 rounded-2xl max-w-[80%] leading-snug text-sm shadow
                    ${
                      message.sender === "agent"
                        ? "bg-sky-600 text-white"
                        : "bg-slate-700/90 text-white"
                    }`}
                >
                  {message.content}
                </span>
              ) : (
                // IMAGE (no uploading overlay, no 'Uploaded' badge)
                <img
                  src={message.src}
                  alt="chat-img"
                  className="max-w-[220px] max-h-[220px] rounded-xl border border-white/10 shadow"
                />
              )}
            </div>
          ))}
        </div>

        {/* Input bar */}
        <form
          onSubmit={handleSubmit}
          className={`h-14 w-full items-center gap-2 px-2 sm:px-3 bg-black/70 border-t border-white/10 ${
            expanded ? "flex" : "hidden"
          }`}
          encType="multipart/form-data"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 h-10 px-3 rounded-xl bg-slate-800/80 text-white placeholder-white/50
                       border border-white/10 focus:outline-none focus:ring-2 focus:ring-sky-500"
            placeholder="Type a message…"
          />

          <label
            className="h-10 px-3 flex items-center rounded-xl cursor-pointer
                       bg-slate-700/80 text-white border border-white/10 hover:bg-slate-700"
            title={file ? file.name : "Upload image"}
          >
            {file ? "Selected:" : "Upload"}
            {file && (
              <span className="ml-2 text-xs opacity-80 truncate max-w-[160px]">
                {file.name}
              </span>
            )}
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>

          <button
            type="submit"
            className="h-10 px-4 rounded-xl bg-sky-600 text-white font-semibold
                       hover:bg-sky-500 active:scale-[0.98] transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
