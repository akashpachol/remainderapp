const db = require("./db")

const register = (uname, uid, pwd) => {
   return db.User.findOne({ uid })
        .then(user => {
            if (user) {

                return {
                    statuscode: 401,
                    status: false,
                    message: "already exist please login"
                }
            } else {
                const newUser = new db.User({
                    uid,
                    uname,
                    pwd,
                    history: []
                } )
                newUser.save()
            
           
            return {
                statuscode: 200,
                status: true,
                message: "successfully registered"
            }
        }
        })
}
const login=(uid,pwd)=>{
    return db.User.findOne({uid,pwd})
    .then(user=>{
        if (user) {
            currentUser=user.uname
            currentUid=uid

        
        return {
            statusCode:200,
            status:true,
            message:" login succesfull",
            currentUid,
            currentUser
          }
        }
        else{
      
            return {
              statusCode:401,
              status:false,
              message:"invalid credentional "
            }
          }
    })
}
const addEvent=(uid,date,events)=>{

    var date = date;
    date = date.split("-").reverse().join("-");

    return db.User.findOne({uid})
    .then(user=>{
        if (user) {
       user.history.push({
           date,
           events
       })
        user.save()

        
        return {
            statusCode:200,
            status:true,
            message:"event added",
         
          }
        }
        else{
      
            return {
              statusCode:401,
              status:false,
              message:"invalid credentional "
            }
          }
    })
}
const viewEvent=(uid)=>{

   return db.User.findOne({uid})
   .then(user=>{
       if (user) {
        return {
            statusCode:200,
            status:true,
            history:user.history,
         
          }
       } else{
      
        return {
          statusCode:401,
          status:false,
          message:"invalid credentional "
        }
      }
   })
}
const onDelete=(uid)=>{
 return  db.User.deleteOne({uid})
  .then(user=>{
      if (user) {
        return {
            statusCode:200,
            status:true,
            message:"delete successfully",
         
          } 
      }else{
      
        return {
          statusCode:401,
          status:false,
          message:"invalid credentional "
        }
      }
     
  })
}
module.exports = {
    register,
    login,
    addEvent,
    viewEvent,
    onDelete
}

