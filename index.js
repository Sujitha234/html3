import express from "express";
import bodyParser from "body-parser";

const port=8000;
const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
    res.render("home.ejs"),{
        
    };
})


app.get("/login",(req,res)=>{
    res.render("login.ejs");
})

app.get("/register",(req,res)=>{
    
    res.render("register.ejs");
})


app.get("/")

app.get("/tasks",(req,res)=>{
    res.render("list.ejs");
})

app.post("/submit",(req,res)=>{
    res.render("submit.ejs",{
        name: req.body["username"]
    });
})

app.listen(port,()=>{
    console.log(`Server running on ${port}`);
})