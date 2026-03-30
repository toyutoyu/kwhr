import Bubble from "@/components/bubble/Bubble";
import Section from "@/components/section/Section";
import Stack from "@/components/stack/Stack";
import useScroll from "@/hook/useScroll";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import { DefineSpacing } from "@/theme/spacing";
import Image from "next/image";
import styled from "styled-components";
import SectionTitle from "../../../components/section/SectionTitle";

const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;
  padding: 24px;
`;

const StyledProfileInner = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
    flex-direction: row;
    align-items: flex-start;
  }
`;

const StyledProfileAvatar = styled.div`
  height: 160px;
  width: 160px;
  background-image: url("/images/self-image.png");
  background-size: contain;
  background-repeat: no-repeat;
  @media screen and (min-width: ${MediaSize.S}) {
    height: 200px;
    width: 200px;
  }
`;

const StyledSelfIntroduction = styled.p`
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.S};
  font-weight: 200;
  letter-spacing: 0.125rem;
  line-height: 1.5rem;
  white-space: pre-wrap;
  text-align: center;
  width: 100%;
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
  }
`;

const ProfileName = styled.h1`
  font-family: var(--font-makinas4);
  font-size: ${DefineFontSize.XXL};
`;
const ProfileRomeName = styled.h3`
  font-size: ${DefineFontSize.XS};
`;

const Table = styled.table`
  font-family: var(--font-makinas4);
`;
const Th = styled.th`
  padding: ${DefineSpacing.XS} ${DefineSpacing.S};
`;
const Td = styled.td`
  padding: ${DefineSpacing.XS} ${DefineSpacing.S};
`;
type Props = {
  odd?: boolean;
};
export default function ProfileSection({ odd }: Props) {
  const { setLastElement, isVisible } = useScroll();
  return (
    <Section id="profile" ref={setLastElement}>
      <SectionTitle odd={odd} isVisible={isVisible}>
        PROFILE
      </SectionTitle>
      <StyledProfile>
        <StyledProfileInner>
          <Stack alignItems="center" justifyContent="center" space="L">
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              space="XS"
            >
              <StyledProfileAvatar />
              <Image
                src="/images/QRcode.svg"
                alt="QRコード"
                width={150}
                height={150}
              />
            </Stack>
            <Stack alignItems="center" justifyContent="center">
              <ProfileName>川原 雄人</ProfileName>
              <ProfileRomeName>Kawahara Yuto</ProfileRomeName>
            </Stack>

            <Table>
              <tbody>
                <tr>
                  <Th>生年月日</Th>
                  <Td>1994/11/4</Td>
                </tr>
                <tr>
                  <Th>出身地</Th>
                  <Td>大阪</Td>
                </tr>
                <tr>
                  <Th>趣味</Th>
                  <Td>登山/ボードゲーム/カラオケ</Td>
                </tr>
              </tbody>
            </Table>
          </Stack>
          <Bubble>
            <StyledSelfIntroduction>
              {`はじめまして、川原雄人です。新卒でIT企業に入社し、約4年間は組み込み開発に従事していました。その後、ユーザー体験に直接関わりたいと考えWeb開発へ転向し、現在はUI/UX設計とフロントエンド実装を担当しています。単なる見た目のデザインではなく、「ユーザーが迷わず使い、自然に行動できる体験」を実現するUI/UXデザイナーを志向しています。設計から実装まで一貫して関わることで、体験の質を高めることを強みとしています。本ポートフォリオは、自身のスキルと経験を可視化するためにフルスクラッチで開発しました。`}
            </StyledSelfIntroduction>
          </Bubble>
        </StyledProfileInner>
      </StyledProfile>
    </Section>
  );
}
