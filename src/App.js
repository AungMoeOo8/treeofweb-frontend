import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/home";
import Tutorials from "./pages/tutorials";
import TutorialPage from "./pages/tutorials/tutorialPage";
import MiddleText from "./components/tutorial/middleText";
// import Three from "./components/navbar/three";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tutorials">
          <Route index element={<Tutorials />} />
          <Route path=":name" element={<TutorialPage />}>
            <Route path=":title" element={<MiddleText />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
