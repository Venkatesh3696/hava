import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import NoPage from "./components/NoPage";
import Airports from "./components/Airports";

function App() {
  return (
    <div className="w-screen ">
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="/airports" element={<Airports />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
