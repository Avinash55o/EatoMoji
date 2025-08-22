import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageCard from "../components/messageCard.components.jsx";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = { email, password };
    setLoading(true);
    setMsg(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signin`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "signin failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setMsg(`welcome back ${data.user.name}`);

      setTimeout(() => {
        navigate("/page/home");
      }, 2500);
    } catch (error) {
      setMsg(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen dark:bg-dark-background bg-light-background">
      {msg && (
        <div className="mb-4">
          <MessageCard
            title={msg}
            subtitle={"Everything seems great"}
            type="success"
          />
        </div>
      )}

      <div className="max-w-[450px] max-h-[950px] bg-gradient-to-t from-white to-[#f4f7fb] rounded-[40px] p-[25px_35px] border-[5px] border-white shadow-[0_30px_30px_-20px_#FFB86B] dark:shadow-[0_30px_30px_-20px_#9A8CFF] m-5">
        <div className="text-center font-black text-[30px] dark:text-dark-accent text-light-primary">
          Sign In
        </div>

        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            required
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="E-mail"
            className="w-full bg-white border-none py-[15px] px-[20px] rounded-[20px] mt-[15px] shadow-[0_10px_10px_-5px_#FFB86B] dark:shadow-[0_10px_10px_-5px_#9A8CFF] placeholder:text-[#aaa] focus:outline-none focus:border-x-2 focus:border-x-[#12B1D1]"
          />

          <input
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            className="w-full bg-white border-none py-[15px] px-[20px] rounded-[20px] mt-[15px] shadow-[0_10px_10px_-5px_#FFB86B] dark:shadow-[0_10px_10px_-5px_#9A8CFF] placeholder:text-[#aaa] focus:outline-none focus:border-x-2 focus:border-x-[#12B1D1]"
          />

          <span className="block mt-[10px] ml-[10px] text-[11px] text-[#0099ff]">
            <a href="#">Forgot Password ?</a>
          </span>

          <button
            type="submit"
            disabled={loading}
            className="block w-full font-bold bg-gradient-to-r from-light-primary-button to-light-primary-buttonhover dark:bg-gradient-to-r dark:from-dark-accent dark:to-dark-accentButtonhover  text-white py-[15px] mt-[20px] mx-auto rounded-[20px] border-none shadow-[0_20px_10px_-15px_#FFB86B] dark:shadow-[0_20px_10px_-15px_#9A8CFF] transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-[0_23px_10px_-20px_#FFB86B] dark:hover:shadow-[0_23px_10px_-20px_#9A8CFF] active:scale-95 active:shadow-[0_15px_10px_-10px_rgba(133,189,215,0.88)]"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <span className="block text-center mt-[15px] text-[9px]">
          <a href="#" className="text-[#0099ff]">
            Learn user licence agreement
          </a>
        </span>
      </div>
    </div>
  );
}

export default Signin;
