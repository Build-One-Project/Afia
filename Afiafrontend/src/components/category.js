import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
//import Header from "./header";
function Categories() {
   
  return (    
    <Container fluid>
      <div className="mainContent">
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
        <Col md={10} xs={12} style={{padding:5, width:'100%'}}>
    <Row className="categories">
      <Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://robanstores.com/wpimages/wpe15f0fe7_05_06.jpg" />
    <Card.Body>
      <Card.Title>Cosmetics</Card.Title>
      <Card.Text>
      Lotion & Shower Gel, Washing & cleaning liquids, Hair conditioners & More...
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
</Col>
<Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://robanstores.com/wpimages/wpca750c73_05_06.jpg" />
    <Card.Body>
      <Card.Title>Groceries</Card.Title>
      <Card.Text>
      Cereal & Oat, Dairy Products,  Food Flour & Pasta, Cooking oil & More...
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
</Col>
<Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://robanstores.com/wpimages/wp0b06bb2b_05_06.jpg" />
    <Card.Body>
      <Card.Title>Bakery</Card.Title>
      <Card.Text>
      Fresh Bread, Cookies & Pie, Prepared Meals & More..
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
</Col>
<Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://robanstores.com/wpimages/wp556f3207_05_06.jpg" />
    <Card.Body>
      <Card.Title>Fashion</Card.Title>
      <Card.Text>
      Men & Female Wears, Perfumes & Watches, Children Wears & More...
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
  </Col>
  </Row>
  <Row className="categories">
  <Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://robanstores.com/wpimages/wp769d621e_05_06.jpg" />
    <Card.Body>
      <Card.Title>Fluits and vegetables</Card.Title>
      <Card.Text>
      Organic Fruits, Organic vegetables, and many more..
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
  </Col>
  <Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://robanstores.com/wpimages/wpdded743a_05_06.jpg" />
    <Card.Body>
      <Card.Title>Beer, Wine and Drinks</Card.Title>
      <Card.Text>
      Juice & Milk, Whiskey & Wine, Beer & Sparkling wine, and many more...
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
  </Col>
  <Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://robanstores.com/wpimages/wp5b9ac710_05_06.jpg" />
    <Card.Body>
      <Card.Title>Household</Card.Title>
      <Card.Text>
      Pillows and bedspread, Flower Vases, Wall clocks & hangers, and many more..
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
  </Col>
  <Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://robanstores.com/wpimages/wp218dc988_05_06.jpg" />
    <Card.Body>
      <Card.Title>Baby and Toddler</Card.Title>
      <Card.Text>
      Milk & Cereal, Feeding & Bathing items, Baby wear & Strollers, and many more
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
  </Col>
  </Row>
  <Row>
  <Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://robanstores.com/wpimages/wp5f2e2a64_05_06.jpg" />
    <Card.Body>
      <Card.Title>Frozen</Card.Title>
      <Card.Text>
      Chicken & Beef, Fish & Shrimp,  Vegetable &  chips, and many more…
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
  </Col>
  <Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://robanstores.com/wpimages/wpe828e3cb_05_06.jpg" />
    <Card.Body>
      <Card.Title>Furniture</Card.Title>
      <Card.Text>
      Sofas &  Office Tables, Cabinets & Public address System,  Dinning tables & More..
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
  </Col>
  <Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://robanstores.com/wpimages/wp915c3c83_05_06.jpg" />
    <Card.Body>
      <Card.Title>Gym Acc and Bags</Card.Title>
      <Card.Text>
      Travelling bags,  Thread Mills, Dumbbells & Barbells, and many more…
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
  </Col>
  <Col md={3} xs={12}>
  <Card className="itemCard">
    <Card.Img variant="top" src="http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2011/11/30/1322674065664/Chefs-kitchen-kit-001.jpg" />
    <Card.Body>
      <Card.Title>Kitchen Tools and Electronics</Card.Title>
      <Card.Text>
      Glassware, Dinner sets, Microwaves & Blenders, Coolers & More…
      </Card.Text>
    </Card.Body>
    <Card.Footer>
       <Link to="" className="cardLink">View Category</Link>
    </Card.Footer>
  </Card>
  </Col>
  </Row>
  </Col>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
    </Row>
    </div>
  </Container>
    );
}

export default Categories;