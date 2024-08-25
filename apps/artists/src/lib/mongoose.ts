import mongoose from "mongoose";

const mongooseconnect = async () => {
    // if (mongoose.connections[0].readyState === 1)
    //     return mongoose.connections[0].asPromise();
    try {
        const uri = process.env.MONGODB_URI as string;
        await mongoose.connect(uri,{
            dbName: "Music_App",
        });
        console.log("Connected to MongoDB");
    }
    catch (err) {
        console.error(err);
        console.log("Failed to connect to MongoDB");
    }
};

export default mongooseconnect;