import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Content from "./components/Content";
function App() {
  return (
    <div className="App">
      <ol>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/about">About Page</Link>
        </li>
        <li>
          <Link to="/content">Content Page</Link>
        </li>
      </ol>
      <hr />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </div>
  );
}

export default App;
