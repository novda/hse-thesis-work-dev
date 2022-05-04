import "./App.css";
import { MainPage } from "./components/MainPage";
import { RecommendationPage } from "./components/RecommendationPage";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={""} element={<MainPage />} />
        <Route path={"recommends"} element={<RecommendationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
