import Link from "next/link";
import * as React from "react";
import styled from "styled-components";

type t = {
  name: string;
  id: string;
  link: string;
  img: string;
}

const DiscCard = ({name, id, link, img}: t) => {
  return (
    <Div key={id}>
      <Div2>
        <Img
          loading="lazy"
          srcSet={img}
        />
        <Div3>{name}</Div3>
      </Div2>
      <Div4>For the top 1% listeners of {name}</Div4>
      <Div5>
        Get access to exclusive direct interactions with the artist, early
        announcements, and more...
      </Div5>
      <Link href={link ? link : '/'} target="_blank">
        <Div6>
          <Div7>
            <Img2
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4343ee6b9fcd44e4921a50ce12e0ec81a4b5af2564196be7ed7803c837fcb53?"
            />
            <Div8>Join using Discord</Div8>
          </Div7>
          <Img3
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7da62d30317438ad0701f811d52c762256561305608e80d4c0cc87a74777e37f?"
          />
        </Div6>
      </Link>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px 12px;
  border-radius: 16px;
  &:hover{
    background-color: #32343642;
  }
`;

const Div2 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
`;

const Img = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 4.476vw;
  border-radius: 50px;
  backdrop-filter: blur(60px);
  overflow: hidden;
  max-width: 100%;
`;

const Div3 = styled.div`
  color: #fff;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 300 24px/24px Aileron, sans-serif;
`;

const Div4 = styled.div`
  color: #fff;
  white-space: nowrap;
  justify-content: center;
  align-items: start;
  border-radius: 30px;
  width: 13.217vw;
  background-color: rgba(255, 255, 255, 0.1);
  margin-top: 23px;
  /* width: 100%; */
  padding: 6px 12px 6px 12px;
  font: 400 12px/20px Aileron, sans-serif;
`;

const Div5 = styled.div`
  color: #fff;
  margin-top: 13px;
  width: 22.937vw;
  font: 400 14px/20px Aileron, sans-serif;
`;

const Div6 = styled.div`
  border-radius: 24px;
  border: 1px solid ;
  background: linear-gradient(
    159deg,
    rgba(28, 30, 34, 0.33) 1.89%,
    rgba(31, 34, 40, 0.5) 89.55%
  );
  backdrop-filter: blur(60px);
  display: flex;
  margin-top: 18px;
  width: 100%;
  justify-content: space-between;
  gap: 20px;
  padding: 12px 17px;
`;

const Div7 = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  overflow: hidden;
  max-width: 100%;
`;

const Div8 = styled.div`
  color: #fff;
  align-self: center;
  flex-grow: 1;
  white-space: nowrap;
  margin: auto 0;
  font: 400 14px/20px Aileron, sans-serif;
`;

const Img3 = styled.img`
  aspect-ratio: 1.08;
  object-fit: contain;
  object-position: center;
  width: 13px;
  stroke-width: 1px;
  stroke: #fff;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
  margin: auto 0;
`;

export default DiscCard