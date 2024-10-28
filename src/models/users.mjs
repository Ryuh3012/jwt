import { Model, Schema } from "mongoose";

const userSchema = Schema({
    name: String,
    dni: Number,

}, { timestamps: true, versionKey: false })

const product = module('users', userSchema)