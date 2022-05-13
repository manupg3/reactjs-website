const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


const corsOptions = {
	origin: "*"
};
app.use(cors(corsOptions));


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

app.get('/getconsults', (req,res) => {
 
    db.query('SELECT * FROM consultas', 
  (error,result)=>{
      if(error){
          console.Console("ERROR",error);
      }
      else{
          res.send(result);
      }
  });
  });

  app.delete('/delete/:id', (req,res) => {
     const id = req.params.id;
     db.query("DELETE FROM consultas WHERE id = ?", id , (err,result ) =>
     {
        if(err){
            console.log("ERROR",err);
        }   
        else{
            res.send(result);
        }
     });

  });
  


app.listen(3001, ()=>{

    console.log("SERVER BACK RUNING PORT 3001",);

});