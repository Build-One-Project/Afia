import {Container, Row, Col, Alert} from 'react-bootstrap';
import Header from '../header';
function RegSuccess  (){
   document.title = 'Success - Afia Stores'
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
            <Alert variant='success'>
                <h2>
                    Registration Successful!
                    <p>
                        Click on Login above to continue.

                    </p>
                </h2>
            </Alert>
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

export default RegSuccess
