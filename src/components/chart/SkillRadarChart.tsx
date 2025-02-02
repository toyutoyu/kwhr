"use client";

import { DefineColor } from "@/theme/color";
import { MediaSize } from "@/theme/mediaSize";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ChartOptions,
} from "chart.js";
import { useEffect, useState } from "react";
import { Radar } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ChartContainer = styled.div`
  width: 300px; /* 必要な幅 */
  height: 300px; /* 必要な高さ */
  margin: 0 auto; /* 中央に配置 */

  @media screen and (min-width: ${MediaSize.S}) {
    width: 450px; /* 必要な幅 */
    height: 450px; /* 必要な高さ */
  }
`;

export default function SkillRadarChart() {
  const [pointRadius, setPointRadius] = useState(6);
  const [labelFontSize, setLabelFontSize] = useState(12);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setPointRadius(4);
        setLabelFontSize(12);
      } else {
        setPointRadius(6);
        setLabelFontSize(18);
      }
    };

    // 初回判定
    handleResize();
    // リサイズイベント登録
    window.addEventListener("resize", handleResize);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const skillData = {
    labels: ["UI/UX", "Front-end", "Back-end", "Framework", "Cloud", "Infra"],
    datasets: [
      {
        data: [3.5, 3.5, 3, 3, 2, 2],
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        borderColor: DefineColor.black,
        borderWidth: 2,
        pointRadius: pointRadius,
        pointHoverRadius: pointRadius,
        pointBackgroundColor: DefineColor.black, // データポイントの背景色
        pointHoverBackgroundColor: DefineColor.black,
        pointHoverBorderColor: DefineColor.black,
      },
    ],
  };

  const options: ChartOptions<"radar"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false, // ツールチップを有効化
      },
    },
    scales: {
      r: {
        max: 5,
        min: 0,
        ticks: {
          stepSize: 1, // 目盛りの間隔を1に設定
          count: 5,

          color: DefineColor.black,
          backdropColor: DefineColor.white,
          callback: (value) => Number(value).toFixed(0),
          z: 1,
          font: {
            size: labelFontSize, // ラベルフォントのサイズ
            family: "Chakra Petch, sans-serif",
            weight: "bold", // ラベルフォントの太さ
          },
        },
        grid: {
          color: DefineColor.black, // 外枠の線の色
          lineWidth: 1, // 外枠の線の太さ
        },
        angleLines: {
          color: DefineColor.black, // 軸線（中心から放射状に伸びる線）の色
          lineWidth: 1, // 軸線の太さ
        },
        pointLabels: {
          color: DefineColor.black, // ラベルの色を変更
          font: {
            size: labelFontSize, // ラベルフォントのサイズ
            family: "Chakra Petch, sans-serif",
            weight: "bold", // ラベルフォントの太さ
          },
        },
      },
    },
  };
  return (
    <ChartContainer>
      <Radar data={skillData} options={options} />
    </ChartContainer>
  );
}
