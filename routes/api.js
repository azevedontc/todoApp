const express = require("express");
const Task = require("../models/Task");
const User = require("../models/User");
const router = express.Router();

router.post("/create", async (req, res) => {
  const task = new Task(
    {
      task: req.body.task,
      userId: req.body.id
    },
    { versionKey: false }
  );

  try {
    await task.save();
    res.redirect("/");
  } catch (err) {
    res.redirect("/");
    
  }

});

router.post("/delete", async (req, res) => {  
  try {
    await Task.findByIdAndDelete(req.body.id);
    // Tarefa foi excluida com sucesso.
    res.redirect("/");
  } catch (err) {
    // error
    res.redirect("/");
  }
});

router.post("/update", async (req, res) => {
  console.log(req.body.id, req.body.task);
  await Task.updateOne({_id: req.body.id }, {$set: {task: req.body.task}});
  res.redirect('/');
});


router.get("/all", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Cache-Control", "no-cache, no-store, must-revalidate");
  res.header("Content-Type", "application/json");
  
  let task = await Task.find({userId: req.body.id}); 
  res.send(JSON.stringify(task));
});

module.exports = router;
