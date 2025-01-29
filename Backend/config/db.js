const mongoose=require("mongoose")

const connection=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/product")
        console.log("server connected to database")
    } catch (error) {
        console.log(error)
    }
        
}

module.exports=connection;