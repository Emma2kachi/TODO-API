const router = require('express').Router()
const Todo = require("../models/todo")


router.post+("/add/todo", (req, res) =>{
    const {todo} = req.body;
    const newTodo = new Todo({todo})
newTodo.save()
.then(() => {
    console.log("succefully added Your task")
    res.redirect("/")
})
.catch((err) => console.log("Error"))   


} )



module.exports = router;