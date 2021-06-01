import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col, Row, NavDropdown} from 'react-bootstrap';
import '../style.css';
import Menu from './menu';
import {NavLink} from 'react-router-dom';

function Header() {
  return (
    <>
    <Row>
        <Col md={1} xs={12}></Col>
        <Col md={10} xs={12} style={{padding:'0'}}>
          <Row>
            <Col md={2} xs={12}>
              <NavLink to="/"><img src="/images/afia.png" alt="logo" style={{width:'70px', marginRight:'5%', marginTop:'3%',float:'left'}} />
              <font style={{fontSize:25, marginTop:'3%', fontWeight:'bold', lineHeight:'3em'}}>Afia Stores</font>
              </NavLink>
            </Col>
            <Col md={8} xs={12} style={{paddingLeft:'1%'}}>
              <Form style={{marginTop:'1.5%'}}>
                <Row>
                  <Col>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Search products, brands and categories" style={{borderColor:'rgb(0 0 0 / 12%)'}}/>
                </Form.Group>
                </Col>
                <Col>
                <Button className="searchButton" variant="primary" type="submit" style={{backgroundColor:'tomato', borderColor:'tomato'}}>
                  SEARCH
                </Button>
                </Col>
                </Row>
              </Form>
            </Col>
            <Col md={2} xs={12} style={{marginTop:'1.5%'}}>
              <FontAwesomeIcon icon={["fa", "user"]} />
              <NavDropdown title="Login" id="basic-nav-dropdown" style={{zIndex:'9999'}}>
              <Form style={{padding:'5%'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className="searchButton" variant="primary" type="submit" style={{backgroundColor:'tomato', borderColor:'tomato', align:'center'}}>
                  LOGIN
                </Button> 
                <p style={{lineHeight:2, textAlign:'center'}}>Forgot Password?</p>
                <NavDropdown.Divider />
                CREATE AN ACCOUNT

              </Form>
            </NavDropdown>
            </Col>
          </Row>
        </Col>
        <Col md={1} xs={12}></Col>
    </Row>
    <Row className="Menu">
        <Col md={1} xs={12}></Col>
        <Col md={10} xs={12} style={{padding:5}}>
        <Menu />
        </Col>
        <Col md={1} xs={12}></Col>
    </Row>
    </>
  );
}

export default Header;
