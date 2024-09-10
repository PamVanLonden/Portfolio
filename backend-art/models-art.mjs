// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'Unique and specific error message.' });
    } else  {
        console.log('Unique and specific success message.');
    }
});



// SCHEMA for artlog collection
const artSchema = mongoose.Schema({
    imgurl: {type: String, required: false},
    title:  {type: String, 
             required: true },
    width: { type: Number, 
             required: true, },
    height:{ type: Number, 
             required: true, },
    depth: { type: Number, 
             required: false, 
             default: .1, 
             min:[0] },
    genre: { type: String, required: true },
    media: { type: String, required: true },
    date:  { type: Date,   
             required: true, 
             default: Date.now },
    descr: { type: String}
});

// server changes it to 'arts'
const Art = mongoose.model("Arts", artSchema);


/* BEGIN the ART Inventory MODELS ************* */

// CREATE art document
const createArt = async (imgurl, title, width, height, depth, genre, media, date, descr) => {
    const art = new Art({
        imgurl: imgurl,
        title: title, 
        width: width,
        height: height,
        depth: depth,
        genre: genre,
        media: media,
        date: date,
        descr: descr
    });
    return art.save();
}

// FIND / RETRIEVE works
const findArt = async () => {
    const query = Art.find().sort({date:-1});
    return query.exec();
}

// FIND by ID
const findArtById = async (_id) => {
    const query = Art.findById(_id);
    return query.exec();
}

// REPLACE
const replaceArt = async (_id, imgurl, title, width, height, depth, genre, media, date, descr) => {
    const result = await Art.replaceOne({ _id: _id }, {
        imgurl:imgurl,
        title: title, 
        width: width,
        height: height,
        depth: depth,
        genre: genre,
        media: media,
        date: date,
        descr: descr
    });
    return { 
        _id: _id, 
        imgurl:imgurl,
        title: title, 
        width: width,
        height: height,
        depth: depth,
        genre: genre,
        media: media,
        date: date,
        descr: descr
     }
}

// DELETE
const deleteArtById = async (_id) => {
    const result = await Art.deleteOne({ _id: _id });
    return result.deletedCount;
}


export { createArt, findArt, findArtById, replaceArt, deleteArtById }
