const express = require('express'); // Requerimos express
const mongoose = require('mongoose'); // Requerimos mongoose
require('dotenv').config(); // Requerimos dotenv y lo iniciamos

const app = express();
const port = process.env.PORT || 9000;

//routes
app.get("/", (req, res) =>{
    res.send("Welcome to my API"); // Mensaje al entrar a la raiz
})

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas')) // Conexión correcta a MongoDB Atlas
    .catch((error) => console.error(error))

app.listen(port, () => console.log("Server listening on port", port)); // El puerto en el cual funciona





