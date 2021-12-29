const pool = require('../../db');
const quries = require('../students/queries')

const getStudents = (req,res)=>{
   pool.query(quries.getStudents,(error,results)=>{
       if(error) throw error;
       res.status(200).json(results.rows);
   })
   
}
const getStudentById = (req,res)=>{ 
    const id = parseInt(req.params.id);
    pool.query(quries.getStudentById,[id],(error,results)=>{
        if(error) throw error;
        res.status(200).json(results.rows);
    })
    
 }
const addStudents = (req,res)=>{ 
    const { name,email,age,dob } = req.body;
    pool.query(quries.checkEmailExist,[email],(error,results)=>{
        if(results.rows.length){
            res.send('Email is already exists');
        }

        // insert in database
        else{
        pool.query(
            quries.addStudent,
            [name,email,age,dob],
            (error,results)=>{
            if(error) throw error; 
            res.status(200).json({ sucess: 'Stuendt inserted !' })
        })
    }
    })
    
 }
 const deleteStudent = (req,res)=>{ 
    const id = parseInt(req.params.id);
    pool.query(quries.getStudentById,[id],(error,results)=>{
        if(results.rows.length){
            pool.query(quries.deleteStudent,[id],(error,results)=>{
                if(error) throw error;
                res.status(200).json({ sucess: 'Student delete !' })
            })
            
        }
   else{
    res.status(400).json({ error: 'Student not exist !' })
}
})
 }
 const updateStudent = (req,res)=>{ 
    const { name,email,age,dob } = req.body;
    pool.query(quries.checkEmailExist,[email],(error,results)=>{
        if(results.rows.length){
            res.send('Email is already exists');
        }

        // insert in database
        else{
        pool.query(
            quries.addStudent,
            [name,email,age,dob],
            (error,results)=>{
            if(error) throw error; 
            res.status(200).json({ sucess: 'Stuendt inserted !' })
        })
    }
    })
    
 }  
module.exports={
    getStudents,
    getStudentById,
    addStudents,
    deleteStudent,
    updateStudent,
};