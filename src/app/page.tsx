"use client";

import { useState, useEffect, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const tabs = [
  { label: "Aramco Knowledge", value: "aramco_knowledge" },
  { label: "World Knowledge", value: "world_knowledge" },
];

export default function LoginPage() {
  const router = useRouter();
  const [data, setData] = useState({ email: "", password: "" });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [opacity1, setOpacity1] = useState(1);

  useEffect(() => {
    const t1 = setInterval(() => setOpacity((v) => (v === 0 ? 1 : 0)), 4000);
    const t2 = setInterval(() => setOpacity1((v) => (v === 0 ? 1 : 0)), 8000);
    return () => {
      clearInterval(t1);
      clearInterval(t2);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });
      const json = await res.json();
      if (json.success) {
        router.push("/app");
      } else {
        setError(json.message || "Invalid credentials");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="main-container">
      {/* ── Left Panel ─────────────────────────────────────────────── */}
      <div className="first-container">
        <div className="LeftContent">
          <div className="main-head mb-[3rem]">
            <div className="main-heading">
              <Image
                src="/assets/images/logo.png"
                alt="Aramco Logo"
                width={60}
                height={58}
                priority
                style={{ height: "60px", width: "auto" }}
              />
              <div className="metaBetabox">
                <Image
                  src="/assets/images/mataBrain.png"
                  alt="MetaBrain"
                  width={217}
                  height={35}
                  style={{ height: "35px", width: "auto" }}
                />
                <button className="beta-button">Beta</button>
              </div>
            </div>
            <p className="poweredPara">Powered by Aramco.AI</p>
          </div>

          <div className="content_box" style={{ opacity: opacity1 }}>
            <div className="main-btns" style={{ padding: 0, border: "none" }}>
              <div className="flex">
                {tabs.map(({ label }, index) => (
                  <span key={label} style={{ marginTop: "20px" }}>
                    {index === 0 && (
                      <button className="mainWrldBtn0  flex items-center gap-2 px-4 py-2 rounded-full bg-white border mr-2 text-[1.4rem]">
                        <Image
                          src="/assets/icons/Aramco_icon.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        {label}
                      </button>
                    )}
                    {!!opacity && index === 1 && (
                      <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border text-[1.4rem]">
                        <Image
                          src="/assets/icons/world-icon.svg"
                          alt=""
                          width={20}
                          height={20}
                        />
                        {label}
                      </button>
                    )}
                  </span>
                ))}
              </div>
            </div>

            <div className="sphereBox">
              <Image
                src="/assets/images/circlePattern.png"
                alt=""
                fill
                style={{ opacity, objectFit: "contain", transition: "1s" }}
              />
              <Image
                src="/assets/images/singleSphere.png"
                alt=""
                fill
                style={{
                  opacity: (opacity - 1) * -1,
                  objectFit: "contain",
                  transition: "1s",
                }}
              />
            </div>

            <div className="nano-box">
              <Image
                src="/assets/images/smalIcon.png"
                alt=""
                width={50}
                height={40}
              />
              <p>
                Unlock the Power of Knowledge with Our Dual Knowledge Bases!
                Dive into the Aramco Knowledge and Explore the World Knowledge.
                Your Gateway to Discovery Starts Here!
              </p>
            </div>
          </div>

          <div
            className="thirdBoxContainer"
            style={{ opacity: (opacity1 - 1) * -1 }}
          >
            <div className="thirdBox">
              <Image
                src="/assets/images/image1.png"
                alt=""
                width={450}
                height={532}
                className="img1"
                style={{ width: "450px", height: "auto" }}
              />
              <Image
                src="/assets/images/image2.png"
                alt=""
                width={472}
                height={165}
                className="img2"
                style={{ width: "460px", height: "auto" }}
              />
              <Image
                src="/assets/images/arrowrounded.png"
                alt=""
                width={108}
                height={108}
                className="img3"
                style={{ width: "108px", height: "auto" }}
              />
              <Image
                src="/assets/images/image4.png"
                alt=""
                width={710}
                height={161}
                className="img4"
                style={{ width: "710px", height: "auto" }}
              />
            </div>
          </div>
        </div>

        <div className="bottom_txt">
          <p>
            Unlock the Power of Knowledge with Our Dual Knowledge Bases! Dive
            into the Aramco Knowledge and Explore the World Knowledge. Your
            Gateway to Discovery Starts Here!
          </p>
        </div>
      </div>

      {/* ── Right Panel (Form) ─────────────────────────────────────── */}
      <div className="second-container">
        <div className="form-container">
          <form onSubmit={handleLogin}>
            <div>
              <h2>Let&apos;s get you in</h2>
              <p>Please enter your Aramco credentials to login</p>
            </div>

            <div className="first-input">
              <p className="input-label">Aramco Email</p>
              <div className="input-outer">
                <input
                  type="text"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="your.email"
                  autoComplete="email"
                />
                <span>@aramco.com</span>
              </div>
            </div>

            <div className="first-input">
              <p className="input-label">Aramco Password</p>
              <div className="input-outer">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  style={{ width: "27rem" }}
                />
                <button
                  type="button"
                  onClick={() => setIsPasswordVisible((v) => !v)}
                  style={{ background: "none", border: "none", cursor: "pointer", padding: "0 8px", display: "flex", alignItems: "center" }}
                >
                  <Image
                    src="/assets/images/blockEye.png"
                    alt="toggle password"
                    width={20}
                    height={20}
                    style={{ opacity: isPasswordVisible ? 0.4 : 1, pointerEvents: "none" }}
                  />
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-500 mt-[1rem] text-[1.3rem]">{error}</p>
            )}

            <div className="button_box">
              <button
                className="login-button"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Logging in…" : "Login"}
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}
