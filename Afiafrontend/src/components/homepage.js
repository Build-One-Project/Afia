import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row } from 'react-bootstrap';
import '../style.css';
import HomeSlider from './carousel';
import Header from './header';
import Footer from './footer';
import Categories from './category';
function Homepage() {
  return (
  <Container fluid>
    <Header />
    <div className="mainContent">
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
        <Col md={10} xs={12} style={{padding:5, width:'100%'}}>
            <Row>
            <Col md={2} className="d-none d-sm-block">
                <div className="coreValues">
                <p>QUALITY</p>
                Our strong culture and values are part of our core purpose and what makes us a successful company.
                </div>
                <div className="coreValues">
                <p>SERVICE</p>
                We pride ourselves on delivering great products and services to our customers every day.
                </div>
                <div className="coreValues">
                <p>VARIETY</p>
                We are a one-stop retail shop that carries virtually everything you need in a home, also one of the leading retailers in Nigeria.
                </div>
                
            </Col>
            <Col md={8} xs={12}>
                <HomeSlider />
            </Col>
            <Col md={2} className="d-none d-sm-block">
                <div style={{backgroundColor:'#fff', padding:'3%', borderTop:'solid 10px tomato', borderRadius:'5px', textAlign:'center', marginBottom:'4.3%'}}>
                <b style={{fontSize:20, color:'tomato'}}>
                Buy more for less with the new Afia Plus Card.
                </b>
                <img src="/images/card.png" alt="Card" style={{width:'100%'}} />
                </div>
                <div>
                <img src="/images/card.jpg" alt="Card" style={{width:'100%'}} />
                </div>
            </Col>
            </Row>
        </Col>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
    </Row>
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
        <Col md={10} xs={12} className="newArrivals">
                <div className="newArrivalsHead">FEATURED CATEGORIES</div>
                <div className="newArrivalsBody"><Categories /></div>
        </Col>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
    </Row>
    </div>
    <Footer />
    </Container>
  );
}

export default Homepage;
