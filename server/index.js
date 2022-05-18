const express=require('express')
const dataservice=require('./service/dataservice')
const cors=require('cors')

const app=express()
app.use(cors({
    origin:"http://localhost:4200"
}

))
app.use(express.json())


app.post('/register',(req,res)=>{
    dataservice.register(req.body.uname,req.body.uid,req.body.pwd)
    .then(result=>{
        res.status(result.statuscode).json(result)
    })
})
app.post('/login',(req,res)=>{
    dataservice.login(req.body.uid,req.body.pwd)
    .then(result=>{
        res.status(result.statusCode).json(result)
    }) 
})
app.post('/add',(req,res)=>{
    dataservice.addEvent(req.body.uid,req.body.date,req.body.events)
    .then(result=>{
        res.status(result.statusCode).json(result)
    }) 
})
app.post('/history',(req,res)=>{
    dataservice.viewEvent(req.body.uid,)
    .then(result=>{
        res.status(result.statusCode).json(result)
    }) 
})
app.delete('/onDelete/:uid',(req,res)=>{
    dataservice.onDelete(req.params.uid,)
 .then(result=>{
    res.status(result.statusCode).json(result)
 })
})

app.listen('3002',()=>{
console.log("server started");
})