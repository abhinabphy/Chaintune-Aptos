import { Schema, model, models } from "mongoose"

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
    category: "Collection"
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
        type: String,
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
    },
    
})

export const Album = models.Album || model("Album", albumSchema)
