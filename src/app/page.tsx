"use client";
// import { FormEvent, useState } from "react";

import Portfolio from "@/components/lottie/Portfolio";
import Overlay from "@/components/overlay/Overlay";
import Image from "next/image";

export default function Home() {
  // const [recaptchaToken, setRecaptchaToken] = useState("");
  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   // reCAPTCHAトークンを送信
  //   const res = await fetch("/api/verify-recaptcha", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ token: recaptchaToken }),
  //   });

  //   const result = await res.json();
  //   if (result.success) {
  //     alert("reCAPTCHA verification passed!");
  //   } else {
  //     alert("reCAPTCHA verification failed!");
  //   }
  // };

  return (
    <div>

      <main style={{ position: "relative", width: "100%" }}>
        <div
          style={{
            position: "absolute",
            top: "100px",
            width: "100%",
            height: "100%",
          }}
        >
          <Portfolio />
        </div>
        <div style={{ position: "absolute", top: "380px", width: "100%" }}>
          <Image
            src="/images/2023-2025.svg"
            alt="2023-2025"
            width="700"
            height="400"
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
