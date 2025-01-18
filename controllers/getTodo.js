const Todo = require("../models/Todo");


exports.getTodo = async(req,res)=>{
    try{
       
     const todos = await Todo.find({});
     res.status(200).json(
        {
            success:true,
            data:todos,
            message:"entire todo schema is fetched"
        },
     )



    }
    catch(err){
        res.status(500).json(
            {
                success:false,
                error:err.message,
                message:"server error",
            }
        )
   

    }
}


exports.getTodoById = async(req,res)=>{
    try{
       
   
    const id = req.params.id;
    const td = await Todo.findById({_id : id});

    if(!td){
        res.status(404).json({
            success:false,
            message:`id no. ${id} not found`
        })
    }

    res.status(200).json({
        success:true,
        data:td,
        message:`id ${id} found`
    })


    }
    catch(err){
        res.status(500).json(
            {
                success:false,
                error:err.message,
                message:"server error",
            }
        )
   

    }
}