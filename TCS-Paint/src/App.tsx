import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Form from "./pages/Form";
import About from "./pages/About";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="content bg-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />}></Route>
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
        {import.meta.env.VITE_SK_CHAT_DISPLAY === "1" && <Chat />}
      </div>
    </Router>
  );
}

export default App;
