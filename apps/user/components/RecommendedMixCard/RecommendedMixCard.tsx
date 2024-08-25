import styled from "styled-components";
import bg from "@assets/bg.svg";
import Image from "next/image";
import {
  CardContainer,
  CardImage,
  CardInfo,
  Title,
  Description,
} from "@styles/RecommendedMixCard/style";
import local from "@assets/local.jpeg";
import halsey from "@assets/halsey.jpeg";
import billie from "@assets/billie.jpeg";
import kanye from "@assets/kanye.jpeg";
import kuhad from "@assets/kuhad.jpeg";
import thug from "@assets/thug.jpeg";

export const RecommendedMixedCard1 = () => {
  return (
    <CardContainer>
      <CardImage src={halsey} width={700} height={700} alt="" />
      <CardInfo>
        <Title>Halsey</Title>
        <Description>Since you listen to Lana del ray</Description>
      </CardInfo>
    </CardContainer>
  );
};

export const RecommendedMixedCard2 = () => {
  return (
    <CardContainer>
      <CardImage src={kanye} width={700} height={700} alt="" />
      <CardInfo>
        <Title>Kanye West</Title>
        <Description>Since you listen to Travis Scott</Description>
      </CardInfo>
    </CardContainer>
  );
};

export const RecommendedMixedCard3 = () => {
  return (
    <CardContainer>
      <CardImage src={kuhad} width={700} height={700} alt="" />
      <CardInfo>
        <Title>Prateek Kuhad</Title>
        <Description>Since you listen to Aditya Rikhari</Description>
      </CardInfo>
    </CardContainer>
  );
};

export const RecommendedMixedCard4 = () => {
  return (
    <CardContainer>
      <CardImage src={billie} width={700} height={700} alt="" />
      <CardInfo>
        <Title>Billie Eilish</Title>
        <Description>Since you listen to Lana del ray</Description>
      </CardInfo>
    </CardContainer>
  );
};

export const RecommendedMixedCard5 = () => {
  return (
    <CardContainer>
      <CardImage src={thug} width={700} height={700} alt="" />
      <CardInfo>
        <Title>Young Thug</Title>
        <Description>Since you listen to Travis Scott</Description>
      </CardInfo>
    </CardContainer>
  );
};

export const RecommendedMixedCard6 = () => {
  return (
    <CardContainer>
      <CardImage src={local} width={700} height={700} alt="" />
      <CardInfo>
        <Title>The Local Train</Title>
        <Description>Since you listen to Sanam & Aditya Rikhari</Description>
      </CardInfo>
    </CardContainer>
  );
};
