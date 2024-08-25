import { Album } from "@/models/album";
import { NextRequest } from "next/server";

export const GET  = async (req: NextRequest) => {
    const id  = req.nextUrl.searchParams.get("query");

    try {
        const album = await Album.findById(id).populate('songs').exec();

        if (!album) {
            return new Response(JSON.stringify({ message: "Error fetching album" }),
                {
                    status: 400,
                    statusText: "Error",
                }
            );
        }

        return new Response(JSON.stringify(album),
            {
                status: 200,
                statusText: "Success",
            }
        );
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