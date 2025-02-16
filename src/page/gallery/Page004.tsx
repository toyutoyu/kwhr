"use client";

import { Page } from "@/components/container/Page";
import Section from "@/components/section/Section";
import Stack from "@/components/stack/Stack";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Description,
  Square,
  StyledImage,
  Title,
  WhiteTitle,
} from "./style/Style";

// Import Swiper styles
import { DefineShadow } from "@/theme/shadow";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const sliderList = [
  {
    path: "/images/illust/IMG_1068.JPG",
    alt: "IMG_1068",
  },
  {
    path: "/images/illust/IMG_1443.PNG",
    alt: "IMG_1443",
  },
  {
    path: "/images/illust/IMG_1444.PNG",
    alt: "IMG_1444",
  },
  {
    path: "/images/illust/IMG_1445.PNG",
    alt: "IMG_1445",
  },
  {
    path: "/images/illust/IMG_1446.PNG",
    alt: "IMG_1446",
  },
  {
    path: "/images/illust/IMG_1447.PNG",
    alt: "IMG_1447",
  },
  {
    path: "/images/illust/IMG_1448.JPG",
    alt: "IMG_1448",
  },
  {
    path: "/images/illust/IMG_1449.JPG",
    alt: "IMG_1449",
  },
];

export default function Page003() {
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
                    <WhiteTitle>ク</WhiteTitle>
                  </Square>
                  <Title>ライアントワーク</Title>
                </Stack>
                <div style={{ width: "400px" }}>
                  <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    {sliderList.map((sliderItem) => (
                      <SwiperSlide>
                        <StyledImage>
                          <Image
                            src={sliderItem.path}
                            alt={sliderItem.alt}
                            width={1}
                            height={1}
                            style={{
                              width: "100%",
                              height: "50%",
                              boxShadow: `${DefineShadow.LEVEL1}`,
                            }}
                          />
                        </StyledImage>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                <Description>
                  社内向けのiPad用受付アプリです。
                  <br />
                  Flutter学習のために個人開発したものを社内向けに公開しました。
                </Description>
              </Stack>
            </Stack>
          </Stack>
        </Page>
      </Section>
    </Page>
  );
}
