import { Album } from "@/models/album";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  
  try {
    const albums = await Album.find({})
      .populate("songs")
      .exec();

    if (!albums) {
      return new Response(JSON.stringify({ message: "Error fetching albums" }),
        {
          status: 400,
          statusText: "Error",
        }
      );
    }

    return new Response(JSON.stringify(albums),
      {
        status: 200,
        statusText: "Success",
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(JSON.stringify({ message: "Error fetching albums" }),
      {
        status: 400,
        statusText: "Error",
      }
    );
  }
};
