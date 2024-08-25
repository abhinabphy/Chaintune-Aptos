import { Album } from "@/models/album";
import { Artist } from "@/models/artist";
import { NextRequest } from "next/server";
import pinataSDK from '@pinata/sdk';

const pinata = new pinataSDK({pinataJWTKey: process.env.NEXT_PUBLIC_JWT});

export const POST = async (req: NextRequest) => {
    const { name, image, desc, creator, songs, artists, date, properties , walletAddress} = await req.json();
    
    if (!name || !image || !desc || !creator || !songs || !artists || !date || !properties || !walletAddress) {
        return new Response(JSON.stringify({ message: "Missing required fields" }),
            {
                status: 400,
                statusText: "Error",
            }
        );
    }
    try {
        const external_url = process.cwd();
        const album = await Album.create({
            name,
            image,
            external_url,
            desc,
            creator,
            songs,
            artists,
            date,
            properties
        })

        const artist = await Artist.findOneAndUpdate(
            { walletAddress: walletAddress },
            { $push: { albums: album._id } },
            { new: true }
        );

        if (!artist) {
            return new Response(JSON.stringify({ message: "Artist not found" }),    
                {
                    status: 400,
                    statusText: "Error",
                }
            );
        }

        let newJsonBody = {
            name: album,
            image: `https://ipfs.io/ipfs/${image}`,
            external_url: process.cwd(),
            attributes: [
              {
                trait_type: "Artist",
                value: artist,
              },
              {
                trait_type: "Posting Date",
                value: Date,
              },
            ],
            properties: {
              files: [
                {
                  type: "image/*",
                  uri: `https://ipfs.io/ipfs/${image}`,
                },
              ],
              category: "Collection",
            },
          };

          console.log("Uploading file to IPFS...")
          const options = {
              pinataMetadata: {
                  name: `${newJsonBody.name}.json`,
              },
              pinataOptions: {
                  cidVersion: 0 as const,
              }
          }
      
      
          const res = await pinata.pinJSONToIPFS(newJsonBody, options)
          .then((result) => {
                //handle results here
                console.log("result.IpfsHash", result.IpfsHash);
                return new Response(result.IpfsHash, {status: 200})
            }).catch((err) => {
                //handle error here
                console.log("err");
                console.log(err);
                return new Response("Data not correct", {status: 400})
            });
          return res;

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: "Error fetching album" }),    
            {
                status: 400,
                statusText: "Error",
            }
        );
    }
}
