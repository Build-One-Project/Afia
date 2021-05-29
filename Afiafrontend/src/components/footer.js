import {Col, Row } from 'react-bootstrap'; 
import {BrowserRouter as Router, Link} from 'react-router-dom';
function Footer (){
  return ( 
    <Router>   
        <Row className="footer">
          <Col md={1}></Col>
          <Col md={10}>
          <Row>
          <Col md={3}  xs={12}>
            <h5>Usefull Information</h5>
            <p><Link to="#">Contact</Link></p>
            <p><Link to="#">FAQs</Link></p>
            <p><Link to="#">Site map</Link></p>
          </Col>
          <Col md={3}  xs={12}>
            <h5>Terms of Service</h5>
            <p><Link to="#">Privacy policy</Link></p>
            <p><Link to="#">Terms and conditions</Link></p>
            <p><Link to="#"><i className="fa fa-search-location"><span style={{ marginLeft: "10px" }}>Store Finder</span></i></Link></p>
          </Col>
          <Col md={3} xs={12}>
            <h5>More...</h5>
            <p><Link to="#">Plus Card</Link></p>
            <p><Link to="#">Gift Card</Link></p>
          </Col>
          <Col md={3} xs={12}>
            <h5>Social Media</h5>
            <p><Link to="#"><i className="fab fa-facebook-f"><span style={{ marginLeft: "10px" }}>Facebook</span></i></Link></p>
            <p><Link to="#"><i className="fab fa-twitter"><span style={{ marginLeft: "10px" }}>Twitter </span></i></Link></p>
            <p><Link to="#">Email news service</Link></p>
          </Col>
       
          <Col md={12} xs={12} style={{marginTop: "5px", textAlign:'center'}}>
            Afia Stores Ltd. - All rights reserved © 2021
          </Col>
          </Row>
          </Col>
          <Col xs={1}></Col>
      </Row>
      </Router>
  );
}
export default Footer;