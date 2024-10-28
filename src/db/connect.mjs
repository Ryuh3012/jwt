import mongoose from "mongoose";
import { dbMongose } from "../config/confing.mjs";

const Connect = async () => {

    try {

        await mongoose.connect(dbMongose)
        console.log('db Connect ');
    } catch (error) {
        console.log(error);
    }

}

export default Connect;
