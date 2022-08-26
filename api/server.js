import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import studentRouter from './routes/student.js';
import userRouter from './routes/user.js';
import mongoDB from './config/db.js';
import errorHandler from './middlewares/errorHandler.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'


// express init
const app = express()

// dotenv config and init
dotenv.config()
const PORT = process.env.SERVER_PORT || 5000

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(cookieParser())
app.use(cors())

// router setup
app.use('/api/student', studentRouter)
app.use('/api/user', userRouter)

//custom error handler
app.use(errorHandler)

app.listen(PORT, ()=> {
    mongoDB()
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
})