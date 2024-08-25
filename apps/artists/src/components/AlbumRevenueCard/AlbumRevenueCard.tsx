/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { ScrollXContainer } from "../RevenueCard/style";
const AlbumRevenueCard = () => {
  return (
    <ScrollXContainer>
      {Array.from(Array(1).keys()).map((index) => (
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            width: `360px`,
            height: `296px`,
            backgroundColor: `#1F2228`,
            borderRadius: `16px`,
            padding: `12px`,
          }}
        >
          <div
            style={{
              display: `flex`,
              flexDirection: `row`,
              justifyContent: `space-between`,
            }}
          >
            <div
              style={{
                height: `144px`,
                width: `144px`,
                borderRadius: `16px`,
                border: `1px solid white`,
              }}
            >
              <img
                src={
                  "https://i.scdn.co/image/ab67616d0000b273facd59568d0cfc3200296bb2"
                }
                style={{ height: `144px`, width: `144px` }}
              />
            </div>
            <div
              style={{
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `space-between`,
                padding: `16px`,
              }}
            >
              <p className="text-xl font-['Aileron'] font-light leading-[24px] text-white w-full">
                1. Country Roads
              </p>
              <div>
                <p className="text-sm font-['Aileron'] leading-[22px] text-white">
                  0 streams
                </p>
                {/* <p className="opacity-60 text-sm font-['Aileron'] leading-[22px] text-white">+48,595 last week</p> */}
              </div>
            </div>
          </div>
          <div
            style={{
              display: `flex`,
              flexDirection: `column`,
              padding: `16px`,
            }}
          >
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `space-between`,
              }}
            >
              <p className="text-sm font-['Aileron'] leading-[22px] text-white">
                Royalties
              </p>
              <p className="text-sm font-['Aileron'] leading-[22px] text-white">
                50
              </p>
            </div>
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `space-between`,
              }}
            >
              <p className="text-sm font-['Aileron'] leading-[22px] text-white">
                NFTs
              </p>
              <p className="text-sm font-['Aileron'] leading-[22px] text-white">
                50
              </p>
            </div>
            <div
              style={{
                display: `flex`,
                flexDirection: `row`,
                justifyContent: `space-between`,
                width: `310px`,
                height: `48px`,
                borderRadius: `24px`,
                border: `1px solid rgba(255, 255, 255, 0.10)`,
                padding: `18px`,
                alignItems: `center`,
                margin: `8px 0`,
                backgroundColor: `rgba(28, 30, 34, 0.33)`,
              }}
            >
              <p className="text-sm font-['Aileron'] leading-[22px] text-white">
                Manage Releases
              </p>
              <img
                src="https://file.rendit.io/n/2MsiJ95iJMNwJITgevH6.svg"
                alt="Vector"
                className="w-3"
              />
            </div>
          </div>
        </div>
      ))}
    </ScrollXContainer>
  );
};

export default AlbumRevenueCard;
