"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactPage from "./ContactPage";

export default function ContactPageWrapper() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ""}
      language="ja"
    >
      <ContactPage />
    </GoogleReCaptchaProvider>
  );
}
