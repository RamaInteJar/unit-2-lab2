const express = require("express")

const app = express();

app.get("/greeting", (req, res)=>{
    res.send("Hello, stranger")
})

app.listen(3000, ()=>{
    console.log("3000 are you listening?");
})