import { Schema, model, models } from "mongoose"

const artistSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    desc: {
        type: String,
    },
    walletAddress: {
        type: String,
        unique: true
    },
    // date: {
    //     type: String,
    // },
    albums: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }],
    // community: {
    //     type: String
    // },
    earnings: {
        type: Number
    },
    plays: {
        type: Number
    }
})

export const Artist = models.Artist || model("Artist", artistSchema)