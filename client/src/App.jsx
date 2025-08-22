import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing.page.jsx";
import Home from "./pages/home.page.jsx";
import Signin from "./pages/signin.page.jsx";
import Signup from "./pages/signup.page.jsx";
import ProfilePage from "./pages/profile.page.jsx";

import { DarkThemeContext } from "./contextAPI/darkThemeContext.js";
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState("dark");

  return (
    <DarkThemeContext.Provider value={{ isDark, setIsDark }}>
      <div className={`${isDark}`}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/page/home" element={<Home />} />
          <Route path="/page/signin" element={<Signin />} />
          <Route path="/page/signup" element={<Signup />} />
          <Route path="/page/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </DarkThemeContext.Provider>
  );
}

export default App;
