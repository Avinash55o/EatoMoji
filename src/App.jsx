import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/landing.page";
import Home from "./pages/home.page";
import Signin from "./pages/signin.page";
import Signup from "./pages/signup.page";
import ProfilePage from "./pages/profile.page";

import { DarkThemeContext } from "./contextAPI/darkThemeContext";
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
