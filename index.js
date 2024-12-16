const express = require('express');
const app = express();
const router = express.Router();
const port = 3000
app.listen (
    port,
    () => console.log(`Server running on http://localhost:${port}`)
)
const persons = [
   
];
app.use(express.json())
app.get('/all',(req,res)=>{
    res.json({message:"voici la liste", persons})
})
app.post('/add',(req,res)=>{
    const newPer ={
        id:req.body.id,
        name:req.body.name,
    }
    console.log(newPer);
    if (!newPer){
        res.status(418).send({message:'véérifier votre code SVP'})
    }
    persons.push(newPer);
    res.json(newPer).send({
        person: `voici la personne ajoutée de nom ${name} et d'ID ${id}`
    })

})
module.exports = router;