import mongoose from "mongoose";


export const Connnection = () => {
    const URL = 'mongodb+srv://Priyanshu:IFhUXS7uMo0cBtZR@cluster0.nmuggjt.mongodb.net/';
    try {
        mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    }
    catch (error) {
        console.log('Error while connecting with the database', error.message)
    }

}