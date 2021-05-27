import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row } from 'react-bootstrap';
import '../style.css';
import HomeSlider from './carousel';
import Header from './header';

function Homepage() {
  return (
    <>
    <Header />
    <Row style={{marginTop:'0.5%'}}>
        <Col md={1}></Col>
        <Col md={10} style={{padding:5}}>
            <Row>
            <Col md={2}>
                <div className="coreValues xs-hidden">
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
            <Col md={8}>
                <HomeSlider />
            </Col>
            <Col md={2}>
                <div style={{backgroundColor:'#fff', padding:'3%', borderTop:'solid 10px tomato', borderRadius:'5px', textAlign:'center', marginBottom:'4.4%'}}>
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
        <Col md={1}></Col>
    </Row>
    <Row>
        <Col md={1}></Col>
        <Col md={10} className="newArrivals">
            <div className="newArrivalsHead">
                NEW ARRIVALS
            </div>
            <div className="newArrivalsBody">
                These are items in the new arrivals section.
            </div>
        
        </Col>
        <Col md={1}></Col>

    </Row>
      </>
  );
}

export default Homepage;
