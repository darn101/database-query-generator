import User from "../models/UserSchema.js";

export const UserSignup = async (req, res) => {

    try {
        const isExist = await User.findOne({ username: req.body.username });
        if (isExist) {
            return res.status(401).json({ message: 'User already exists' });
        }
        const user = req.body;
        const NewUser = new User(user);
        await NewUser.save();

        return res.status(200).json({ message: user });
    }

    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

export const UserLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.find({ username: username, password: password });
        if (user) {
            return res.status(200).json({ message: user });
        }
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
