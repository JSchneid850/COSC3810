import {Assignment} from "../models/assignmentModel.js";
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Dicoda:uE9v6mgcmPJTbs5Q@cosc3810.yypyc7c.mongodb.net/?retryWrites=true&w=majority"

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
  const { id } = req.params;
  try {
    let collection = db.collection("assignment");


  } catch (error) {

  }
};

// Update an assignment by ID
const updateAssignment = async (req, res) => {
  const { id } = req.params;

  try {

  } catch (error) {

  }
};

// Delete an assignment by ID
const delAssignment = async (req, res) => {
  const { id } = req.params;

  try {

  } catch (error) {

  }
};

// Create a new assignment
const addAssignment = async (req, res) => {
  try {
    let collection = db.collection("assignment");
    let assignment = new Assignment(req.body);
    let result = await collection.insertOne(assignment);
    res.send(result).status(204);
  } catch (error) {
    console.error(error);
  }
};

// List all assignments
const listAssignment = async (req, res) => {
    console.log("listAssignment");
    try {
      let collection = db.collection("assignment");
      let result = await collection.find({}).toArray();
      console.log(result);
      res.send(result).status(204);
    } catch (error) {
      console.error(error);
    }
};

module.exports = {
  getAssignment,
  updateAssignment,
  delAssignment,
  addAssignment,
  listAssignment
};
