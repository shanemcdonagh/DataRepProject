// Dependencies (Express, Cors and BodyParser)
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Used to specify port in which the server operates on
const port = 4000;

// Allows us to connect to a MongoDB database
const mongoose = require('mongoose');

// Serves the static files from the React app
// const path = require('path');
// app.use(express.static(path.join(__dirname, '../build')));
// app.use('/static', express.static(path.join(__dirname, 'build//static')));

app.use(bodyParser.urlencoded({ extended: false })) // parse application/x-www-form-urlencoded
app.use(bodyParser.json()) // parse application/json

// Used for cross referencing over different domains
app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// String containing path for database access
const connection = "mongodb+srv://admin:admin@cluster0.bmqla.mongodb.net/plantDatabase?retryWrites=true&w=majority"

// Asynchronous function
async function main() {
    // Connecting to the database
    await mongoose.connect(connection, { useNewUrlParser: true });
}

// Log an error if one occurs when connecting to the database
main().catch(err => console.log(err));

// Used to define the structure of the documents (plants) within the collections

// Defines schema for plants that are pre-defined
var currPlantSchema = new mongoose.Schema({
    name: String,
    type: String,
    exposure: String,
    image: String
});

// Defines schema for plants that user added to their own collection
var userPlantSchema = new mongoose.Schema({
    name: String,
    type: String,
    exposure: String,
    image: String,
    waterOn: String
});

// Using the schemas to create models
var currPlantModel = mongoose.model("plants", currPlantSchema)
var userPlantModel = mongoose.model("userplants", userPlantSchema)



// Server listening through port 4000 - Accessed by localhost:3000 (our app)
app.listen(port, (req, res) => {
    console.log(`Listening at http://localhost:${port}`);
});

// Listens for a GET request to the '/today' (from readToWater.js)
app.get('/today', (req, res) => {

    // Retrieves the day of the week and converts to a String
    var date = new Date();
    var weekday = date.toLocaleString("default", { weekday: "long" })

    // Retrieve plants that need watering on this day
    userPlantModel.find({ waterOn: weekday }, (error, data) => {
       
        // If an error occured...
        if (error) {
            // Pass relevant status code and error
            res.status(500).json(error);
        }
        else {
            // Responds to request with JSON data
            res.status(200).json(data);
        }
    })
});

// Listens for a GET request to '/collection' (from readCollection.js)
app.get('/collection', (req, res) => {

    // Return all documents within this collection (plants) based on defined schemas
    currPlantModel.find((error, data) => {
        
        // If an error occured...
        if (error) {
            // Pass relevant status code and error
            res.status(500).json(error);
        }
        else {
            // Else, pass successful status code and data
            res.status(200).json(data);
        }
    })
});

// Listens for a GET request to '/my-plants' (from readPlants.js)
app.get('/my-plants', (req, res) => {

    // Return all documents within this collection (my-plants) based on defined schemas
    userPlantModel.find((error, data) => {

        // If an error occured...
        if (error) {
            // Pass relevant status code and error
            res.status(500).json(error);
        }
        else {
            // Else, pass successful status code and data
            res.status(200).json(data);
        }

    })
});

// Listens for a GET request to '/my-plants/:id' (from editPlant.js)
app.get('/my-plants/:id', (req, res) => {
    console.log("Plant ID: " + req.params.id);

    // Returns document from the database based on its id and sends a JSON response to the client
    userPlantModel.findById(req.params.id, (error, data) => {

        // If an error occured...
        if (error) {
            // Pass relevant status code and error
            res.status(500).json(error);
        }
        else {
            // Else, pass successful status code and data
            res.status(200).json(data);
        }
    })
})

// Listens for a PUT request to '/my-plants/:id' (from editPlant.js)
app.put('/my-plants/:id', (req, res) => {
   console.log("Plant updated: " + req.params.id);

    // Finds the document within the userplants collection and updates it
    userPlantModel.findByIdAndUpdate(req.params.id, req.body, { new: true },
        (error, data) => {
            // If an error was encountered
            if (error) {
                // Pass relevant status code and error
                res.status(500).send("Error updating resource: " + error);
            }
            else {
                // Else, pass successful status code and data
                res.status(200).send("Resource successfully updated: " + data);
            }
        })
})

// Listens for a POST request to '/my-plants' (from addPlant.js)
app.post('/my-plants', (req, res) => {
    console.log("Plant received:  " + "Name: " + req.body.name + " | Type: " + req.body.type + " | Exposure: " + req.body.exposure + " | Water On: " + req.body.waterOn)

    // Creates a new document based on defined schema to defined collection
    userPlantModel.create({
        name: req.body.name,
        type: req.body.type,
        exposure: req.body.exposure,
        image: req.body.image,
        waterOn: req.body.waterOn,
    },
        (error, data) => {
            // If an error was encountered
            if (error) {
                // Pass relevant status code and error
                res.status(500).send("Unexpected error: " + error);
            }
            else {
                // Else, pass successful status code and data
                res.status(201).send("Resource successfully created: " + data);
            }
        })
})

// Listens for DELETE request passed to '/my-plants/:id' (from plantsItem.js)
app.delete('/my-plants/:id', (req, res) => {
    console.log("Deleting: " + req.params.id);

    // Deletes plant document from collection in MongoDB
    userPlantModel.deleteOne({ _id: req.params.id }, (error, data) => {
        
        // If an error was encountered
        if (error) {
            // Pass relevant status code and error
            res.status(500).send('Resource could not be found/deleted: ' + error);
        }
        else {
            // Else, pass successful status code and data
            res.status(200).send('Resource succesfully deleted: ' + data);
        }
    });
})

// // Handles GET requests to any other urls and sends it to index.html
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/../build/index.html'));
// });