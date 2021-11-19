const express = require("express")
const app = express()
const mongoose = require("mongoose")
const studentschema = require("./studentschema")
const url = "mongodb+srv://prathamk:BANANAman2323@cluster0.3cl8z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const tempschema = require("./studentschema")
mongoose.connect(url).then(()=>console.log("Connected to DB"))
app.use(express.json())
app.post("/add-new-info",async(req,res)=>{
    const stdname = req.body.name;
    const stdreg = req.body.regno;
    const stdmarks = req.body.marks;

    try{
        const newobj = new studentschema(
            {
                name:stdname,
                regno:stdreg,
                marks:stdmarks
            }
        )
        const savedinfo = await newobj.save();
        res.json(
            {"message":"Student Info saved","data":savedinfo}
        )
    }catch(err){
        res.json(err)
    }
})
app.use("/",(req,res)=>{
    res.json(
        {"message":"Hello World"}
    )
})

app.listen(3000,()=>console.log("Express Server Started"))