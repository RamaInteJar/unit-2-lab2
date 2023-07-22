const express = require("express")

const app = express();

app.get("/greeting/:name", (req, res)=>{
    const name = req.params.name
    res.send(`Hello, ${name} ! it is so great to see you`)
})

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    const total = parseInt(req.params.total);
    const tipPercentage = parseInt(req.params.tipPercentage)
    const tipAmount = ((total*tipPercentage)/100).toFixed(2)

    res.send(`Your tip amount is: ${tipAmount}`)
})

app.listen(3000, ()=>{
    console.log("3000 are you listening?");
})