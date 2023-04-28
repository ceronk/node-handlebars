const { Router } = require('express')
const router = Router();
const { renderIndex, postTask, updateTask, getTask, deleteTask, doneTask } = require('../controllers/task.controller');
router.post("/taks/add", postTask);
router.get("/", renderIndex);
router.post("/edit/:id", updateTask);
router.get("/edit/:id", getTask);
router.get("/delete/:id", deleteTask);
router.get("/toggleDone/:id", doneTask);

module.exports = router;