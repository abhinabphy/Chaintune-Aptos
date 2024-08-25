"use client";

import Image from "next/image";
import bg from "@assets/bg.svg";
import arr2 from "@assets/arr2.svg";
import {
  Cont,
  Top,
  Top1,
  Top2,
  Text,
  List,
  ListItem,
  ItemInfo,
  Info1,
  Info2,
} from "@styles/sidebar/style";
import { useRef, useState } from "react";

const SideBar = () => {
  const [val, setVal] = useState<Number>(1);
  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  const handleClick = (val: Number) => {
    // console.log(val)
    setVal(val);
    if (val === 1 && ref1.current && ref2.current) {
      ref1.current.style.color = "#FFF";
      ref2.current.style.color = "#ffffff56";
    }
    if (val === 2 && ref1.current && ref2.current) {
      ref2.current.style.color = "#FFF";
      ref1.current.style.color = "#ffffff56";
    }
  };

  return (
    <Cont>
      <Top>
        <Top1>
          <Text
            ref={ref1}
            onClick={() => handleClick(1)}
            style={{ color: "#FFF" }}
          >
            Library
          </Text>
          <Text
            ref={ref2}
            onClick={() => handleClick(2)}
            style={{ color: "##ffffff56" }}
          >
            Queue
          </Text>
        </Top1>
        <Top2>
          <Image src={arr2} alt="no" />
        </Top2>
      </Top>
      {val === 1 ? (
        <List>
          <ListItem>
            <Image
              src="https://svgshare.com/i/1126.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Daily Mix 1</Info1>
              <Info2>Playlist • Made by ChainTune</Info2>
            </ItemInfo>
          </ListItem>
          <ListItem>
            <Image
              src="https://svgshare.com/i/111k.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Daily Mix 2</Info1>
              <Info2>Playlist • Made by ChainTune</Info2>
            </ItemInfo>
          </ListItem>
          <ListItem>
            <Image
              src="https://svgshare.com/i/112H.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Daily Mix 3</Info1>
              <Info2>Playlist • Made by ChainTune</Info2>
            </ItemInfo>
          </ListItem>
          <ListItem>
            <Image
              src="https://svgshare.com/i/1127.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Daily Mix 4</Info1>
              <Info2>Playlist • Made by ChainTune</Info2>
            </ItemInfo>
          </ListItem>
          <ListItem>
            <Image
              src="https://svgshare.com/i/111R.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Daily Mix 5</Info1>
              <Info2>Playlist • Made by ChainTune</Info2>
            </ItemInfo>
          </ListItem>
          <ListItem>
            <Image
              src="https://svgshare.com/i/111m.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Daily Mix 6</Info1>
              <Info2>Playlist • Made by ChainTune</Info2>
            </ItemInfo>
          </ListItem>
          <ListItem>
            <Image
              src="https://svgshare.com/i/110j.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Mellow</Info1>
              <Info2>Playlist • Made by ChainTune</Info2>
            </ItemInfo>
          </ListItem>
          <ListItem>
            <Image
              src="https://svgshare.com/i/1113.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Rock</Info1>
              <Info2>Playlist • Made by ChainTune</Info2>
            </ItemInfo>
          </ListItem>
          <ListItem>
            <Image
              src="https://svgshare.com/i/111_.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Pop</Info1>
              <Info2>Playlist • Made by ChainTune</Info2>
            </ItemInfo>
          </ListItem>
        </List>
      ) : (
        <List>
          <ListItem>
            <Image
              src="https://svgshare.com/i/10xH.svg"
              width={700}
              height={700}
              alt=""
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Lazarus</Info1>
              <Info2>Dave</Info2>
            </ItemInfo>
          </ListItem>
          <ListItem>
            <Image
              src="https://svgshare.com/i/10xc.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Dark Paradise</Info1>
              <Info2>Lana del ray</Info2>
            </ItemInfo>
          </ListItem>
          <ListItem>
            <Image
              src="https://svgshare.com/i/10xH.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Lazarus</Info1>
              <Info2>Dave</Info2>
            </ItemInfo>
          </ListItem>
          <ListItem>
            <Image
              src="https://svgshare.com/i/10ww.svg"
              alt=""
              width={700}
              height={700}
              style={{
                width: "3.916vw",
                height: "3.916vw",
                borderRadius: "12px",
              }}
            />
            <ItemInfo>
              <Info1>Yosemite</Info1>
              <Info2>Travis Scott</Info2>
            </ItemInfo>
          </ListItem>
        </List>
      )}
    </Cont>
  );
};

export default SideBar;
