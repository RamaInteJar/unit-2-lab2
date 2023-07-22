const express = require("express")

const app = express();

app.get("/greeting/:name", (req, res)=>{
    const name = req.params.name
    res.send(`Hello, ${name} ! it is so great to see you`)
})

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    // evoking the total  from the request parameters
    const total = parseInt(req.params.total);
     // evoking the tipPercentage from the request parameters
    const tipPercentage = parseInt(req.params.tipPercentage)
    //Calculate the total tip amount
    const tipAmount = ((total*tipPercentage)/100).toFixed(2)
    //Send the tip amount as response
    res.send(`Your tip amount is: ${tipAmount}`)
})

app.listen(3000, ()=>{
    console.log("3000 are you listening?");
})