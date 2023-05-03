const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Dicoda:uE9v6mgcmPJTbs5Q@cosc3810.yypyc7c.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

const { post } = require('./models/model');
  
const db= client.db("cosc3810");

const getPost = async (req, res) => {
   const { id } = req.params;
    try {
      let collection = db.collection("post");
      let post = collection.findOne({ _id: id });
      res.send(post).status(204);
    } catch (error) {
      console.error(error);
    }
}

const addPost = async (req, res) => {
    try {
        let collection = db.collection("post");
        console.log(req.body)
        let newPost = new post({...req.body});
        let result = await collection.insertOne(newPost);
        res.send(result).status(204);
      } catch (error) {
        console.error(error);
      }
    }

const listPost = async (req, res) => {
      console.log("listPost");
      try{
      const collection = db.collection("post")
      let result = await collection.find({}).toArray();
      console.log(result);
      res.send(result).status(204);
      } catch (error) {
      console.error(error);
    }
    }

const postClassList = async (req, res) => {
      try {
        const collection = db.collection("post");
        let result = await collection.find({ class: req.params.class }).toArray();
        console.log(result);
        res.send(result).status(204);
      } catch (error) {
        console.error(error);
      }
    }


module.exports = {
    getPost,
    addPost,
    listPost,
    postClassList
}