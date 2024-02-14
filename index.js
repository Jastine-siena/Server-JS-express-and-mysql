const express = require('express')
const app = express()
const mysql = require('mysql')

//making connection in the mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dbrecipe'
})

//initializing the connection in mysql
connection.connect();

//Middleware (bridge of OS and Database)
app.use(express.json());
app.use(express.urlencoded({extended: false}))

//--GET REQUEST--
//making the route that accept api
app.get('/api/recipe', (req, res)=>{
    connection.query
    (
        'Select * from tblrecipe', (err, rows, fields) =>{
            if (err) throw err
            res.json(rows);
        }
    )
})

//making another route for request (getting the a details of recipe. Trying to get the info of specific id)
app.get('/api/recipe/:id', (req, res)=>{
    var id = req.params.id;
    connection.query
    (
        `Select * from tblrecipe where RID = '${id}'`, (err, rows, fields) =>{
            if (err) throw err
           
           //error handling
           if(rows.length > 0){
           res.json(rows); //the response must be json 
            }
            else{
                res.status(400).json({msg:`recipe ${id} not found!`}) //400=bad request
            }
        }
    )
    
})

//--POST REQUEST
//CREATING NEW RECIPE
app.post('/api/recipe', (req, res) => {
    //initializing all tables from mysql through storing in variables
    const Recipe = req.body.Recipe
    const Ingredients = req.body.Ingredients
    const Instruction = req.body.Instruction
    const Categories = req.body.Category

    connection.query
    (
        `Insert into tblrecipe (RecipeName,Ingredientslist,CookingInstruction,Category ) values ('${Recipe}','${Ingredients}','${Instruction}','${Categories}')`, (err, rows, fields) =>{
            if (err) throw err
            //the response must be json 
           res.json({msg: `another recipe was inserted`});
        }
    )
})

//--PUT METHOD
//--UPDATING RECIPE
app.put('/api/recipe', (req, res) => {
    //initializing all tables from mysql through storing in variables
    const Recipe = req.body.Recipe
    const Ingredients = req.body.Ingredients
    const Instruction = req.body.Instruction
    const Categories = req.body.Category
    const id = req.body.id
    connection.query
    (
        `Update tblrecipe set RecipeName = '${Recipe}', Ingredientslist = '${Ingredients}', CookingInstruction = '${Instruction}', Category = '${Categories}' where RID = '${id}'`, (err, rows, fields) =>{
            if (err) throw err
            //the response must be json 
           res.json({msg: `another recipe was updated`});
        }
    )

})

//--DELETE METHOD
//--DELETING RECIPE
app.delete('/api/recipe', (req, res) =>{
    const id = req.body.id;
    connection.query(`Delete from tblrecipe where RID ='${id}'`, (err, rows, fields) =>{
        if (err) throw err
       //error handling
       if(rows.length > 0){
        //the response must be json 
       res.json(rows);
        }
        else{
            res.status(400).json({msg:`recipe ${id} not found!`}) //400=bad request
        }
    })
})

//in case that port 5000 in already in use this line of code will provide an available port
const PORT = process.env.PORT || 5000;
//making the server
app.listen(PORT, () =>{
    console.log(`server is started in port ${PORT}`)
})