import Album from "@models/album"
import { connectToDB } from "@utils/database"

// changes @models -> @/models

export const GET = async (request: Request) => {
    try {
        await connectToDB()

        const songs = await Album.find({})
        
        return new Response(JSON.stringify(songs), {
            status: 200
        })
    } catch (error) {
        return new Response('Failes to fetch all songs', {
            status: 500
        })
    }
}