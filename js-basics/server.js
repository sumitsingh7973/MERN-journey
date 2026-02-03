const express = require ('express')
const app = express()

const userRoutes = require('./routes/userRoutes')

app.use(userRoutes)
app.get('/',(req,res)=>{
    res.send("server is runnig")
})

app.listen(5000,()=>{
    console.log("server running on port 5000");
    
})