import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {Container, Row, Col, Alert} from 'react-bootstrap';
import  AllProducts from './allproducts';
import Header from '../header'
function ProductCategory() {
    const location = useLocation();
    const history = useHistory();
    let category = new URLSearchParams(location.search).get("category");
    let productQueryResult;
    //document.getElementById('searchTerm').value = '';
    //document.getElementById('searchTerm').style.display = 'none';

    if(category){

     document.title=category.replace('-',' ') + " - Afia Stores";

let productQuery = AllProducts.filter(product=>product.category===category|| product.subcategory===category || product.id===category);
    if (productQuery.length >=1){
        productQueryResult = productQuery.map(product=>(
            <Col md={3} xs={12} key={product.id}>
     <Card className="itemCard">
         <Card.Img variant="top" src={product.photo} />
         <Card.Body>
         <Card.Title style={{fontSize:18}}>{product.name}</Card.Title>
         <Card.Text style={{fontSize:18}}><del style={{textDecorationStyle:'double'}}>N</del>{product.price.toLocaleString()}</Card.Text>
         </Card.Body>
         <Card.Footer>
         <Link to="" className="cardLink">Add to Cart</Link>
         </Card.Footer>
     </Card>
     </Col>
     ))
  }
   else{
        productQueryResult =  
        <Alert className="text-center" variant="warning" style={{padding:'5%', width:'100%'}}>
            <h3>No products found in the <font style={{backgroundColor:'tomato', color:'#fff', padding:'0.5%'}}>{category}</font> Category!</h3>
        </Alert>

    }
}
else {
    history.push("/errorpage", {from:"ProductCategory"})
}
    
  return (
      <>
    <Header />
    <Container fluid>
      <div className="mainContent">
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
        <Col md={10} xs={12} style={{width:'100%'}} className="categories">
    <Row>
     
          {productQueryResult}
        
  </Row>
  </Col>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
    </Row>
    </div>
  </Container>
  </>
    );
}

export default ProductCategory;