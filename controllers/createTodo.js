//import the model
const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async(req,res)=>{
    try{
        //extract title and description from request body
        const {title,description} = req.body;
        console.log("Request Body:", req.body);

        //Create a new Todo object and insert it into db
        const response = await Todo.create({title,description});
      

        res.status(200).json(
            //This is a standard way to send structured data over HTTP in APIs.
            {
                success:true,
                data:response,
                message:"Entry created suceessfully"
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