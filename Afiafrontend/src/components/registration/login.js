import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
function Login  (){
   document.title = 'Login - Afia Stores';
   const password = document.getElementById('password');
   const email = document.getElementById('email');


   
    function submitData(event) {
      event.preventDefault();               
      
   }
    return (
       <>
      <Container fluid>
      <div className="mainContent">
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
        <Col md={10} xs={12} className="signUp">
    <Row>
    <Col md={3} xs={12}></Col>
      <Col md={6} xs={12} style={{paddingTop:'2%', boxShadow: '0 2px 2px 2px rgb(168, 167, 167)'}}>
            <form onSubmit={submitData} method="GET">
            <h3 style={{color:'tomato', textAlign:'center'}}>LOGIN</h3>
         
            <div className="form-group">
               <label>Email</label>
               <input  name="email"   id="email" type="email" aria-required className="form-control" placeholder="e.g yourname@gmail.com " required />
            </div>

            <div className="form-group">
               <label>Password</label>
               <input  name="password"   id="password" type="password" className="form-control" placeholder="Input password..."  required />
            </div>

            <center><Button type="submit" variant="primary" className="searchButton" style={{width:'20%', backgroundColor:'tomato', borderColor:'tomato', marginBottom:'10px'}}>
               Login
            </Button>
            </center>
            <p style={{lineHeight:2, textAlign:'center', color:'tomato'}}><Link to="/forgotpassword">Forgot your Password?</Link></p>
            <center style={{color:'tomato', padding:'2%'}}>
               New to Afia Stores? <Link to="/register">Click Here to Create an Account </Link>
            </center>
            </form>
        </Col>
        <Col md={3} xs={12}></Col>
  </Row>
  </Col>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
    </Row>
    </div>
  </Container>
</>
            
    )
}

export default Login
