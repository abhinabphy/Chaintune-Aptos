import { Song } from "@/models/song";

export const getProjects = async (req: Request) => {
  try {
    const songs = await Song.find({});
    console.log(songs);

    return new Response(JSON.stringify(songs), {
      status: 200,
      statusText: "Success",
    });
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: "Error fetching songs" }), {
      status: 400,
      statusText: "Error",
    });
  }
};
