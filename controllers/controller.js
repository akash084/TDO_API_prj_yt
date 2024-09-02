//Importing the MongoDB models from model.js
const MongoDBData = require("../models/model");

// Checks the existing todos and adds the new one
const AddTodo = async (req, res) => {
	const data = {
		name: req.body.name,
	};

	const existingtodo = await MongoDBData.collection2.findOne({
		name: data.name,
	});
	if (existingtodo) {
		res.send("todo already exists. Please choose a different todo name.");
	} else {
		const tododata = await MongoDBData.collection2.insertMany(data);
		console.log(tododata);
		res.status(200).json({ message: "todo added" });
	}
};

// Function to get the todos from the database and if received send the data as response
const GetData = async (req, res) => {
	try {
		const todo = await MongoDBData.collection2.find();
		res.json({ statusCode: 201, message: "success", data: todo });
	} catch (error) {
		res.status(200).json({ message: error.message });
	}
};

// Function to update todos from the database
const UpdateTodo = async (req, res) => {
	const data = {
		name: req.body.name,
	};

	let id = req.params.id;

	const todo = await MongoDBData.collection2.findByIdAndUpdate(id, {
		name: data.name,
	});
	if (todo) {
		res.status(200).json({ message: "todo updated" });
	} else {
		res.status(200).json({ message: error.message });
	}
};

// Function to delete todos from the database
const DeleteTodo = async (req, res) => {
	let id = req.params.id;
	const todo = await MongoDBData.collection2.findByIdAndDelete(id);
	if (todo) {
		res.status(200).json({ message: "todo deleted" });
	} else {
		res.status(200).json({ message: error.message });
	}
};

// Exporting the functons and database models
module.exports = {
	AddTodo,
	GetData,
	UpdateTodo,
	DeleteTodo,
};
