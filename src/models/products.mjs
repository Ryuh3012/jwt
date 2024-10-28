import { model, Schema } from "mongoose";

const productsSchema = Schema({

    name: String,
    category: String,
    prince: Number,
    imgUrl: String
}, { timestamps: true, versionKey: false })
export const product = model('products', productsSchema)