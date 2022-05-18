// database connection
// import mongose
const mongoose=require('mongoose')
mongoose.connect("mongodb://localhost:27017/remainder",{
    useNewUrlParser:true
})
//creat model
const User=mongoose.model('User',{
    uid:Number,
     uname:String,
      pwd:String,
     
        history: []
})
module.exports={
    User
}