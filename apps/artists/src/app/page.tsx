"use client";
import TopTracks from "@/components/topTracksCard/TopTracks";
import NFTCollection from "@/components/nftCard/NFTCollection";
import ArtistBar from "@/components/ArtistBar";
import { useState } from "react";
import { WalletManager } from "../utils/connect_wallet";
import DiscoverArtist from "@/components/discoverArtistCard/discoverArtist";
import { Layout } from "@/components";
import { useRouter } from "next/navigation";
import Staking_page from "./stake/page";

const walletManager = new WalletManager();

const Home_page = () => {
  const isConnected = walletManager.isWalletConnected();

  const isStaked = localStorage.getItem("isStaked") === "true";

  return isConnected && isStaked ? (
    <Layout>
      <ArtistBar />
      <TopTracks />
      <NFTCollection />
      <DiscoverArtist />
    </Layout>
  ) : (
    <Staking_page />
  );
};

export default Home_page;
