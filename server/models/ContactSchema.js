import mongoose from "mongoose";

const ContactSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    message: {
        type: String,
        required: true
    }

})

const Contact = mongoose.model('Contact', ContactSchema);
export default Contact;