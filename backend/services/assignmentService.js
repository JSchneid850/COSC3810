const { MongoClient, ServerApiVersion,ObjectId } = require('mongodb');

const uri = "mongodb+srv://Dicoda:uE9v6mgcmPJTbs5Q@cosc3810.yypyc7c.mongodb.net/?retryWrites=true&w=majority"

const { assignment } = require('./models/model');

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const db= client.db("cosc3810");


// Get a single assignment by ID
const getAssignment = async (req, res) => {
  try {
    let collection = db.collection("assignment");
    let assignment = await collection.findOne({ _id: new ObjectId(req.params.id) });
    res.send(assignment).status(204);
  } catch (error) {
    console.error(error);
  }
};


// Create a new assignment
const addAssignment = async (req, res) => {
  try {
    let collection = db.collection("assignment");
    console.log(req.body)
    let assign = new assignment({...req.body});
    let result = await collection.insertOne(assign);
    res.send(result).status(204);
  } catch (error) {
    console.error(error);
  }
};

// List all assignments
const listAssignment = async (req, res) => {
    try {
      const collection = db.collection("assignment");
      let result = await collection.find({}).toArray();
      console.log(result);
      res.send(result).status(204);
    } catch (error) {
      console.error(error);
    }
}

const assignClassList = async (req, res) => {
  try {
    const collection = db.collection("assignment");
    let result = await collection.find({ class: req.params.class }).toArray();
    console.log(result);
    res.send(result).status(204);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getAssignment,
  addAssignment,
  listAssignment,
  assignClassList
};
