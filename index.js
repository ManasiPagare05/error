import express  from "express";
import  bodyParser  from "body-parser";
import loginRouter from './routes/login.js';
import registerUser from './routes/RegisterUser.js';

const app=express()
const port=5000

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//routes
// app.use('/',requier('./routes/home'))
app.use('/login',loginRouter)
app.use('/register',registerUser)


app.listen(port,(error)=>{
    if (error) throw error
    console.log(`Server is running at http://localhost:${port}`)
})
