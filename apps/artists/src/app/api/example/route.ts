import mongooseconnect from "@/lib/mongoose";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async(req : NextApiRequest, res : NextApiResponse) => {
    try{
        const data = 'hello'
        await mongooseconnect()
        return Response.json({ data },{status: 200})
    }
    catch(err){
        console.log(err)
        return Response.json({error: "Something went wrong"},{status: 500})
    }
}