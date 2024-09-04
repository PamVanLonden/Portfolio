const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
const corsOptions = {
    origin: "https://portfolio-f-c32y.onrender.com" 
    // frontend URI (ReactJS) copied from Render account
}
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 4000
    app.listen(PORT, () => {
        console.log(`Backend is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to MongoDB Atlas Cluster for Arts Collection"});
});