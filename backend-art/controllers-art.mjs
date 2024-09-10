// This controller uses REST rather than Express style.
import 'dotenv/config';
import express from 'express';

import * as arts from './models-art.mjs';
import cors from 'cors';

const PORT = process.env.PORT || 4000;

// Initialize express app
const app = express();

// REST needs JSON MIME type.
app.use(express.json());

app.use(cors({
  origin: 'https://portfolio-9sv1.onrender.com/', // Replace with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Serve static files from the React app
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// app.use(express.static(path.join(__dirname, 'frontend/dist')));



// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => console.log('MongoDB connected'))
//     .catch(err => console.error(err));


// API routes
app.get('/arts', (req, res) => {
    res.send('The Arts collection at the MongoDB Atlas Cluster is working.');
  });

// All other routes should point to the frontend index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
//   });

// CREATE art document
app.post('/arts', (req, res) => {
    arts.createArt(
        req.body.imgurl, 
        req.body.title, 
        req.body.width, 
        req.body.height, 
        req.body.depth, 
        req.body.genre, 
        req.body.media,
        req.body.date,
        req.body.descr
    )
        .then(art => {
            console.log(`"${arts.title}" was added to the collection.`);
            res.status(201).json(art);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Creation of an Art document failed due to invalid syntax.' });
        });
});

// RETRIEVE all art documents
app.get('/arts', (req, res) => {
    arts.findArt()
    .then(art => { 
        if (art !== null) {
            console.log(`All artworks were retrieved from the collection.`);
            res.json(art);
        } else {
            res.status(404).json({ Error: 'That Art document was not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Your request to retrieve the artwork documents failed.' });
    });

});

// RETRIEVE by ID controller
app.get('/arts/:_id', (req, res) => {
    arts.findArtById(req.params._id)
    .then(art => { 
        if (art !== null) {
            console.log(`"${art.title}" was retrieved, based on its ID.`);
            res.json(art);
        } else {
            res.status(404).json({ Error: 'That artwork could not be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'That artwork could not be found.' });
    });

});

// UPDATE art
 app.put('/arts/:_id', (req, res) => {
     // Notice use of params.id
     arts.replaceArt(
        req.params._id, 
        req.body.imgurl,
        req.body.title, 
        req.body.width, 
        req.body.height, 
        req.body.depth, 
        req.body.genre, 
        req.body.media,
        req.body.date,
        req.body.descr
        )
        .then(art => {
            console.log(`"${arts.title}" was updated.`);
            res.json(art);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Your request to replace an Art document failed.' });
        });
});

// DELETE art
 app.delete('/arts/:_id', (req, res) => {
    arts.deleteArtById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} was deleted.`);
                res.status(200).send();
            } else {
                res.status(404).json({ Error: 'That Art document does not exist.' });
            }
        })
        .catch(error => {
            console.log(error);
            res.send(`Error: 'Your request to delete by ${arts._id} failed.`);
        });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
