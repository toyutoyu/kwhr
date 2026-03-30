"use client";

import { Page } from "@/components/container/Page";
import Section from "@/components/section/Section";
import Stack from "@/components/stack/Stack";
import { DefineShadow } from "@/theme/shadow";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Description, Square, Title, WhiteTitle } from "./style/Style";

const slides = [
  { src: "/images/gallery/ガントチャート.png", alt: "ガントチャート" },
  { src: "/images/gallery/プロジェクト.png", alt: "プロジェクト" },
  { src: "/images/gallery/親工程詳細.png", alt: "親工程詳細" },
  {
    src: "/images/gallery/プロジェクト新規作成.png",
    alt: "プロジェクト新規作成",
  },
  { src: "/images/gallery/ユーザー.png", alt: "ユーザー" },
  { src: "/images/gallery/新規作成.png", alt: "新規作成" },

  { src: "/images/gallery/ユーザー詳細.png", alt: "ユーザー詳細" },
  { src: "/images/gallery/チーム.png", alt: "チーム" },
];

export default function Page004() {
  return (
    <Page>
      <Section id="gallery">
        <Page>
          <Stack space="X5L">
            <Stack space="L" justifyContent="center" alignItems="center">
              <Stack space="M" justifyContent="center" alignItems="center">
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  space="XXS"
                >
                  <Square>
                    <WhiteTitle>工</WhiteTitle>
                  </Square>
                  <Title>程管理ソフトのムードボード</Title>
                </Stack>
                <Swiper
                  modules={[Navigation, Pagination]}
                  navigation
                  pagination={{ clickable: true }}
                  autoHeight
                  style={{
                    width: "100%",
                    maxWidth: "800px",
                    paddingBottom: "32px",
                    // @ts-expect-error swiper css variables
                    "--swiper-pagination-color": "#222222",
                    "--swiper-pagination-bullet-inactive-color": "#B2BCC7",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-navigation-color": "#222222",
                  }}
                >
                  {slides.map((slide) => (
                    <SwiperSlide key={slide.src}>
                      <Image
                        src={slide.src}
                        alt={slide.alt}
                        width={1}
                        height={1}
                        style={{
                          width: "100%",
                          height: "auto",
                          boxShadow: `${DefineShadow.LEVEL1}`,
                        }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <Description>
                  建設業界向け工程管理システムのUIデザイン
                  <br />
                  現場の工程管理や工程表作成を効率化するWebアプリケーションのUIデザインを担当しました。
                  <br />
                  現場監督や施工管理担当者といったユーザーを想定し、情報の視認性や操作性に配慮した設計を行いました。
                  <br />
                  業務フローの整理からプロトタイピング、デザイン制作、開発チームとの連携まで一貫して携わっています。
                </Description>
              </Stack>
            </Stack>
          </Stack>
        </Page>
      </Section>
    </Page>
  );
}
