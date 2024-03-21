// import express
import express from 'express';
import userRouter from './src/features/user/user.routes.js';


// create server
const server = express();

// body-parser
server.use(express.json()) 

// For all requests related to user, redirect to user routes
server.use('/api', userRouter)


//Specify port
server.listen(3400,()=>{
    console.log('server is running at 3400');
})


