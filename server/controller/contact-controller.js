import Contact from "../models/ContactSchema.js";

export const ContactUs = async (req, res) => {
    try {
        const contact = req.body;
        const NewContact = new Contact(contact);
        await NewContact.save();

        return res.status(200).json({ message: contact });
    }
    catch (err) {
        return res.status(500).json({ message: err.message });
    }

}