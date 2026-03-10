import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({

    fullName: {
        type: String,
        trim: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        index: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    avatar: {
        type: String,
        required: true
    },
    coverImage: {
        type: String,

    },
    refreshToken: {
        type: String,
    },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },

}, { timestamps: true });

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) return next()

    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    bcrypt.compare()
}

export const User = mongoose.model("User", userSchema);