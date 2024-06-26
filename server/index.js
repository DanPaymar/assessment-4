//
// package imports to run the server
const express = require("express");
const cors = require("cors");

// creates instance of server to access express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const { getCompliment } = require('./controller')
const { getFortune } = require('./controller')
const { getQuote } = require('./controller')
const { enterName } = require('./controller')
// endpoints

// get the compliment button
app.get("/api/compliment", getCompliment);

// get the fortune button
app.get("/api/fortune", getFortune);

// get the random button
app.get("/api/quote", getQuote);

// get the parameter of the input
app.get("/api/coffee/:id", (req, res) => {
    console.log(req.params)
    console.log(req.params.id)
   
    res.status(200).send(`Is this what you submitted ${req.params.id}`)
})

app.post("/api/name", enterName);

// dropdown items
app.get("/api/selection", (req, res) => {
    res.status(200).send(`it works`)
})
// listen to the server
app.listen(4000, () => console.log("Server running on 4000"));
