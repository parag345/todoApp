//import the model
const Todo = require("../models/Todo");

//define route handler

exports.updateTodo = async(req,res)=>{
    try{
        const {id} = req.params;
        const { title, description } = req.body;

        const updateIt = await Todo.findByIdAndUpdate(
            {_id :id},{title,description,updatedAt:Date.now()}
        )

        res.status(200).json(
            //This is a standard way to send structured data over HTTP in APIs.
            {
                success:true,
                data:updateIt,
                message:"Updated Suceesfully"
            }
        )

    }
    catch(err){
        // console.err(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                // message:err.message
            }
        )

    }
}