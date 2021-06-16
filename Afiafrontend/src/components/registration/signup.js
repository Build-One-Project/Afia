import {Container, Row, Col, Button} from 'react-bootstrap';
function Register  (){
    return (
      <Container fluid>
      <div className="mainContent">
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
        <Col md={10} xs={12} className="signUp">
    <Row>
    <Col md={3} xs={12}></Col>
      <Col md={6} xs={12} style={{paddingTop:'2%', boxShadow: '0 2px 2px 2px rgb(168, 167, 167)'}}>
            <form>
            <h3 style={{color:'tomato', textAlign:'center'}}>REGISTER</h3>

            <div className="form-group">
               <label>Name</label>
               <input id="fullname" type="text" aria-required className="form-control" placeholder="Full name..."></input>
            </div>

            <div className="form-group">
               <label>Email</label>
               <input id="email" type="email" aria-required className="form-control" placeholder="e.g yourname@gmail.com "></input>
            </div>

            <div className="form-group">
               <label>Phone/mobile number</label>
               <input id="phonenumber" type="number" aria-required className="form-control" placeholder="e.g +234-12222222 "></input>
            </div>
            <div className="form-group">
               <label>Address</label>
               <input id="address" type="txt" aria-required className="form-control" placeholder="Enter address"></input>
            </div>

            <div className="form-group">
               <label>Password</label>
               <input id="password" type="password" className="form-control" placeholder="Input password..."></input>
            </div>
            <div className="form-group">
               <label>Repeat Password</label>
               <input id="password2" type="password" className="form-control" placeholder="Input password again..."></input>
            </div>

            <center><Button type="submit" variant="primary" className="searchButton" style={{width:'20%', backgroundColor:'tomato', borderColor:'tomato', marginBottom:'10px'}}>
               Register
            </Button>
            </center>
            <center style={{color:'tomato', padding:'2%'}}>
               Already registered? Click Login Above 
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
            
    )
}

export default Register
