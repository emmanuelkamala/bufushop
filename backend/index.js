import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express()

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
})
.then(console.log('MongoDB is connected successfully'))
.catch(error=>console.log(error)) 

app.listen(PORT, console.log('Server is Connected'))