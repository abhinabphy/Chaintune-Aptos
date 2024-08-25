"use client";
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

import { useWindowSize } from "@uidotdev/usehooks";
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

interface TrackDetailsProps {
  selected: string;
}

const provider = new Provider(Network.DEVNET);

const moduleAddress =
  "0x41c77f139fc81c6991b7e41954e9b19614a7f2180f8b332ff21b658fac050ef7";

const TrackDetails: React.FC<TrackDetailsProps> = (props) => {
  // const navigate = useNavigate();
  const [trackName, setTrackName] = useState("");
  const [albumName, setAlbumName] = useState("");
  const [albumDescription, setAlbumDescription] = useState("");
  const [musicDescription, setMusicDescription] = useState("");
  const [primaryGenre, setPrimaryGenre] = useState("");
  const [secondaryGenre, setSecondaryGenre] = useState("");
  const [primaryLanguage, setPrimaryLanguage] = useState("");
  const [featuredArtists, setfeaturedArtists] = useState("");
  const [isrc, setisrc] = useState("");
  const [writtenBy, setwrittenBy] = useState("");
  const [explicitLyrics, setExplicitLyrics] = useState<boolean>(false);
  const [radioEdit, setRadioEdit] = useState<boolean>(false);
  const [musicCoverFile, setMusicCoverFile] = useState<File | null>(null);
  const [song, setSong] = useState<HTMLAudioElement | File | null>(null);
  const [albumCoverFile, setAlbumCover] = useState<File | null>(null);
  const [musicCoverFileLink, setMusicCoverFileLink] = useState("");
  const [songLink, setSongLink] = useState("");
  const [albumCoverFileLink, setAlbumCoverLink] = useState("");
  const [nfts, setNfts] = useState<musicNFT[]>([]);
  const [audioCid, setaudioCid] = useState<string | null>(null);
  const [songImageCid, setSongImageCid] = useState<string | null>(null);
  const [albumImageCid, setAlbumImageCid] = useState<string | null>(null);
  const { width, height } = useWindowSize();
  const [uploaded, setUploaded] = useState(false);
  const [albumCid, setAlbumCid] = useState<string | null>(null);
  const artistName = "";

  useEffect(() => {
    if (albumName != "" && albumImageCid && artistName) {
      createAlbumData(albumName, albumImageCid, artistName);
    }
  }, [albumImageCid, albumName]);

  useEffect(() => {
    if (albumCid && albumName !== "" && albumDescription !== "") {
      createCollection(albumCid, albumName, albumDescription, 0);
    }
  }, [albumCid]);

  const handleRemoveNFT = (id: number) => {
    setNfts((currentNfts) => currentNfts.filter((nft) => nft.id !== id));
  };

  const createAlbumData = async (
    album: string,
    imageCid: string | null,
    artist: string
  ) => {
    if (imageCid === null) {
      console.error("No image uploaded, error creating album.");
      return;
    }
    const origin = window.location.origin;
    console.log(origin);

    const response = await axios.post(
      `${origin}/api/uploadAlbum/new`,
      {
        imageCid: imageCid,
        album: album,
        artist: artist,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    const hash = response.data;
    setAlbumCid(hash);
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

    const song_cid = textEncoder.encode(`ipfs://${cid}`);
    const song_Name = textEncoder.encode(songName);
    const audio_cid = textEncoder.encode(`ipfs://${song_audio_cid}`);
    const image_cid = textEncoder.encode(`ipfs://${song_image_cid}`);
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

    const c_id = textEncoder.encode(`https://ipfs.io/ipfs/${cid}`);
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

  const handleSingleSongSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (song && musicCoverFile) {
      handleUploadToIPFS(song, "SongAudio");
      handleUploadToIPFS(musicCoverFile, "SongImage");
      alert("Song Uploaded");
      window.location.replace("http://localhost:3001/manageRelease");
    }
    setTrackName("");
    setMusicDescription("");
    setPrimaryGenre("");
    setSecondaryGenre("");
    setPrimaryLanguage("");
    setfeaturedArtists("");
    setisrc("");
    setwrittenBy("");
    setExplicitLyrics(false);
    setRadioEdit(false);
    setMusicCoverFile(null);
    setSong(null);
    setSongLink("");
    setMusicCoverFileLink("");
  };

  const handleAlbumSongSubmit = () => {
    const newNFT: musicNFT = {
      id: nfts.length,
      name: trackName,
      musicDescription: musicDescription,
      primaryGenre: primaryGenre,
      secondaryGenre: secondaryGenre,
      primaryLanguage: primaryLanguage,
      featuredArtist: featuredArtists,
      isrc: isrc,
      writtenBy: writtenBy,
      explicitLyrics: explicitLyrics,
      radioEdit: radioEdit,
      musicCoverFileLink: musicCoverFileLink,
      songLink: songLink,
    };

    setNfts([...nfts, newNFT]);
    setTrackName("");
    setMusicDescription("");
    setPrimaryGenre("");
    setSecondaryGenre("");
    setPrimaryLanguage("");
    setfeaturedArtists("");
    setisrc("");
    setwrittenBy("");
    setExplicitLyrics(false);
    setRadioEdit(false);
    setMusicCoverFile(null);
    setSong(null);
    setSongLink("");
    setMusicCoverFileLink("");
  };

  const handleAlbumSubmit = () => {
    setNfts([]);
    setAlbumName("");
    setAlbumDescription("");
    setAlbumCover(null);
    setAlbumCoverLink("");
  };
  const createSongData = async () => {
    if (musicCoverFile === null) {
      console.error("No image uploaded, error publishing music.");
      return;
    }
    if (song === null) {
      console.error("No audio uploaded, error publishing music.");
      return;
    }
    const origin = window.location.origin;
    console.log(origin);
    const res = await axios.post(
      `${origin}/api/uploadSong`,
      {
        song: trackName,
        musicDescription: musicDescription,
        genre: primaryGenre,
        // artist:
        license: isrc,
        imageCid: songImageCid,
        audioCid: audioCid,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // .then(function (response) {
    //   console.log(response.data);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    console.log(res.data);
    // setSongCid(res.data);
  };

  const handleUploadToIPFS = async (
    file: File | HTMLAudioElement,
    type: string
  ) => {
    if (file) {
      if (type === "SongAudio") {
        setaudioCid(null);
      } else if (type === "SongImage") {
        setSongImageCid(null);
      } else if (type === "AlbumImage") {
        setAlbumImageCid(null);
      }
      const formData = new FormData();
      formData.append("file", file as Blob);

      const metadata = JSON.stringify({
        name: `${file.name}`, // eslint-disable-line
      });
      formData.append("pinataMetadata", metadata);

      const options = JSON.stringify({
        cidVersion: 0,
      });
      formData.append("pinataOptions", options);
      console.log("Uploading file to IPFS...", formData);
      try {
        const resFile = await axios.post(
          "https://api.pinata.cloud/pinning/pinFileToIPFS",
          formData,
          {
            maxBodyLength: Infinity,
            headers: {
              // "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
              "Content-Type": `multipart/form-data;`,
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_JWT}`,
            },
          }
        );

        console.log(resFile.data);
        if (type === "SongAudio") {
          setaudioCid(resFile.data.IpfsHash);
        } else if (type === "SongImage") {
          setSongImageCid(resFile.data.IpfsHash);
        } else if (type === "AlbumImage") {
          setAlbumImageCid(resFile.data.IpfsHash);
        }
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  };

  const onFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    console.log(type);
    if (e.target.files && e.target.files.length > 0) {
      const uploadedFile = e.target.files[0];
      if (type === "album") {
        setAlbumCover(uploadedFile);
        setAlbumCoverLink("https://file.rendit.io/n/9g1xOjeJcwAKem8e97VG.png");
      } else if (type === "trackCover") {
        setMusicCoverFile(uploadedFile);
        setMusicCoverFileLink(
          "https://file.rendit.io/n/9g1xOjeJcwAKem8e97VG.png"
        );
      } else if (type === "track") {
        setSong(uploadedFile);
        setSongLink("https://file.rendit.io/n/9g1xOjeJcwAKem8e97VG.png");
      }
    }
  };

  const onClick = useCallback(() => {
    const fileInput = document.getElementById("fileInput");
    fileInput?.click();
  }, []);
  const onClick2 = useCallback(() => {
    const fileInput = document.getElementById("fileInput2");
    fileInput?.click();
  }, []);

  return (
    <div>
      {props.selected == "single" ? (
        <></>
      ) : (
        <Container>
          <div
            style={{
              fontFamily: "Aileron",
              fontSize: "2vw",
              fontWeight: "300",
              color: "white",
            }}
          >
            Album Description
          </div>
          <InputGroupColumn style={{ gridTemplateColumns: "1fr 2fr" }}>
            <InputGroup>
              <Label> Album Cover Art</Label>
              <DropArea onClick={onClick}>
                <FileInput
                  type="file"
                  id="fileInput"
                  accept=".png,.jpg,.jpeg"
                  onChange={(e) => onFileChange(e, "album")}
                />
                <Image
                  src={upload}
                  alt=""
                  style={{ width: "5vw", height: "5vw" }}
                />
                <Instructions>
                  {albumCoverFile == null ? (
                    <div>
                      <span style={{ fontSize: "2.2vh" }}>
                        Browse File or Drag and drop the file here
                      </span>
                      <br />
                      <span style={{ opacity: 0.6 }}>
                        .png and .jpg files with 1:1 aspect ratio up to 10mb are
                        supported. ChainTune recommends 1080px or more for best
                        quality.
                      </span>
                    </div>
                  ) : (
                    <span style={{ fontSize: "2.2vh" }}>
                      File Uploaded Successfully.
                    </span>
                  )}
                </Instructions>
              </DropArea>
            </InputGroup>
            <InputGroup>
              <Label htmlFor="albumName">Name</Label>
              <Input
                id="albumName"
                type="text"
                value={albumName}
                onChange={(e) => setAlbumName(e.target.value)}
                placeholder="Enter album name..."
              />
              <Label htmlFor="description">Description</Label>
              <TextArea
                id="description"
                value={albumDescription}
                onChange={(e) => setAlbumDescription(e.target.value)}
                placeholder="Enter description here..."
              />
            </InputGroup>
          </InputGroupColumn>
        </Container>
      )}

      <Container>
        <div
          style={{
            fontFamily: "Aileron",
            fontSize: "2vw",
            fontWeight: "300",
            color: "white",
          }}
        >
          Track Details
        </div>

        <InputGroupColumn style={{ gridTemplateColumns: "1fr 2fr" }}>
          <InputGroup>
            <Label> Upload Track Cover</Label>
            <DropArea
              // isDragActive={isDragActive}
              // onDragOver={onDragOver}
              // onDragLeave={onDragLeave}
              // onDrop={onDrop}
              onClick={onClick}
            >
              <FileInput
                type="file"
                id="fileInput"
                accept=".png,.jpg,.jpeg"
                onChange={(e) => onFileChange(e, "trackCover")}
              />
              <Image
                src={upload}
                alt=""
                style={{ width: "5vw", height: "5vw" }}
              />
              <Instructions>
                {musicCoverFile === null ? (
                  <div>
                    <span style={{ fontSize: "2.2vh" }}>
                      Browse File or Drag and drop the file here
                    </span>
                    <br />
                    <span style={{ opacity: 0.6 }}>
                      .png and .jpg files with 1:1 aspect ratio up to 10mb are
                      supported. ChainTune recommends 1080px or more for best
                      quality.
                    </span>
                  </div>
                ) : (
                  <span style={{ fontSize: "2.2vh" }}>
                    File Uploaded Successfully.
                  </span>
                )}
              </Instructions>
            </DropArea>
            <Label>Upload Track</Label>
            <DropArea
              // isDragActive={isDragActive}
              // onDragOver={onDragOver}
              // onDragLeave={onDragLeave}
              // onDrop={onDrop}
              onClick={onClick2}
            >
              <FileInput
                type="file"
                id="fileInput2"
                accept=".mp3"
                onChange={(e) => onFileChange(e, "track")}
              />
              <Image
                src={upload}
                alt=""
                style={{ width: "5vw", height: "5vw" }}
              />
              <Instructions>
                {song === null ? (
                  <div>
                    <span style={{ fontSize: "2.2vh" }}>
                      Browse File or Drag and drop the file here
                    </span>
                    <br />
                    <span style={{ opacity: 0.6 }}>
                      .mp3, .wav, .aac files upto 50mb are supported. ChainTune
                      recommends 256 kbps or more for best quality.
                    </span>
                  </div>
                ) : (
                  <span style={{ fontSize: "2.2vh" }}>
                    File Uploaded Successfully.
                  </span>
                )}
              </Instructions>
            </DropArea>
          </InputGroup>
          <div>
            <InputGroup>
              <Label htmlFor="trackName">Name</Label>
              <Input
                id="trackName"
                type="text"
                value={trackName}
                onChange={(e) => setTrackName(e.target.value)}
                placeholder="Enter track name..."
              />
              <Label htmlFor="description">Description</Label>
              <TextArea
                id="description"
                value={musicDescription}
                onChange={(e) => setMusicDescription(e.target.value)}
                placeholder="Enter description here..."
              />
            </InputGroup>
            <InputGroupColumn>
              <InputGroup>
                <Label htmlFor="trackName">Primary Genre</Label>
                <Select
                  id="primaryGenre"
                  onChange={(e) => setPrimaryGenre(e.target.value)}
                >
                  <option value="pop">Pop</option>
                  <option value="rock">Rock</option>
                  <option value="hip-hop-rap">Hip-hop / Rap</option>
                  <option value="electronic-edm">Electronic / EDM</option>
                  <option value="country">Country</option>
                  <option value="jazz">Jazz</option>
                  <option value="classical">Classical</option>
                </Select>
                <Label htmlFor="trackName">Primary Language</Label>
                <Select
                  id="primaryLanguage"
                  onChange={(e) => setPrimaryLanguage(e.target.value)}
                >
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                  <option value="korean">Korean</option>
                </Select>
                <Label htmlFor="isrc">Licensed By</Label>
                <Input
                  id="isrc"
                  type="text"
                  onChange={(e) => setisrc(e.target.value)}
                  placeholder="Enter the Licensing body name..."
                />
                <Label>
                  <div style={{ display: "flex" }}>
                    <span style={{ fontSize: "1.5vw" }}>
                      Contains Explicit Lyrics
                    </span>
                    <SliderContainer>
                      <Checkbox
                        checked={explicitLyrics}
                        onChange={(e) => setExplicitLyrics(e.target.checked)}
                        type="checkbox"
                      />
                      <Slider />
                    </SliderContainer>
                  </div>
                </Label>
              </InputGroup>
              <InputGroup>
                <Label htmlFor="trackName">Secondary Genre</Label>
                <Select
                  id="secondaryGenre"
                  onChange={(e) => setSecondaryGenre(e.target.value)}
                >
                  <option value="heavy-metal">Heavy Metal</option>
                  <option value="death-metal">Death Metal</option>
                  <option value="smooth-jazz">Smooth Jazz</option>
                  <option value="funk">Funk</option>
                  <option value="country-pop">Country Pop</option>
                  <option value="indie-rock">Indie Rock</option>
                  <option value="hard-rock">Hard Rock</option>
                  <option value="pop-rock">Pop Rock</option>
                </Select>
                <Label htmlFor="trackName">Featured Artists (if any)</Label>
                <Select
                  id="artists"
                  onChange={(e) => setfeaturedArtists(e.target.value)}
                >
                  <option value="taylor-swift">Taylor Swift</option>
                  <option value="ariana-grande">Ariana Grande</option>
                  <option value="beyonce">Beyoncé</option>
                  <option value="miles-davis">John Denver</option>
                  <option value="justin-bieber">Justin Bieber</option>
                  <option value="ed-sheeran">Ed Sheeran</option>
                  <option value="the-beatles">The Beatles</option>
                  <option value="queen">Queen</option>
                  <option value="led-zeppelin">Led Zeppelin</option>
                  <option value="coldplay">Coldplay</option>
                  <option value="foo-fighters">Foo Fighters</option>
                  <option value="eminem">Eminem</option>
                  <option value="drake">Drake</option>
                  <option value="louis-armstrong">Louis Armstrong</option>
                  <option value="miles-davis">Miles Davis</option>
                  <option value="ella-fitzgerald">Ella Fitzgerald</option>
                  <option value="john-coltrane">John Coltrane</option>
                </Select>
                <Label htmlFor="writtenby">Written by (Optional)</Label>
                <Input
                  id="writtenBy"
                  type="text"
                  placeholder="Enter songwriter's name here..."
                  onChange={(e) => setwrittenBy(e.target.value)}
                />
                <Label>
                  <div style={{ display: "flex" }}>
                    <span style={{ fontSize: "1.5vw" }}>Radio Edit</span>
                    <SliderContainer>
                      <Checkbox
                        type="checkbox"
                        checked={radioEdit}
                        onChange={(e) => setRadioEdit(e.target.checked)}
                      />
                      <Slider />
                    </SliderContainer>
                  </div>
                </Label>
              </InputGroup>
            </InputGroupColumn>
          </div>
        </InputGroupColumn>
        <br />
        {props.selected == "single" ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleSingleSongSubmit}>Publish Track</Button>
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button onClick={handleAlbumSongSubmit}>+ Add Track</Button>
          </div>
        )}
      </Container>
      {props.selected == "single" ? (
        <></>
      ) : (
        <Container>
          <NFTList>
            {nfts.map((nft) => (
              <div
                key={nft.id}
                style={{
                  display: `flex`,
                  flexDirection: `row`,
                  justifyContent: `space-between`,
                  alignItems: `center`,
                  height: `112px`,
                  borderRadius: `16px`,
                  width: `100%`,
                  background: `#26282C66`,
                  padding: `8px`,
                  marginTop: `8px`,
                }}
              >
                <img
                  src={nft.musicCoverFileLink}
                  style={{ width: `96px`, height: `96px` }}
                />
                <div
                  style={{
                    display: `flex`,
                    flexDirection: `row`,
                    justifyContent: `space-between`,
                    alignItems: `center`,
                    width: `85%`,
                    margin: `12px`,
                  }}
                >
                  <div>
                    <p className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full">
                      {nft.name}
                    </p>
                    <p
                      className="text-s font-['Aileron'] font-light leading-[12px] text-white w-full"
                      style={{ marginTop: `8px`, opacity: `0.6` }}
                    >
                      {nft.musicDescription}
                    </p>
                  </div>
                  <div>
                    <div className="  bg-[linear-gradient(159.05deg, rgba(28, 30, 34, 0.33) 1.89%, rgba(31, 34, 40, 0.5) 89.55%),linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%)] bg-cover bg-50%_50% bg-blend-normal bg-no-repeat flex flex-row justify-between w-full h-12 items-start pt-3 px-4 hover:border rounded-[24px]">
                      <button
                        className="text-sm font-['Aileron'] leading-[20px] text-white border-2 border-transparent bg-[linear-gradient(163.58deg, rgba(255, 255, 255, 0.06) -2.71%, rgba(255, 255, 255, 0) 102.71%)]"
                        onClick={() => handleRemoveNFT(nft.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </NFTList>
          <br />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button onClick={handleAlbumSubmit}>Publish Album</Button>
          </div>
        </Container>
      )}
    </div>
  );
};

export default TrackDetails;
