import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row } from 'react-bootstrap';
import '../style.css';
import HomeSlider from './carousel';
import Header from './header';
//import Header from './header';
//import Footer from './footer';
import Categories from './category';
function Homepage() {
    document.title = 'Home - Afia Stores';
  return (
      <>
      <Header />
    <div className="mainContent">
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-none d-md-block d-lg-block"></Col>
        <Col md={10} xs={12} style={{padding:5, width:'100%', Height:'570px'}}>
            <Row>
            <Col md={2} className="d-none d-sm-none d-md-block d-lg-block">
                    
                <div style={{backgroundColor:'#fff', padding:'3%', borderTop:'solid 10px tomato', borderRadius:'5px', textAlign:'center', marginBottom:'4.3%'}}>
                <b style={{fontSize:18, color:'tomato'}}>OUR CORE VALUES</b><br />
                
                <img src="/images/quality.png" alt="Card" style={{width:'50%'}} />
                <p><b>QUALITY</b></p>
                
                <img src="/images/service.png" alt="Card" style={{width:'50%'}} />
                <p><b>SERVICE</b></p>
                
                <img src="/images/variety.png" alt="Card" style={{width:'50%'}} />
                <p><b>VARIETY</b></p>
                </div>
                
            </Col>
            <Col md={8} xs={12}>
                <HomeSlider />
            </Col>
            <Col md={2} className="d-none d-sm-none d-md-block d-lg-block">
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
        <Col md={1} xs={12} className="d-none d-sm-none d-md-block d-lg-block"></Col>
    </Row>
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-none d-md-block d-lg-block"></Col>
        <Col md={10} xs={12} className="newArrivals">
                <div className="newArrivalsHead">FEATURED CATEGORIES</div>
                <div className="newArrivalsBody"><Categories /></div>
        </Col>
        <Col md={1} xs={12} className="d-none d-sm-none d-md-block d-lg-block"></Col>
    </Row>
   
    </div>
    </>
  );
  
}

export default Homepage;