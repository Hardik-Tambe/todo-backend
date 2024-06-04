
const {Schema, model} = require("mongoose");

const addTodoSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        required:true
    }
})

const Todo = new model('Todo', addTodoSchema);

module.exports = Todo;