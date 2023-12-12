// require('dotenv').config({path: './env'});
import dotenv from "dotenv";
// import { DB_NAME } from "./constants";
// import mongoose from "mongoose";
import connectDB from "./db/connection.js";

dotenv.config({
    path: '/.env'
})

connectDB();