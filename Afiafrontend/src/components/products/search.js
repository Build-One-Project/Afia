import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useHistory, useParams} from 'react-router-dom';
import {Container, Row, Col, Alert} from 'react-bootstrap';
import  AllProducts from './allproducts';
import Header from '../header';
function Search() {
    const id = useParams();
    const history = useHistory();
    let productQueryResult;
    //document.getElementById('searchTerm').value = '';
    //document.getElementById('searchTerm').style.display = 'none';

    if(id){


let productQuery = AllProducts.filter(product=>product.id===id);
    if (productQuery.length >0){
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
            <h3>No products!</h3>
        </Alert>

    }
}
else {
    history.push("/errorpage", {from:"Search"})
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

export default Search;