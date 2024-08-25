import pinataSDK from '@pinata/sdk';
const pinata = new pinataSDK({ pinataJWTKey: process.env.NEXT_PUBLIC_JWT });
import { Song } from '@/models/song';
import mongooseconnect from '@/lib/mongoose';

export async function POST(req: Request) {
  try {
    const { song, album, creator, imageCid, artist, audioCid, genre,license, language } = await req.json();
    const currentDate = new Date();
    await mongooseconnect();
    let newJsonBody = {
      name: song,
      album: album,
      creator: creator,
      image: `https://gateway.pinata.cloud/${imageCid}`,
      animation_url: `https://ipfs.io/ipfs/${audioCid}`,
      attributes: [
        {
          trait_type: 'Artist',
          value: artist,
        },
        {
          trait_type: 'Album',
          value: album,
        },
        {
          trait_type: 'Genre',
          value: genre,
        },
        {
          trait_type: 'License',
          value: license,
        },
        {
          trait_type: 'Posting Date',
          value: currentDate.toISOString(),
        },
        {
          trait_type: 'Language',
          value: language,
        },
      ],
      properties: {
        files: [
          {
            type: 'audio/*',
            uri: `https://ipfs.io/ipfs/${audioCid}`,
          },
          {
            type: 'image/*',
            uri: `https://gateway.pinata.cloud/${imageCid}`,
          },
        ],
        category: 'Audio',
      },
    };

    console.log('Uploading file to IPFS...');
    const options = {
      pinataMetadata: {
        name: `${newJsonBody.name}.json`,
      },
    };

    const pinataResult = await pinata.pinJSONToIPFS(newJsonBody, options);
    const hash = pinataResult.IpfsHash;
    
    newJsonBody = {
      name: song,
      album: album,
      creator: creator,
      image: `https://gateway.pinata.cloud/ipfs/${hash}`,
      animation_url: `https://ipfs.io/ipfs/${hash}`,
      attributes: [
        {
          trait_type: 'Artist',
          value: artist,
        },
        {
          trait_type: 'Album',
          value: album,
        },
        {
          trait_type: 'Genre',
          value: genre,
        },
        {
          trait_type: 'License',
          value: license,
        },
        {
          trait_type: 'Posting Date',
          value: currentDate.toISOString(),
        },
        {
          trait_type: 'Language',
          value: language,
        },
      ],
      properties: {
        files: [
          {
            type: 'audio/*',
            uri: `https://ipfs.io/ipfs/${hash}`,
          },
          {
            type: 'image/*',
            uri: `https://gateway.pinata.cloud/ipfs/${hash}`,
          },
        ],
        category: 'Audio',
      },
    };
    // Save the data to MongoDB
    const savedSong = await Song.create({
      name: newJsonBody.name,
      album: newJsonBody.album,
      creator: newJsonBody.creator,
      image: newJsonBody.image,
      animation_url: newJsonBody.animation_url,
      attributes: newJsonBody.attributes,
      properties: newJsonBody.properties,
    });

    console.log('File uploaded successfully to IPFS');
    console.log('Data saved to MongoDB:', savedSong);

    return new Response(pinataResult.IpfsHash, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response('Data not correct', { status: 500 });
  }
}
