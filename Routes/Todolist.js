import express from 'express'

import { getAllTodos } from '../Controller/controller.js';
import { addTodo,toggleTodoDone,updatedTodos,deleteTodo } from '../Controller/controller.js';
const route= express.Router();
route.post("/todos",addTodo)
route.get("/getTodos",getAllTodos)
route.put('/todos/:id', toggleTodoDone);
route.put('/todosUpdate/:id',updatedTodos)
route.delete('/todosDelete/:id',deleteTodo)
route.get('/',(req,res)=>{
res.send("<h1>Todo List</h1>")
})
  


export default route;