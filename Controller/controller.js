
import todo from "../Models/ToDoModel.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

export const addTodo = async (req, res) => {
  try {
    const newTodo = await todo.create({
      data: req.body.data,
      createdate: Date.now(),
    });
    await newTodo.save();
    res.status(200).json({
      newTodo,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getAllTodos=async(req,res)=>{
    try {
        const todos= await todo.find().sort({"createdate":-1})
        res.status(200).json({
            todos
        })
        
    } catch (error) {
        console.log(error)
    }

}
export const toggleTodoDone = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const objectId =new mongoose.Types.ObjectId(id);
      
      let todoRef = await todo.findById(id);
      if (!todoRef) {
        return res.status(404).json({ message: "Todo not found" });
      }
      const updatedTodo = await todo.findByIdAndUpdate(
       { _id:req.params.id},
       {
        done:false?true:true
    }
      )
      await updatedTodo.save()
      res.status(200).json({
        updatedTodo,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  export const updatedTodos = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const objectId =new mongoose.Types.ObjectId(id);
      
     
       await todo.findByIdAndUpdate(
       { _id:req.params.id},
       {
        data:req.body.data
    }
      )
     const updateTodo=await todo.findById(req.params.id)
      res.status(200).json({
        updateTodo,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  export const deleteTodo = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const objectId =new mongoose.Types.ObjectId(id);
      
     
       const delTodo=await todo.findByIdAndDelete( req.params.id)
   
      res.status(200).json({
        delTodo
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error" });
    }
  };
  
  
  
