import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = { name, email, password };
    setLoading(true);
    setMsg(null);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/signup`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "signup failed");

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setMsg("Signup successful! Redirecting...");

      setTimeout(() => {
        navigate("/page/home");
      }, 1500); // 1.5s delay
    } catch (err) {
      setMsg(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen dark:bg-dark-background bg-light-background">
      <div className="max-w-[450px] max-h-[950px] bg-gradient-to-t from-white to-[#f4f7fb] rounded-[40px] p-[25px_35px] border-[5px] border-white shadow-[0_30px_30px_-20px_#FFB86B] dark:shadow-[0_30px_30px_-20px_#9A8CFF] m-5">
        <div className="text-center font-black text-[30px] dark:text-dark-accent text-light-primary">
          Sign Up
        </div>

        <form className="mt-5" onSubmit={handleSubmit}>
          <input
            required
            type="name"
            name="userName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="userName"
            className="w-full bg-white border-none py-[15px] px-[20px] rounded-[20px] mt-[15px] shadow-[0_10px_10px_-5px_#FFB86B] dark:shadow-[0_10px_10px_-5px_#9A8CFF] placeholder:text-[#aaa] focus:outline-none focus:border-x-2 focus:border-x-[#12B1D1]"
          />

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

          <button
            type="submit"
            disabled={loading}
            className="block w-full font-bold bg-gradient-to-r from-light-primary-button to-light-primary-buttonhover dark:bg-gradient-to-r dark:from-dark-accent dark:to-dark-accentButtonhover  text-white py-[15px] mt-[20px] mx-auto rounded-[20px] border-none shadow-[0_20px_10px_-15px_#FFB86B] dark:shadow-[0_20px_10px_-15px_#9A8CFF] transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-[0_23px_10px_-20px_#FFB86B] dark:hover:shadow-[0_23px_10px_-20px_#9A8CFF] active:scale-95 active:shadow-[0_15px_10px_-10px_rgba(133,189,215,0.88)]"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        <div className="mt-[25px]">
          <span className="block text-center text-[10px] text-dark-secondary-text">
            {" "}
            <a href="/page/signin">Or Sign up with</a>
          </span>

          <div className="flex justify-center gap-[15px] mt-[5px]">
            {[
              {
                type: "google",
                svgPath:
                  "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z",
              },
              {
                type: "apple",
                svgPath:
                  "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.1 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z",
              },
              {
                type: "twitter",
                svgPath:
                  "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z",
              },
            ].map((social) => (
              <button
                key={social.type}
                className="bg-gradient-to-r from-black to-[#707070] border-[5px] border-white p-[5px] rounded-full w-[40px] aspect-square grid place-content-center shadow-[0_12px_10px_-8px_rgba(133,189,215,0.88)] transition-transform duration-200 ease-in-out hover:scale-120 active:scale-90"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="fill-white w-4 h-4"
                >
                  <path d={social.svgPath} />
                </svg>
              </button>
            ))}
          </div>
        </div>

        <span className="block text-center mt-[15px] text-[9px]">
          <a href="#" className="text-dark-accent">
            Learn user licence agreement
          </a>
        </span>
      </div>
      {msg && <p className="mt-3 text-center text-sm">{msg}</p>}
    </div>
  );
}

export default Signup;
