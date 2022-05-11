const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'reactjs_web_page'
});

app.post('/create', (req,res) => {
  console.log("RECIBIDO EN SERVER", req.body.nombre);
  const nombre = req.body.nombre;
  const email = req.body.email;
  const consulta = req.body.consulta;

  db.query('INSERT INTO consultas (nombre, email, consulta) VALUES(?,?,?)', [nombre,email,consulta], 
(error,result)=>{
    if(error){
        console.Console("ERROR",error);
    }
    else{
        res.send("CONSULTA AGREGADA");
    }
});


});


app.listen(3001, ()=>{

    console.log("SERVER BACK RUNING PORT 3001",);

});