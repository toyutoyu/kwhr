"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import ContactPage from "./ContactPage";

export default function ContactPageWrapper() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey="6LeyUbUqAAAAALL4N3pQdHcD4CMHA8YXzmKvy7gb"
      language="ja"
    >
      <ContactPage />
    </GoogleReCaptchaProvider>
  );
}
