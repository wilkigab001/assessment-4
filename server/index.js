const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const {getCompliment, getFortune, getColors, deleteColors, addColor} = require('./controller')

app.get("/api/compliment", getCompliment);
app.get('/api/fortune', getFortune)

app.get('/api/colors', getColors)
app.post('/api/addcolor', addColor)
app.delete('/api/deletecolors/:id', deleteColors)


app.listen(4000, () => console.log("Server running on 4000"));
