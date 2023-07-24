const express = require('express')
const router = express.Router()

const {getAllTasks, updateTasks, createTask, deleteTask, setComplete} = require('../controllers/controller')

router.post("/create", createTask);

router.get("/all", getAllTasks);

router.get('/:id', deleteTask);

router.post("/:id", updateTasks);

router.get("/check/:id", setComplete);

module.exports=router;