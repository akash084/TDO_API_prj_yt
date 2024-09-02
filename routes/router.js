//Importing express, Router and controller
const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller");

//Managing API requests using router

//POST for Todo
router.post("/home", controller.AddTodo);

//GET for Todo
router.get("/home/data", controller.GetData);

//POST for UpdateTodo
router.put("/update/:id", controller.UpdateTodo);

//POST for DeleteTodo
router.post("/delete/:id", controller.DeleteTodo);

module.exports = router;
