import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import {Link, useNavigate} from "react-router-dom"
import Product from './Product';

function Register() {
    const [email,setemail] = useState("")
    const [pswd,setpswd] = useState("")
    const navigate = useNavigate(); 
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        let regObj = {email,pswd}
        // console.log(regObj);
        fetch('http://localhost:8000/product',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body: JSON.stringify(regObj)
        }).then((res)=>{
            console.log(res);

        }).catch((error)=>{
            console.log(error);

        })

    }
  return (
    <div>
        <div className="container mt-5 " >
        <h1 className='mt-5 text-center' >Welcome</h1>
        <Form  onSubmit={handleSubmit}>
        
       
        <Form.Group as={Col} md="4" controlId="validationCustom01" >
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder=""
            defaultValue=""
            value={email} onChange={e=>setemail(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
       
        <Form.Group as={Col} md="4" controlId="validationCustom02" className='mb-3'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder=""
            defaultValue=""
            value={pswd} onChange={e=>setpswd(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" className='bg-success btn1'  >Login</Button>
        <Link to={"/Product"}></Link>
        </Form>
    
        </div>
       
    </div>
  )
}

export default Register
