import express from "express";
import { UserSignup, UserLogin } from '../controller/user-controller.js';
import { ContactUs } from "../controller/contact-controller.js";

const router = express.Router();

router.post('/signup', UserSignup);
router.post('/login', UserLogin);
router.post('/send', ContactUs);

export default router;