import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
      const connInstance =  await mongoose.connect(`${process.env.MONNGODB_URL}/${DB_NAME}`) 
      console.log(`\n mongoDB connected !! DB host: ${connInstance.connection.host}`);
    } catch (error) {
        console.log("mongoDB connection error", error);
        process.exit(1)
    }
}

export default connectDB