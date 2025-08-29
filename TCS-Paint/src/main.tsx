import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const closeSession = () => {
  const url = import.meta.env.VITE_SK_END_SESSION_URL;
  const payload = JSON.stringify({ Id: window.MY_GLOBAL_DATA });
  console.log(`${payload} Sent !`);
  const resylt = navigator.sendBeacon(
    url,
    new Blob([payload], { type: "application/json" })
  );
  console.log(resylt);
};

// window.addEventListener("beforeunload", () => {
//   closeSession();
//   console.log("check 1 !");
// });
window.addEventListener("unload", () => {
  closeSession();
  console.log("check 2 !");
});

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <App />
  // </StrictMode>,
);
