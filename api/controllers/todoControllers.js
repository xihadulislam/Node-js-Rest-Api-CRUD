const Todo = require('../models/Todo')
const bodyParser = require('body-parser')

const getAllTodoList = (req,res,next)=>{

    Todo.find().then( todos=>
        {
            res.status(200).json({
                status:200,
                message:'Data Fatch Successful',
                todos:todos
            })
        }
    ).catch(err=>{
        res.status(500).json({
            status:500,
            message:err.message,
            
        })
    })

}

const getSingleTodo = (req,res,next)=>{
    const id = req.params.id
    console.log(id)
    Todo.findById(id).then(todo=>{
        res.status(200).json({
            status:200,
            message:'Successful',
            todo:todo
        })
    })
    .catch(err=>{
        res.status(404).json({
            status:404,
            message:err.message,
            
        })
    })

}

const addSingleTodo = (req,res,next)=>{
   
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        create_At: Date.now(),
        priority: req.body.priority,
        status: req.body.status,
    })

    todo.save().then(todo=>{
        res.status(201).json({
            status:201,
            message:'Data Created Successful',
            todo:todo
        })
    })
    .catch(err=>{
        res.status(500).json({
            status:500,
            message:err.message,
            
        })
    })
}

const updateSingleTodo = (req,res,next)=>{
    let id = req.params.id
    
    let todoEdit = {
        title: req.body.title,
        description: req.body.description,
        create_At: req.body.create_At,
        priority: req.body.priority,
        status: req.body.status,
    }

    Todo.findByIdAndUpdate(id,todoEdit)
    .then(r=>{
        Todo.findById(r._id).then(todo=>{
            res.status(200).json({
                status:200,
                message:'UpdateSuccessful',
                todo:todo
            })
        })
    })
    .catch(err=>{
        res.status(500).json({
            status:500,
            message:err.message,
            
        })
    })
   
}
const deleteSingleTodo = (req,res,next)=>{

    const id = req.params.id
  
    Todo.findByIdAndRemove(id).then(todo=>{
        res.status(200).json({
            status:200,
            message:'Deleted Successful',
            todo:todo
        })
    })
    .catch(err=>{
        res.status(500).json({
            status:500,
            message:err.message,
            
        })
    })

}

module.exports = {
    getAllTodoList,
    getSingleTodo,
    addSingleTodo,
    updateSingleTodo,
    deleteSingleTodo
}