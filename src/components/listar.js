import Axios from 'axios';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, {useEffect, useRef} from 'react'
import { useState } from 'react';
import '../App.css';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export default function Listar(){
  let getConsultsOk = false;
  const form = useRef();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
const [emailConsulta, setEmailConsulta] = useState("No Email");
const [contestado, setContestado] = useState(false);
const [listaConsultas, setListaConsultas] = useState([]);
const [consulta, setConsulta] = useState(null);
const [idConsulta, setIdConsulta] = useState(0);

const MySwal = withReactContent(Swal)

const respuestaExitosa = () => { 
  console.log("ID DE CONSULTA E ELIMINAR", idConsulta);

  const MySwal = withReactContent(Swal)

MySwal.fire({
  title: <p>Respuesta Enviada</p>,
  didOpen: () => {
  },
}).then(() => {
   eliminarConsulta();  
   

});

 }

const responder = (email,id) => {
  
  setEmailConsulta(email);
  setIdConsulta(id);
  
  setShow(true);

};
const eliminarConsulta = () => {
  let id = idConsulta;
  Axios.delete(`http://localhost:3001/delete/${id}`).then(()=>{
     setListaConsultas(listaConsultas.filter((value)=>{
        return value.id !=id
     }));
  });

 }

const getConsults = () => {
      Axios.get("http://localhost:3001/getconsults").then((response)=>{
        console.log("RESPNSE GET", response);
        setListaConsultas(response.data);
        console.log("LISTAR CONSULTAS",listaConsultas);
  }); 
}
useEffect(()=>{ 

   getConsults();
   return () =>{
     
  }
}, []);


const sendEmail = (e) => {
  e.preventDefault();
  console.log("FORM",form);
  emailjs.sendForm('service_5tkz89w', 'template_xlw0b8c', form.current, 'JgnHbpLTzDVJo9Bp7')
    .then((result) => {
        respuestaExitosa();
        console.log("RESULT TAEXT",form);

    }, (error) => {
        console.log(error.text);
    });
};

    return (
      
<div className="pl-96 pr-96 ">     
{listaConsultas.map((consulta, key)=>( 

<Accordion className="mb-4">
  <Accordion.Item eventKey="0">
    <Accordion.Header className="text-center">{consulta.nombre}{" - "+consulta.email}</Accordion.Header>
    <Accordion.Body className="text-center">
    {consulta.consulta}
    <div className="mt-4">
    <Button variant="primary" onClick={()=> responder(consulta.email,consulta.id)}>
        Responder Consulta
      </Button>   

    </div>
      
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
  ))}

 <Modal show={show} onHide={handleClose}>

  <Modal.Header closeButton>
    <Modal.Title>Responder</Modal.Title>
  </Modal.Header>
  <Modal.Body>
 
<form  className="grid text-center"  ref={form} onSubmit={sendEmail}>

<label className='font-semibold text-xl'>Destinatario</label>
<input type="email" className=' text-center bg-indigo-100 rounded-md mt-2 mb-3 pt-2 pb-2 focus:outline-none focus:ring focus:ring-indigo-200' value={emailConsulta} name="user_email" />
<label className="font-semibold text-xl">Tu Respuesta</label>
<textarea name="message" className='p-3 bg-indigo-100 mt-2 mb-3 h-28 rounded-md focus:outline-none focus:ring focus:ring-indigo-200' />
<div className="text-center">    
<input type="submit" onClick={handleClose} className="bg-blue-500 pt-1.5 pb-1.5 pr-2.5 pl-2.5 w-fit shadow-lg font-semibold text-white rounded-sm"  value="Enviar Respuesta" />
</div>

</form>

  </Modal.Body>

</Modal>

</div>
    )
}