import {Container, Row, Col, Button, Alert, Modal} from 'react-bootstrap';
import {useState} from 'react'
import { useHistory, Link } from "react-router-dom";
import Header from '../header';
function Register  (){
   document.title = 'Register - Afia Stores';
   const history = useHistory();
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const password1 = document.getElementById('password');
   const password2 = document.getElementById('password2');
   const [ErrorMessage, setErrorMessage] = useState('');
   const [FocusInput, setFocusInput] = useState();
   let userID = Math.random().toString(36).substr(2, 12);

   const [values, setValues] = useState({
      fullname: '',
      email: '',
      phone: '',
      address: '',
      password: '',
      userID: userID,
    });

    const handleChange = e => {
      setValues(oldValues => ({ ...oldValues, [e.target.name]: e.target.value }));
    }

    const validatePassword = ()=>{
      if(password1.value.length < 8)
      { 
         setErrorMessage("The Password You entered is not up to 8 characters") 
         setFocusInput(password1)  
         handleShow(); 
      }
    }
    const checkPassword = () => {
      if(password1.value !== password2.value)
      { 
         setErrorMessage('The passwords you entered DO NOT match.')
         setFocusInput(password2)
         handleShow(); 
      }
    }

    function submitData(event) {
      event.preventDefault();               
      let myData = []
      //console.log(values, setValues);
      if(myData.push(values,setValues))
      {
         window.localStorage.setItem('UserInfo', JSON.stringify(myData));
         history.push("/successpage", { from: "Register" });
      }
   }
    return (
       <>
       <Header />
      <Container fluid>
      <div className="mainContent">
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
        <Col md={10} xs={12} className="signUp">
    <Row>
    <Col md={3} xs={12}></Col>
      <Col md={6} xs={12} style={{paddingTop:'2%', boxShadow: '0 2px 2px 2px rgb(168, 167, 167)'}}>
            <form onSubmit={submitData} method="GET">
            <h3 style={{color:'tomato', textAlign:'center'}}>REGISTER</h3>
            <input name="userID" value={userID}  id="userID" type="hidden" />
            <div className="form-group">
               <label>Name</label>
               <input name="fullname" value={values.fullname} onChange={handleChange} id="fullname" type="text" aria-required className="form-control" placeholder="Full name..." required />
            </div>

            <div className="form-group">
               <label>Email</label>
               <input  name="email" value={values.email} onChange={handleChange} id="email" type="email" aria-required className="form-control" placeholder="e.g yourname@gmail.com " required />
            </div>

            <div className="form-group">
               <label>Phone/mobile number</label>
               <input  name="phone" value={values.phone} onChange={handleChange} id="phone" type="number" aria-required className="form-control" placeholder="e.g +234-12222222 " required />
            </div>
            <div className="form-group">
               <label>Address</label>
               <input  name="address" value={values.address} onChange={handleChange} id="address" type="txt" aria-required className="form-control" placeholder="Enter address" required />
            </div>

            <div className="form-group">
               <label>Password</label>
               <input  name="password" value={values.password} onChange={handleChange} id="password" type="password" className="form-control" onBlur={validatePassword} placeholder="Input password..."  ref={password1} required />
            </div>
            <div className="form-group">
               <label>Repeat Password</label>
               <input id="password2" type="password" className="form-control" onBlur={checkPassword} placeholder="Input password again..." required ref={password2} />
            </div>


            <center><Button type="submit" variant="primary" className="searchButton" style={{width:'20%', backgroundColor:'tomato', borderColor:'tomato', marginBottom:'10px'}}>
               Register
            </Button>
            </center>
            <center style={{color:'tomato', padding:'2%'}}>
               Already registered? <Link to="/login"> Click Here to Login</Link> 
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

  <Modal show={show} onHide={handleClose} style={{zIndex:9999}} size="lg" aria-labelledby="contained-modal-title-vcenter" backdrop="static"
        keyboard={false} centered onExited={()=>FocusInput.current.focus()}>
  <Modal.Header closeButton>
    <Modal.Title style={{color:'tomato'}}>
    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" fill="tomato"	 viewBox="0 0 453.452 453.452" style={{width:'25px'}}>

		<path d="M447.488,360.358l-179.2-314.88c-8.192-14.848-23.552-23.552-41.472-23.552s-32.768,8.704-41.472,23.552l-179.2,314.88
			c-8.192,14.848-8.192,32.768,0,47.616s23.552,23.552,40.96,23.552h357.888c17.408,0,32.768-8.704,40.96-23.552
			C455.68,393.126,455.68,375.206,447.488,360.358z M252.928,356.774h-47.616v-41.472h47.616V356.774z M252.928,291.238h-47.616
			V172.454h47.616V291.238z"/>
      </svg>
        &nbsp; PASSWORD ERROR</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Alert variant='danger' style={{padding:'2%'}}>
      <h3 style={{textAlign:'center'}}>{ErrorMessage}</h3>
      <h4 style={{textAlign:'center'}}>Please try again</h4>
   </Alert>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="primary" className="searchButton" style={{backgroundColor:'tomato', borderColor:'tomato'}} onClick={handleClose}>
      Close
    </Button>
  </Modal.Footer>
</Modal>
</>
            
    )
}

export default Register
