import { useState, useRef } from "react";
import axios from "axios";
import Submission from "../modals/Submission";
import { useNavigate } from "react-router-dom";

interface FormProps {
  className?: string;
}

export default function FormTemplate({ className }: FormProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function Submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    files.forEach((file) => {
      formData.append("pics", file);
    });

    setModal(true);

    axios
      .post(import.meta.env.VITE_EMAIL_SEND, formData)
      .then((res) => {
        console.log(res.data);
        form.reset();
        setFiles([]);
        setPreviews([]);
        if (fileInputRef.current) fileInputRef.current.value = "";
      })
      .catch((err) => console.error(err));
  }

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      const validFiles: File[] = [];
      const previewUrls: string[] = [];

      for (const file of selectedFiles) {
        const fileName = file.name.toLowerCase();
        if (
          !(
            fileName.endsWith("jpg") ||
            fileName.endsWith("png") ||
            fileName.endsWith("jpeg") ||
            fileName.endsWith("heic")
          )
        ) {
          alert("Wrong File! Only png, jpeg, heic or jpg accepted!");
          e.target.value = "";
          return;
        }
        validFiles.push(file);
        previewUrls.push(URL.createObjectURL(file));
      }

      setFiles(validFiles);
      setPreviews(previewUrls);
    }
  }

  return (
    <>
      <Submission
        bool={modal}
        closeModal={() => {
          setModal(false);
          navigate("/");
        }}
      />

      {/* Инфо-текст перед формой */}
      <p className="text-white text-2xl text-center  w-3/5 mb-6">
        Fill out the form below and add a few photos (optional). This helps us
        prepare your estimate faster — our team will reach out with next steps.
      </p>

      <form
        onSubmit={Submit}
        encType="multipart/form-data"
        className={`${
          className ?? ""
        } flex flex-col gap-8 items-center justify-center text-white p-6 rounded-2xl`}
      >
        {/* Upper Section */}
        <section className="upper flex flex-col lg:flex-row gap-8">
          <div className="left flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="self-start">
                Name:
              </label>
              <input
                style={{ backgroundColor: "inherit" }}
                id="name"
                name="name"
                placeholder="Enter your name"
                type="text"
                className="w-[300px] h-9 border-b-2 px-2 border-white bg-black text-white focus:outline-none"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="self-start">
                Email:
              </label>
              <input
                style={{ backgroundColor: "inherit" }}
                id="email"
                name="email"
                placeholder="Enter your email"
                type="email"
                className="w-[300px] h-9 border-b-2 px-2 border-white bg-black text-white focus:outline-none"
                required
                autoComplete="email"
              />
            </div>
          </div>

          <div className="right flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="self-start">
                Phone:
              </label>
              <input
                style={{ backgroundColor: "inherit" }}
                id="phone"
                name="phone"
                placeholder="6479169777"
                type="tel"
                minLength={10}
                className="w-[300px] h-9 border-b-2 px-2 border-white bg-black text-white focus:outline-none"
                required
                autoComplete="tel"
              />
            </div>
            {/* Only ZIP */}
            <div className="flex flex-col gap-2">
              <label htmlFor="zip" className="self-start">
                Zip:
              </label>
              <input
                style={{ backgroundColor: "inherit" }}
                id="zip"
                name="zip"
                placeholder="90068"
                type="text"
                className="w-[300px] h-9 border-b-2 px-2 border-white bg-black text-white focus:outline-none"
                minLength={5}
                maxLength={5}
                required
                autoComplete="postal-code"
              />
            </div>
          </div>
        </section>

        {/* Project description */}
        <section className="w-full flex justify-center">
          <div className="flex flex-col gap-2 w-full max-w-[600px]">
            <label htmlFor="description" className="self-center">
              Short project description
            </label>
            <textarea
              id="description"
              name="description"
              placeholder="Tell us a bit about your project..."
              rows={4}
              className="w-full border-2 border-white rounded-md p-2 bg-black text-white focus:outline-none"
              required
            />
          </div>
        </section>

        {/* Middle section */}
        <section className="middle flex w-full flex-col lg:flex-row justify-center items-center gap-8">
          <div className="left w-full lg:w-[50%] flex justify-center">
            <div className="flex flex-col gap-3">
              <label className="self-start">Paint Type:</label>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="interior-a"
                  name="paintType"
                  value="Interior"
                />
                <label htmlFor="interior-a">Interior</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="exterior-a"
                  name="paintType"
                  value="Exterior"
                />
                <label htmlFor="exterior-a">Exterior</label>
              </div>
            </div>
          </div>

          <div className="right w-full lg:w-[50%] flex flex-col items-center gap-3">
            <label
              htmlFor="file"
              className="bg-yellow-600 text-black rounded px-4 py-2 active:scale-95 hover:text-white transition duration-300 cursor-pointer"
            >
              Upload Image(s)
            </label>
            <input
              ref={fileInputRef}
              className="hidden"
              multiple
              accept="image/*"
              type="file"
              id="file"
              name="pics"
              onChange={handleUpload}
            />
            <div className="flex gap-2 flex-wrap justify-center">
              {previews.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  className="rounded border border-gray-400"
                  width={50}
                  height={50}
                  alt="Uploaded preview"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Lower Section */}
        <section className="lower">
          <button
            className="w-28 h-10 bg-yellow-600 font-semibold text-white rounded active:scale-95 hover:scale-105 transition duration-300"
            type="submit"
          >
            Submit
          </button>
        </section>
      </form>
    </>
  );
}
