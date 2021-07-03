import {Container, Row, Col, Button} from 'react-bootstrap';
import Header from '../header';
function ForgotPassword  (){
    document.title = 'Forgot Password - Afia Stores'
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
            <form>
            <h3 style={{color:'tomato', textAlign:'center'}}>FORGOT PASSWORD</h3>

            <div className="form-group">
               <label>Enter Email:</label>
               <input type="email" aria-required className="form-control" placeholder="example@email.com"></input>
            </div>
            <div className="form-group">
               <label>Phone Number:</label>
               <input type="number" aria-required className="form-control" placeholder="08101236309"></input>
            </div>

            <center><Button type="submit" variant="primary" className="searchButton" style={{width:'30%', backgroundColor:'tomato', borderColor:'tomato', marginBottom:'10px'}}>
               GET PASSWORD
            </Button>
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

export default ForgotPassword