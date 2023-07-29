import express from 'express';
import { Connnection } from './database/db.js';
import router from './routes/route.js';
import bodyParser from 'body-parser';
import cors from 'cors';


const app = express();

Connnection();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);


app.listen(8000, () => console.log("App is running"));