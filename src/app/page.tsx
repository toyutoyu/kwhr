import HomePage from "@/page/home/HomePage";

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

  return <HomePage />;
}
