import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";
import TalentPage from "./pages/TalentPage/TalentPage";
import CraftPage from "./pages/CraftPage/CraftPage";
import RankingPage from "./pages/RankingPage/RankingPage";
import MapPage from "./pages/MapPage/MapPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth/signin" element={<SigninPage />} />
        <Route path="/auth/signup" element={<SignupPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/character" element={<CharacterPage />} />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/craft" element={<CraftPage />} />
        <Route path="/ranking" element={<RankingPage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </>
  );
}

export default App;
