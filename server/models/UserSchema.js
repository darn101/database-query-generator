import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        min: 3,
        max: 20,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+\@.+\..+/

    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', userSchema);

export default User;