import mongooseconnect from "@/lib/mongoose";
import { Artist } from "@/models/artist";
import pinataSDK from "@pinata/sdk";
const pinata = new pinataSDK({ pinataJWTKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjMTZiOTFjZC00Yzk2LTQ0YmQtYjQ5OC1hNDMyMzA0OWIxYzciLCJlbWFpbCI6ImFtYW5ndXB0YTQzMjAwNUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJGUkExIn0seyJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MSwiaWQiOiJOWUMxIn1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiNWZhNDJiM2Q4ZWFmNWYzYmZjNTYiLCJzY29wZWRLZXlTZWNyZXQiOiJhNzU4ZmRmYjU0MDA2NzYzYTExMzY1MmI2MzE0YWYyYzA2OTA3MTExNGY4OGRiZjA2YmM0ZGEwMDgxOTJhOGY2IiwiZXhwIjoxNzU2MTUxNjYwfQ.WTRdDtvwS12bGVVuWtKea7IBGsdmdV-uuzxxyD9zmD8" });

export const POST = async (req: Request) => {
  const { name, desc, walletAddress,imageCid } = await req.json();
  const date = new Date().toISOString();

  try {
    await mongooseconnect();

    if (!name || !desc || !walletAddress) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        {
          status: 400,
          statusText: "Error",
        }
      );
    }

    const image = `https://gateway.pinata.cloud/${imageCid}`;

    const artist = await Artist.create({
      name,
      image: image,
      desc,
      walletAddress,
      // date,
      albums: [],
      // community,
      earnings: 0,
      plays: 0,
    });
    console.log(`The artist data the api is sending is ${artist}`);

    let newJsonBody = {
      name: name,
      image: `ipfs://${imageCid}`,
      attributes: [
        {
          trait_type: "Date joined",
          value: date,
        },
      ],
      properties: {
        files: [
          {
              type: "image/*",
              uri: `ipfs://${imageCid}`,
          },
        ],
        category: "Collection",
      },
    };
    console.log("Hello");
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
            console.log("File uploaded successfully to IPFS")
            console.log(result.IpfsHash)
            return new Response(result.IpfsHash, {
              status:200, 
              statusText:"Success",
            })
        })
        .catch((err) => {
            console.log('Error: ', err)
            return new Response('Data not correct', {
              status:500, 
              statusText: "Error",
            })
        })

    return res;
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: "Error fetching artist" }), {
      status: 400,
      statusText: "Error",
    });
  }
};
