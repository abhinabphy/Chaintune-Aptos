import Album from "@models/album"
import { connectToDB } from "@utils/database"

type t = {
    id: string;
}

//GET (read)
export const GET = async (request: Request, {params}: {params: t}) => {
    try {
        await connectToDB()

        const album = await Album.findById(params.id).populate('songs')
        if(!album) return new Response("Album not found", {
            status: 404
        })

        return new Response(JSON.stringify(album), {
            status: 200
        })
    } catch (error) {
        return new Response('Failes to fetch album', {
            status: 500
        })
    }
}

//PATCH (update)
// export const PATCH = async (request, {params}) => {
//     const {prompt, tag} = await request.json()

//     try {
//         await connectToDB()

//         const existingPrompt = await Prompt.findById(params.id)

//         if(!existingPrompt) return new Response("Prompt not found", {
//             status: 404
//         })

//         existingPrompt.prompt = prompt
//         existingPrompt.tag = tag

//         await existingPrompt.save()

//         return new Response(JSON.stringify(existingPrompt), {
//             status: 200
//         })
//     } catch (error) {
//         return new Response("Failed to update prompt", {
//             status: 500
//         })
//     }
// }

// //DELETE (delete)
// export const DELETE = async (request, {params}) => {
//     try {
//         await connectToDB()

//         await Prompt.findByIdAndRemove(params.id)

//         return new Response("Prompt deleted successfully", {
//             status: 200
//         })
//     } catch (error) {
//         return new Response("Failed to delete prompt", {
//             status: 500
//         })
//     }
// }