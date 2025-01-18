//import the model
const Todo = require("../models/Todo");

//define route handler

exports.deleteTodo = async(req,res)=>{
    try{

        const id = req.params.id;

        await Todo.findByIdAndDelete(id);


         
      

        res.status(200).json(
            //This is a standard way to send structured data over HTTP in APIs.
            {
                success:true,
                // data:todo,
                message:"todo deleted"
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