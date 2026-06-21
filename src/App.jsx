import "./css/App.css";
import Favorites from "./Pages/Favorites";
import HomePage from "./Pages/HomePage";
import Watched from "./Pages/Watched";
import { Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("darkMode");

    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  return (
    <MovieProvider>
      <div className={darkMode ? "app dark" : "app"}>
        <NavBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/watched" element={<Watched />} />
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;