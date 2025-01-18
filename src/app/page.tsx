"use client";
import { FormEvent, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Lottie from "react-lottie";
import p_anime from "../../public/lottie/portfolio/p.json";
import o_anime from "../../public/lottie/portfolio/o.json";
import r_anime from "../../public/lottie/portfolio/r.json";
import t_anime from "../../public/lottie/portfolio/t.json";

export default function Home() {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // reCAPTCHAトークンを送信
    const res = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: recaptchaToken }),
    });

    const result = await res.json();
    if (result.success) {
      alert("reCAPTCHA verification passed!");
    } else {
      alert("reCAPTCHA verification failed!");
    }
  };
  const defaultOptions = {
    loop: false,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const pOptions = {
    ...defaultOptions,
    animationData: p_anime,
  };

  const oOptions = {
    ...defaultOptions,
    animationData: o_anime,
  };
  const rOptions = {
    ...defaultOptions,
    animationData: r_anime,
  };
  const tOptions = {
    ...defaultOptions,
    animationData: t_anime,
  };

  return (
    <div>
      <main>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Lottie
            options={pOptions}
            height={800}
            width={250}
            isStopped={isStopped}
            isPaused={isPaused}
          />
          <Lottie
            options={oOptions}
            height={800}
            width={250}
            isStopped={isStopped}
            isPaused={isPaused}
          />
          <Lottie
            options={rOptions}
            height={800}
            width={250}
            isStopped={isStopped}
            isPaused={isPaused}
          />
          <Lottie
            options={tOptions}
            height={800}
            width={200}
            isStopped={isStopped}
            isPaused={isPaused}
          />
        </div>

        {/* <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" required />
          </label>
          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
            onChange={(token: string | null) => {
              token && setRecaptchaToken(token);
            }}
          />
          <button type="submit">Submit</button>
        </form> */}
      </main>
    </div>
  );
}
