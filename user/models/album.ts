import { Schema, model, models } from "mongoose"

const attributesArray = new Schema({
    
})

const filesArray = new Schema({
    type: {
        type: String,
    },
    uri: {
        type: String,
    }
})

const propsObj = new Schema({
    files: [filesArray],
    category: {
        type: String
    }
})

const albumSchema = new Schema({
    name: {
        type: String,
    },
    image: {
        type: String,
    },
    external_url: {
        type: String,
    },
    desc: {
        type: String,
    },
    creator: {
        type: String
    },
    songs: [{
        type: Schema.Types.ObjectId,
        ref: 'Song'
    }],
    artists: [String],
    date: {
        type: String,
    },
    properties: {
        type: propsObj
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

const Album = models.Album || model("Album", albumSchema)

export default Album