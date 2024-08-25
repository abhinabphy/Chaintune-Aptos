import { connectToDB } from "@utils/database"
import Song from "@models/song"
import { NextApiRequest } from "next"

export const POST = async(req: Request) => {
    const {name, animation_url, date} = await req.json()

    // console.log(name, animation_url, date)
    try{
        await connectToDB()
        // console.log("goinggg")
        const newSong = new Song({
            name: name,
            image: "",
            animation_url: animation_url,
            attributes: [
                {
                    trait_type: "Genre",
                    value: "None"
                },
                {
                    trait_type: "Artist",
                    value: "Abhijeet"
                },
                {
                    trait_type: "Posting Date",
                    value: date
                },
                {
                    trait_type: "License",
                    value: "MIT"
                }
            ],
            properties: {
                files: [
                    {
                        type: "audio/mp3",
                        uri: animation_url
                    },
                    {
                        type: "image/png",
                        uri: "None"
                    }
                ],
                category: "audio"
            }
        })
        // const newSong = new Song({
        //     name,
        //     link: animation_url,
        //     date
        // })

        await newSong.save()

        return new Response(JSON.stringify(newSong), { status: 201 })

    } catch (error) {
        return new Response('Failed to create a new prompt', { status: 500 })
    }
}