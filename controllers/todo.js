const Todo = require('../models/todo.js');

const addTodo = async (req, res, next) => {
    try {
        const response = req.body;
        console.log(response)
        await Todo.create(response);
        return res.status(200).json({message:"Todo added sucessfullly"})
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateTodo = async(req,res,next)=>{
    try {
        const {id, title} = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {title},
            {new: true}
        )
        if(!updatedTodo){
            return res.status(404),json({message:"Todo not found"})
        }
        return res.status(200).json({message:"Todo updated successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const updateTodoChecked = async(req,res,next)=>{
    try {
        const {id, checked} = req.body;
        const updatedTodo = await Todo.findByIdAndUpdate(
            id,
            {checked},
            {new: true}
        )
        if(!updatedTodo){
            return res.status(404),json({message:"Todo not found"})
        }
        return res.status(200).json({message:"Todo checked updated successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}

const getTodo = async(req,res,next)=>{
    try{
    const allTodos = await Todo.find()
    if(!allTodos){
        return res.status(404).json({message:"Todo not found"})
    }
    return res.status(200).json({allTodos})
} catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
}
}

const deleteTodo = async(req, res, next)=>{
    try {
        const {id} = req.body;
        console.log( req.body)
        const deletedTodo = await Todo.deleteOne(
            {_id:id}
        )
        if(deletedTodo.deletedCount===0){
            return res.status(404).json({message:"Todo not found"})
        }
        return res.status(200).json({message:"Todo deleted"})
    } catch (error) {
        console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
    }
}

const deleteAllTodo = async(req,res,next)=>{
    try {
        const result = await Todo.deleteMany({})
        return res.status(200).json({ 
            message: `${result.deletedCount} todos deleted successfully`
        });
    } catch (error) {
        console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
    }
}
module.exports = {addTodo, updateTodo, updateTodoChecked, getTodo, deleteTodo, deleteAllTodo};