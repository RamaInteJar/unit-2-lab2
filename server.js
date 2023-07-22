const express = require("express")

const app = express();

app.get("/greeting/:name", (req, res)=>{
    const name = req.params.name
    res.send(`Hello, ${name} ! it is so great to see you`)
})

app.listen(3000, ()=>{
    console.log("3000 are you listening?");
})