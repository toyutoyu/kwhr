"use client";
// import { FormEvent, useState } from "react";

import Portfolio from "@/components/lottie/Portfolio";

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
        <div style={{ position: "absolute", top: "0px", width: "100%" }}>
          <Portfolio />
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
