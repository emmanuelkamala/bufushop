import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/users.js';
import authRouter from './routes/auth.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(console.log('MongoDB is connected successfully'))
.catch(error=>console.log(error)) 

app.listen(PORT, console.log('Server is Connected'))