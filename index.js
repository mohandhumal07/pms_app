const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");
const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req, res) => {
		const url = "mongodb+srv://mohandhumal07:6Sitw4EqL4EIcltG@cluster0.nonjdbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
		const client = new MongoClient(url);
		const db = client.db("projectapp");
		const coll = db.collection("student");
		const record = {"_id":req.body.pid,"ptitle":req.body.ptitle,"pdesc":req.body.pdesc,"plink":req.body.plink};
		coll.insertOne(record)
		.then(result => res.send(result))
		.catch(error => res.send(error));
		});

app.get("/gs",(req, res) => {
		const url = "mongodb+srv://mohandhumal07:6Sitw4EqL4EIcltG@cluster0.nonjdbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
		const client = new MongoClient(url);
		const db = client.db("projectapp");
		const coll = db.collection("student");
		coll.find({}).toArray()
		.then(result => res.send(result))
		.catch(error => res.send(error));
		});

app.delete("/ds", (req, res) => {
		const url = "mongodb+srv://mohandhumal07:6Sitw4EqL4EIcltG@cluster0.nonjdbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
		const client = new MongoClient(url);
		const db = client.db("projectapp");
		const coll = db.collection("student");
		const record = {"_id":req.body.pid};
		coll.deleteOne(record)
		.then(result => res.send(result))
		.catch(error => res.send(error));
		});

app.put("/us", (req, res) => {
		const url = "mongodb+srv://mohandhumal07:6Sitw4EqL4EIcltG@cluster0.nonjdbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
		const client = new MongoClient(url);
		const db = client.db("projectapp");
		const coll = db.collection("student");
		const whom = {"_id": req.body.pid};
		const what = {"$set":{"ptitle":req.body.ptitle,"pdesc":req.body.pdesc,"plink":req.body.plink}}
		coll.updateOne(whom, what)
		.then(result => res.send(result))
		.catch(error => res.send(error));
		});
		
app.listen(9000, () => {console.log("ready @ 9000");});
		