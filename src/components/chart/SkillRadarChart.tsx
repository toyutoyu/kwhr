"use client";

import { DefineColor } from "@/theme/Color";
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
import { Chakra_Petch } from "next/font/google";
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

export const skillData = {
  labels: ["UI/UX", "Front-end", "Back-end", "Framework", "Cloud", "Infra"],
  datasets: [
    {
      data: [3.5, 3.5, 3, 3, 2, 2],
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderColor: DefineColor.black,
      borderWidth: 3,
      pointRadius: 6,
      pointHoverRadius: 6,
      pointBorderColor: DefineColor.black,
      pointBackgroundColor: DefineColor.yellow, // データポイントの背景色
      pointHoverBackgroundColor: DefineColor.black,
      pointHoverBorderColor: DefineColor.yellow,
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
        backdropColor: DefineColor.yellow,
        callback: (value) => Number(value).toFixed(0),
        z: 1,
        font: {
          size: 12, // ラベルフォントのサイズ
          family: "Chakra Petch, sans-serif",
          weight: "bold", // ラベルフォントの太さ
        },
      },
      grid: {
        color: DefineColor.black, // 外枠の線の色
        lineWidth: 2, // 外枠の線の太さ
      },
      angleLines: {
        color: DefineColor.black, // 軸線（中心から放射状に伸びる線）の色
        lineWidth: 2, // 軸線の太さ
      },
      pointLabels: {
        color: DefineColor.black, // ラベルの色を変更
        font: {
          size: 16, // ラベルフォントのサイズ
          family: "Chakra Petch, sans-serif",
          weight: "bold", // ラベルフォントの太さ
        },
      },
    },
  },
};

const ChartContainer = styled.div`
  width: 400px; /* 必要な幅 */
  height: 400px; /* 必要な高さ */
  margin: 0 auto; /* 中央に配置 */
`;

export default function SkillRadarChart() {
  return (
    <ChartContainer>
      <Radar data={skillData} options={options} />
    </ChartContainer>
  );
}
