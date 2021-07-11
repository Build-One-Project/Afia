import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
//import Header from './header';
function ErrorPage  (){
   document.title = 'Not Found - Afia Stores'
       return (
         <>
      <Container fluid>
      <div className="mainContent">
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
        <Col md={10} xs={12} className="signUp">
    <Row>
    <Col md={3} xs={12}></Col>
      <Col md={6} xs={12} style={{paddingTop:'1%', textAlign:'center', color:'tomato', fontSize:'20pt'}}>
            <p>
            <font style={{fontSize:'40pt', fontWeight:'bold'}}>SORRY!</font><br />
              We can't find that page
              </p>
      
            <img src="/images/4042.png" alt="not found" style={{}} />
            <p> <Link to="/">Click Here</Link> to go to our homepage</p>
            
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

export default ErrorPage