import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectionDatabase from './database/db.js';
import userRoute from './routes/userRoute.js';
dotenv.config();

connectionDatabase();
const app = express();
const PORT = process.env.PORT || 3334;

app.use(express.json());
app.use(cors());

app.use('/user', userRoute)

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));