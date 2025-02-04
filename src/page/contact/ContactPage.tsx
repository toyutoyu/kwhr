"use client";

import Button from "@/components/button/Button";
import SectionTitle from "@/components/section/SectionTitle";
import Stack from "@/components/stack/Stack";
import { DefineFontSize } from "@/theme/fontSize";
import { MediaSize } from "@/theme/mediaSize";
import { DefineShadow } from "@/theme/shadow";
import { DefineSpacing } from "@/theme/spacing";
import { useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { Controller, useForm } from "react-hook-form";
import styled from "styled-components";

const Page = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 100px - 52px);
`;

const PageInner = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 ${DefineSpacing.M};
`;

const ContactCard = styled.div`
  box-shadow: ${DefineShadow.LEVEL3};
  width: 100%;
  max-width: 600px;
  background: white;
  padding: ${DefineSpacing.M} ${DefineSpacing.L};
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.XS};
`;

const StyledInput = styled.input`
  border: 1px solid black;
  height: 40px;
  width: 100%;
  padding: ${DefineSpacing.S};
  font-family: var(--font-notojp);
`;

const StyledTextArea = styled.textarea`
  border: 1px solid black;
  min-height: 240px;
  height: 240px;
  width: 100%;
  padding: ${DefineSpacing.S};
  font-family: var(--font-notojp);
`;
const StyledErrorMessage = styled.p`
  font-size: ${DefineFontSize.XXS};
  color: red;
`;

type ContactForm = {
  name: string;
  email: string;
  inquiry: string;
};
const StyledText = styled.p`
  font-family: var(--font-notojp);
  font-size: ${DefineFontSize.XXS};
  letter-spacing: 1.2;
  line-height: 1.2;
  text-align: center;
  @media screen and (min-width: ${MediaSize.S}) {
    font-size: ${DefineFontSize.M};
  }
`;

export default function ContactPage() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    mode: "onBlur",
    defaultValues: { name: "", email: "", inquiry: "" },
  });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSendContact = async (data: ContactForm) => {
    return await fetch(
      "https://coadflvrvf.execute-api.ap-northeast-1.amazonaws.com/contact",
      {
        method: "post",
        body: JSON.stringify(data),
      }
    );
  };

  const handleReCaptchaVerify = useCallback(
    async (data: ContactForm) => {
      if (!executeRecaptcha) {
        return;
      }
      const recaptchaToken = await executeRecaptcha("Contact");
      console.log({ recaptchaToken });
      if (recaptchaToken) {
        const res = await fetch(
          "https://ve2oyk3yje.execute-api.ap-northeast-1.amazonaws.com/verifyRecaptcha",
          {
            method: "post",
            body: JSON.stringify({ token: recaptchaToken }),
          }
        );
        if (res) {
          const json = await res.json();
          console.log(json);
          if (json.success) handleSendContact(data);
        }
      }
    },
    [executeRecaptcha]
  );

  return (
    <Page>
      <PageInner>
        <Stack alignItems="center" justifyContent="center" space="L">
          <Stack alignItems="center" justifyContent="center">
            <SectionTitle>CONTACT</SectionTitle>
            <StyledText>
              ご興味を持っていただきまして、誠にありがとうございます。
              <br />
              ご不明点・ご質問がある方など、お気軽にお問い合わせください。
            </StyledText>
          </Stack>
          <ContactCard>
            <form onSubmit={handleSubmit(handleReCaptchaVerify)}>
              <Stack space="L" alignItems="center">
                <Stack space="XXS">
                  <StyledLabel htmlFor="name">お名前</StyledLabel>
                  <Controller
                    control={control}
                    rules={{
                      required: "必須項目です",
                    }}
                    {...register("name")}
                    render={({ field }) => (
                      <StyledInput
                        type="text"
                        id="name"
                        maxLength={100}
                        placeholder="お名前を入力してください"
                        {...field}
                      />
                    )}
                  />
                  {errors.name && (
                    <StyledErrorMessage>
                      {errors.name.message}
                    </StyledErrorMessage>
                  )}
                </Stack>
                <Stack space="XXS">
                  <StyledLabel htmlFor="email">メールアドレス</StyledLabel>
                  <Controller
                    control={control}
                    rules={{
                      required: "必須項目です",
                    }}
                    {...register("email")}
                    render={({ field }) => (
                      <StyledInput
                        type="email"
                        id="email"
                        maxLength={100}
                        placeholder="メールアドレスを入力してください"
                        {...field}
                      />
                    )}
                  />
                  {errors.email && (
                    <StyledErrorMessage>
                      {errors.email.message}
                    </StyledErrorMessage>
                  )}
                </Stack>
                <Stack space="XXS">
                  <StyledLabel htmlFor="email">お問い合わせ内容</StyledLabel>
                  <Controller
                    control={control}
                    rules={{
                      required: "必須項目です",
                    }}
                    {...register("inquiry")}
                    render={({ field }) => (
                      <StyledTextArea
                        placeholder="お問い合わせ内容をご入力ください"
                        maxLength={1000}
                        {...field}
                      />
                    )}
                  />
                  {errors.email && (
                    <StyledErrorMessage>
                      {errors.email.message}
                    </StyledErrorMessage>
                  )}
                </Stack>
                <Button type="submit">送信する</Button>
              </Stack>
            </form>
          </ContactCard>
        </Stack>
      </PageInner>
    </Page>
  );
}
