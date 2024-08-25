import { Schema, model, models } from "mongoose"

// const attributesArray = new Schema({
//     trait_type: {
//         type: String,
//     },
//     value: {
//         type: String,
//     }
// })

// const filesArray = new Schema({
//     type: {
//         type: String,
//     },
//     uri: {
//         type: String,
//     }
// })

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
    },
    date: {
        type: String,
    },
    albums: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }],
    community: {
        type: String
    },
    earnings: {
        type: Number
    },
    plays: {
        type: Number
    }
})

// const songSchema = new Schema({
//     name: {
//         type: String,
//     },
//     link: {
//         type: String,
//     },
//     date: {
//         type: String,
//     },
// })

const Artist = models.Artist || model("Artist", artistSchema)

export default Artist