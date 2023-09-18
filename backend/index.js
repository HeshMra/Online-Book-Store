import express, { request, response } from "express";
import {PORT,mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute.js";
import cors from 'cors';

const app = express();

//Middleware for parsing request
app.use(express.json());
//Middleware for handling CORS Plolicy
//Option 1: Allow origins default with cors(*)
app.use(cors());

//Option 2: Allow Custom Origins
// app.use(cors({
//     origin: 'http://localhost:5173',
//     methods:['GET','POST','PUT','DELETE'],
//     allowedHeaders:['Content-Type'],
// })
// );


//Route for get request
app.get('/',(request,response)=>{   
    console.log(request);
    return response.status(234).send('Welcome to Mern Stack Tutorial')
});

app.use('/books',booksRoute); //middleware the you dont need to use /book in routing


mongoose.connect(mongoDBURL)
.then(()=>{
    console.log('App Connected to Database');
    app.listen(PORT,()=>{
        console.log(`App is listening to port ${PORT}`);
        });
})
.catch((error) => {
    console.error(error); // Use console.error to log the error
});
