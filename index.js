const express = require("express");
const app = express();

app.use(express.static('public'))

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.get("*", (req, res)=>{
    res.sendFile(__dirname + "/public/404.html");
})

app.listen(8080, ()=>{
    console.log("Servidor escuchando desde el puerto 8080");
})