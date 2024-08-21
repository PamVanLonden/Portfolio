import express from "express";
import mongoose from "mongoose";
import {} from './models-art.mjs';

import path from 'path';
import {fileURLToPath } from "url";

// Resolving dirname for ES module
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__dirname)

// Initializing Express app
const app = express();

// Middleware to receive JSON
app.use(express.json());

// API endpoints and route handlers
app.use("/arts", (req, res) => {
  res.send("Arts route is working!");
});

// Use the client app
app.use(express.static(path.join(__dirname, '/client/dist')));
app.get('*', (req,res) => 
    res.sendFile(path.join(__dirname, '/client/dist/index.html'))
);

// Connecting to MongoDB using Mongoose
mongoose
  .connect("mongodb://localhost:3002", { dbName: "mydbs" })
  .then(() => {
    // Listening to requests if DB connection is successful
    app.listen(3002, () => console.log("Listening to port 3002"));
    console.log('Successfully connected to the Arts collection on the MongoDB Atlas Cluster.');
  })
  .catch((err) => console.log(err));