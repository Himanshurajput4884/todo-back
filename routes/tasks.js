const express = require('express')
const router = express.Router()

const {getAllTasks, updateTasks, createTask, deleteTask, setComplete} = require('../controllers/controller')

router.post("/create", createTask);

router.get("/all", getAllTasks);

router.get('/delete/:id', deleteTask);

router.post("/update/:id", updateTasks);

router.get("/check/:id", setComplete);

module.exports=router;