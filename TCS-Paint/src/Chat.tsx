import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

type ChatMessage =
  | { type: "text"; content: string; sender: "user" | "agent" }
  | { type: "image"; src: string; sender: "user" | "agent"; pending?: boolean };

export default function Chat() {
  const [uniqueId, setUniqueId] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [chatSize, setChatSize] = useState("3%");
  const chatRef = useRef<HTMLDivElement>(null);

  // Create a session once on mount
  useEffect(() => {
    const id = uuidv4();
    globalThis.MY_GLOBAL_DATA = id;
    setUniqueId(id);

    setChat([
      { type: "text", content: "Hi I'm Your Paint-Agent !", sender: "agent" },
      {
        type: "text",
        content:
          "You can ask me questions regarding surface you want to paint (walls for right now)!",
        sender: "agent",
      },
      {
        type: "text",
        content:
          "You can send me an Image of a surface you want to color, and I will return you the colored version!",
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

    // Add user image immediately as pending
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setChat((prev) => [
        ...prev,
        { type: "image", src: previewUrl, sender: "user", pending: true },
      ]);
    }

    const formData = new FormData();
    formData.append("MessageT", input || "(Image uploaded)");
    formData.append("Id", uniqueId);
    formData.append("Author", "User");

    if (file) {
      formData.append("Image", file);
    }

    setInput("");
    setFile(null);

    // Add typing indicator for agent
    setChat((prev) => [
      ...prev,
      { type: "text", content: "Agent is typing...", sender: "agent" },
    ]);

    try {
      const res = await axios.post(
        import.meta.env.VITE_SK_WRITE_TO_CHAT_URL,
        formData
      );

      setChat((prev) => {
        // Remove pending + typing
        const filtered = prev.filter(
          (m) =>
            !(m.type === "text" && m.content === "Agent is typing...") &&
            !(m.type === "image" && m.sender === "user" && m.pending)
        );

        // Add agent reply
        const newMessages: ChatMessage[] = [];

        if (res.data.Message) {
          newMessages.push({
            type: "text",
            content: res.data.Message,
            sender: "agent",
          });
        }

        if (res.data.Url) {
          newMessages.push({
            type: "image",
            src: res.data.Url,
            sender: "agent",
          });
        }

        return [...filtered, ...newMessages];
      });
    } catch (err) {
      console.error(err);
      setChat((prev) => {
        const filtered = prev.filter(
          (m) => !(m.type === "text" && m.content === "Agent is typing...")
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
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  }

  function unFold() {
    setChatSize(chatSize === "3%" ? "50%" : "3%");
  }

  return (
    <div
      ref={chatRef}
      className="chat flex flex-col fixed z-50 w-full left-0 bottom-0 rounded"
      style={{ height: chatSize }}
    >
      <header
        onClick={unFold}
        className="header text-white bg-black text-center cursor-pointer"
      >
        {chatSize === "3%" && "^Chat^"}
        {chatSize === "50%" && "vChatv"}
      </header>

      <main className="main flex flex-col w-full h-full bg-[rgba(20,3,12,0.72)] gap-4 overflow-y-auto p-2">
        {chat.map((message, i) => (
          <div
            key={i}
            className={`flex ${
              message.sender === "agent" ? "justify-end" : "justify-start"
            }`}
          >
            {message.type === "text" && (
              <span
                className={`px-2 py-1 rounded ${
                  message.sender === "agent"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-white"
                }`}
              >
                {message.content}
              </span>
            )}

            {message.type === "image" && (
              <img
                src={message.src}
                alt="chat-img"
                className={`max-w-[200px] max-h-[200px] rounded border ${
                  message.sender === "agent" ? "self-end" : "self-start"
                } ${message.pending ? "opacity-50" : ""}`}
              />
            )}
          </div>
        ))}
      </main>

      <form
        onSubmit={handleSubmit}
        className="footer flex px-1 gap-1 bg-black h-12 w-full"
        encType="multipart/form-data"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="text-white w-[60%] border-2 border-white focus:outline-none"
          placeholder="Type a message..."
        />

        <label className="button flex items-center justify-center h-full w-[20%] bg-amber-400 border-2 cursor-pointer">
          Upload
          <input
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
        </label>

        <button
          type="submit"
          className="button flex items-center justify-center h-full w-[20%] bg-amber-400 border-2"
        >
          Send
        </button>
      </form>
    </div>
  );
}
