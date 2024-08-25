import { Song } from "@/models/song";
import { NextRequest } from "next/server";

export const getDiscussions = async (
    req: NextRequest,
) => {
    const song_id = req.nextUrl.searchParams.get("query");

    try {
        const song = await Song.find({ song_id });
        console.log(`The song data the api sending is ${song}`);
        return new Response(JSON.stringify(song), {
            status: 200,
            statusText: "Success",
        });
    } catch (err) {
        console.log(err);
        return new Response(JSON.stringify({ message: "Error fetching song" }), {
            status: 400,
            statusText: "Error",
        });
    }
};