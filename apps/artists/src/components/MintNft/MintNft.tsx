'use client'
import { useWindowSize } from "@uidotdev/usehooks";
import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  NFTList,
  TextArea,
  Form,
  InputGroupColumn,
  Input,
  InputGroup,
  Label,
  Select,
  Button,
  ToggleSwitch,
  Slider,
  SliderContainer,
  Checkbox,
} from "../../../styles/TrackDetails/style";
import {
  DropArea,
  Instructions,
  FileInput,
} from "../../../styles/CoverArt/style";
import upload from "../../../assets/upload.svg";
import Image from "next/image";
import axios from "axios";
import Confetti from "react-confetti";
import { useNavigate } from "react-router-dom";
import { Network, Provider } from "aptos";
import {useRouter} from "next/navigation";
// const wallet
type musicNFT = {
  id: number;
  name: string;
  musicDescription: string;
  primaryGenre: string;
  secondaryGenre: string;
  primaryLanguage: string;
  featuredArtist: string;
  isrc: string;
  writtenBy: string;
  explicitLyrics: boolean;
  radioEdit: boolean;
  musicCoverFileLink: string;
  songLink: string;
};
const createCollection = async (
    cid: string | null,
    Album: string,
    description: string,
    max_sup: number | 0
  ) => {
    // @ts-ignore
    const wallet = window?.aptos; // see "Connecting"
    const response = await wallet.connect();
    const account = await wallet.account();
    if (!account) {
      console.error("No account connected");
      return;
    }

    if (cid == null) {
      console.error("CID is null, error creating collection.");
      return;
    }

    const textEncoder = new TextEncoder();

    const c_id = textEncoder.encode(`${cid}`);
    const desc = textEncoder.encode(description);
    const album = textEncoder.encode(Album);

    const payload = {
      arguments: [album, c_id, desc, max_sup],
      function: `${moduleAddress}::MarketPlace::set_collection_details`,
      type: "entry_function_payload",
      type_arguments: [],
    };

    try {
      const pendingTransaction = await (
        window as any
      ).aptos.signAndSubmitTransaction(payload);
      const client = provider.aptosClient;
      const txn = await client.waitForTransactionWithResult(
        pendingTransaction.hash
      );
      console.log(txn);
    } catch (error: any) {
      console.error("Error creating collection:", error);
    }
  };
const publishSong = async (
    amount: number,
    price: number,
    cid: string | null,
    songName: string,
    Album: string,
    desc: string,
    song_image_cid: string | null,
    song_audio_cid: string | null,
    max_sup: number
  ) => {
    // @ts-ignore
    const wallet = window?.aptos; // see "Connecting"
    const response = await wallet.connect();
    const account = await wallet.account();
    if (!account) {
      console.error("No account connected");
      return;
    }

    if (cid == null || song_image_cid == null || song_audio_cid == null) {
      console.error("CID is null, error minting and listing NFT.");
      return;
    }

    const textEncoder = new TextEncoder();

    const song_cid = textEncoder.encode(`${cid}`);
    const song_Name = textEncoder.encode(songName);
    const audio_cid = textEncoder.encode(`${song_audio_cid}`);
    const image_cid = textEncoder.encode(`${song_image_cid}`);
    const album = textEncoder.encode(Album);
    const description = textEncoder.encode(desc);

    const payload = {
      arguments: [
        song_Name,
        album,
        song_cid,
        description,
        image_cid,
        audio_cid,
        max_sup,
        amount,
        price,
      ],
      function: `${moduleAddress}::MarketPlace::mint_and_list_token`,
      type: "entry_function_payload",
      type_arguments: [],
    };

    try {
      const pendingTransaction = await (
        window as any
      ).aptos.signAndSubmitTransaction(payload);
      const client = provider.aptosClient;
      const txn = await client.waitForTransactionWithResult(
        pendingTransaction.hash
      );
      console.log(txn);
    } catch (error: any) {
      console.error("Error publishing music:", error);
    }
  };

interface TrackDetailsProps {
  selected: string;
}

const provider = new Provider(Network.DEVNET);

const moduleAddress =
  "0x41c77f139fc81c6991b7e41954e9b19614a7f2180f8b332ff21b658fac050ef7";
  const mintingmoduleAddress = "0x6cc3715231ae4482e8a77095d1c11bc9954f65d8b9476de87abf61624d2d216c";

const MintNft =()=>{
    return(
        <div style={{width:`fit-content`, height:`fit-content`, display:`flex`, flexDirection:`column`, alignItems:`center`}}>
        <div style={{display:`flex`,flexDirection:`column`, width:`71vw`, height:`fit-content`, borderRadius:`24px`, backgroundColor:`rgba(31, 34, 40, 0.50)`, justifyContent:`space-between`,padding:`8px`}}>
            <div>
                <p style={{fontSize:`20px`,color:`white`, margin:`10px 16px`}}>Mint NFTs</p>
            </div>
            <div style={{display:`flex`,flexDirection:`row`, width:`100%`, height:`fit-content`, borderRadius:`16px`, backgroundColor:`rgba(28, 30, 34, 0.8)`, justifyContent:`space-between`,padding:`16px 24px`, alignItems:`center`}}>
                <div style={{display:`flex`,flexDirection:`row`, justifyContent:'space-between',width:`35%`}}>
                    <div style={{display:`flex`,flexDirection:`column`}}>
                        <p style={{fontSize:`14px`,color:`white`, opacity:`0.6`}}>Collection of</p>
                        <p style={{fontSize:`24px`,color:`white`}}>25</p>
                    </div>
                    <div>
                        <p style={{fontSize:`14px`,color:`white`, opacity:`0.6`}}>Gas Fee</p>
                        <p style={{fontSize:`24px`,color:`white`}}>CHT 0.2345</p>
                    </div>
                </div>
                <div style={{width:`fit-content`, height:`44px`, display:`flex`, justifyContent:`center`, alignItems:`center`, padding:`12px 32px`, borderRadius:`24px`,backgroundColor:`rgba(255, 255, 255, 0.10)`}}>
                    <p>Minting will be automatically done</p>
                </div>
            </div>
        </div>
        <div style={{width:`240px`, height:`44px`, display:`flex`, justifyContent:`center`, alignItems:`center`, padding:`12px 32px`, borderRadius:`24px`,backgroundColor:`white`, marginTop:`16px`}}>
            <p>Launch Release</p>
        </div>
        </div>
    )
}

export default MintNft