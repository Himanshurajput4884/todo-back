const Tasks = require("../models/TaskSchema");


const getAllTasks = async (req, res) => {

  try {
    const task = await Tasks.find({});
    return res.status(201).json({message:"success", task:task});
  } catch (error) {
    console.log("Error in get All Task", error)
    return res.status(500).json({message:"Something went wrong"});
  }
};

const setComplete = async(req, res) =>{
  try{
      const id = req.params.id;
      const task = await Tasks.findById(id);

      if(!task){
        return res.status(401).json({message:"Task not found"});
      }
      task.completed = !task.completed;
      await task.save();

      const tasks = await Tasks.find({});
      return res.status(201).json({message:"success", task:tasks});

  }
  catch(err){
    console.log("Getting error in setComplete: ", err);
    return res.status(401).json({message:"Something went wrong"});
  }
}

const updateTasks = async (req, res) => {
    try {
      const note = {
        task: req.body.task,
        date: req.body.date,
        year: req.body.year.toString(),
        month: req.body.month,
        completed: req.body.completed,
      }
        const update_task = await Tasks.findByIdAndUpdate(req.params.id, note, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });
        if (!update_task) {
            return res
            .status(200)
            .json({ message: "No task found." });
        }
        console.log(update_task);
        const tasks = await Tasks.find({});
        return res.status(201).json({message:"success", task:tasks});
    } catch (error) {
      console.log("Error in updating Task", error)
        return res.status(404).json({message: "Something went wrong"});
    }
    
};

const createTask = async (req, res) => {
    try {
      const note = {
        task: req.body.task,
        date: req.body.date,
        year: req.body.year.toString(),
        month: req.body.month,
        completed: req.body.completed,
      }
      console.log(note);
        if(!note){
            return res.status(401).json({message:"Empty input"});
        }
    const task = await Tasks.create(note);
    console.log("Task: ", task);
    const tasks = await Tasks.find({});
    return res.status(201).json({message:"success", task:tasks});
  } catch (error) {
    console.log("Error in creating Task", error)
    return res.status(401).json({message:"Something went wrong"});
  }
};

const deleteTask = async (req, res) => {
  try {
    const deleted_Task = await Tasks.findOneAndDelete({ _id: req.params.id });
    if (!deleted_Task) {
      return res
        .status(201)
        .json({ message:"No task found" });
    }
    
    const tasks = await Tasks.find({});
    return res.status(201).json({message:"success", task:tasks});

  } catch (error) {
    console.log("Error in deleting Task", error)
    return res.status(401).json({message:"Something went wrong"});
  }
};

module.exports = {
  getAllTasks,
  updateTasks,
  createTask,
  deleteTask,
  setComplete,
};
