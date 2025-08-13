import "./App.css";
import NavBar from "./NavBar";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Form from "./pages/Form";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <div className="content bg-black">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about"></Route>
            <Route path="/form" element={<Form />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
