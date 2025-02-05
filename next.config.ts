import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // 画像最適化を無効化
  },
  output: "export", // 静的エクスポートを有効にする
  trailingSlash: true,
};

export default nextConfig;
