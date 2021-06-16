import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col, Row, NavDropdown} from 'react-bootstrap';
import '../style.css';
import Menu from './menu';
import {Link} from 'react-router-dom';

function Header() {
  
  const loginIcon = (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#000" style={{width:24}}>
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>)
const loginLabel =(<font style={{textDecorationStyle:'none', color:'#000', fontWeight:'bold'}}> Login</font>);
  return (
    <>
    <Row>
        <Col md={1}></Col>
        <Col md={10} xs={12} style={{padding:'5'}}>
          <Row>
            <Col md={3} xs={3}>
              <Link to="/" style={{textDecoration:'none'}}><img src="/images/afia.png" alt="logo" style={{width:'70px', marginRight:'5%', marginTop:'3%',float:'left'}} />
              <font className="d-none d-sm-none d-md-none d-lg-block" style={{fontSize:25, marginTop:'1%', fontWeight:'bold', lineHeight:'3em', color:'#000'}}>Afia Stores</font>
              </Link>
            </Col>
            <Col md={6} xs={9} style={{paddingLeft:'1%'}}>
              <Form style={{marginTop:'2.5%'}}>
                <Row>
                  <Col md={10} xs={8}>
                <Form.Group className="mb-3">
                  <Form.Control type="text" placeholder="Search products, brands and categories" style={{borderColor:'rgb(0 0 0 / 12%)'}}/>
                </Form.Group>
                </Col>
                <Col md={2} xs={4}>
                <Button className="searchButton" variant="primary" type="submit" style={{backgroundColor:'tomato', borderColor:'tomato'}}>
                  SEARCH
                </Button>
                </Col>
                </Row>
              </Form>
            </Col>
            <Col md={3} xs={12} style={{marginTop:'1.5%'}} className="d-none d-md-block d-sm-none d-lg-block">
              <div style={{float:'left', width:'60%'}}>
                <NavDropdown title={[loginIcon,loginLabel]} id="basic-nav-dropdown" style={{zIndex:'9999'}}>
                <Form style={{padding:'5%', align:'center'}}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <center><Button className="searchButton" variant="primary" type="submit" style={{width:'60%', backgroundColor:'tomato', borderColor:'tomato', marginBottom:'10px'}}>
                  LOGIN
                  </Button> </center>
                  <p style={{lineHeight:2, textAlign:'center'}}><Link to="/forgotpassword">Forgot Password?</Link></p>
                  <NavDropdown.Divider />
                  <p style={{textAlign:'center', textDecorationStyle:'none'}}><Link to="/register">CREATE AN ACCOUNT</Link></p>

                </Form>
              </NavDropdown>
            </div>
            <div style={{float:'left', marginTop:'2%'}}>
              <Link to="/cart" style={{textDecoration:'none', color:'#000', fontWeight:'bold'}}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="#000" style={{width:24}}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg> Cart
              </Link>
          </div>
          </Col>
          </Row>
        </Col>
        <Col md={1} xs={12}></Col>
    </Row>
    <Row className="Menu">
        <Col md={1} xs={12}></Col>
        <Col md={10} xs={12} style={{padding:5}}>
            <div className="d-block d-md-none d-sm-block d-lg-none" style={{float:'left', width:'70%'}}>
              <div style={{float:'left', width:'75%'}}>
                <NavDropdown title={[loginIcon,loginLabel]} id="basic-nav-dropdown" style={{zIndex:'9999'}}>
                <Form style={{padding:'5%', align:'center'}}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <center><Button className="searchButton" variant="primary" type="submit" style={{width:'60%', backgroundColor:'tomato', borderColor:'tomato', marginBottom:'10px'}}>
                  LOGIN
                  </Button> </center>
                  <p style={{lineHeight:2, textAlign:'center'}}>Forgot Password?</p>
                  <NavDropdown.Divider />
                  <p style={{textAlign:'center'}}>CREATE AN ACCOUNT</p>

                </Form>
              </NavDropdown>
            </div>
            <div style={{marginTop:'2.5%', fontWeight:'bold'}}>
              <Link to="/cart" style={{textDecoration:'none', color:'tomato'}}>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="tomato" style={{width:24}}>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg> Cart
              </Link>
          </div>
            </div>
            <div style={{float:'left'}}>
            <Menu />
            </div>
        </Col>
        <Col md={1} xs={12}></Col>
    </Row>
    </>
  );
}

export default Header;
