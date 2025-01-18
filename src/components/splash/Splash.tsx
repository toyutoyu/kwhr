import { useEffect } from "react";

export default function Splash() {
  useEffect(() => {
    let progress = 0;

    const interval = setInterval(() => {
      progress += 1;
      // progressBar.style.width = `${progress}%`;
      // percentageText.textContent = `${progress}%`;

      if (progress >= 100) {
        clearInterval(interval);
        // 読み込み完了後に次のアクションを実行する
        //   document.getElementById("loader").style.display = "none";
      }
    }, 30); // 30msごとに1%進行}
  }, []);
  return <></>;
}
