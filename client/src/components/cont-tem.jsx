import { SaveContact } from "../service/api";
import Footer from "./footer";
import Slider from "./slider";
import { Box, InputBase, styled } from "@mui/material";
import { useState } from "react";

const InitialContactDetails = {
    email: '',
    message: ''
}

const Template = () => {
    const [contactdata, SetContactData] = useState(InitialContactDetails);


    const valueChange = (e) => {
        const { name, value } = e.target;
        SetContactData({ ...contactdata, [name]: value });
    }

    const SubmitContact = async () => {
        const response = await SaveContact(contactdata);
        if (response) {
            console.log(response);
        }
    }

    return (
        <>
            <div className="contact-boxes">
                <div className="contact-email"><ContactIn placeholder="Email" name="email" onChange={valueChange}></ContactIn></div>
                <div className="contact-msg"><ContactIn placeholder="Message" name="message" onChange={valueChange}></ContactIn></div>
                <div className="con-submit" onClick={SubmitContact}>Submit</div>
            </div>
            <Slider />
            <Footer />
        </>
    );
}

export default Template;


const ContactIn = styled(InputBase)`
color: #000;
`



