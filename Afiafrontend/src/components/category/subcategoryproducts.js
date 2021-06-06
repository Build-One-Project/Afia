import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import {Container, Row, Col} from 'react-bootstrap';
import  AllProducts from './allproducts';
import {useEffect} from 'react';
function ProductSubCategory() {
    let {subcategory} = useParams(); 
    useEffect(
        ()=>{
            document.title=subcategory.replace('-',' ') + " - Afia Stores"
        }
    )  
  return (    
    <Container fluid>
      <div className="mainContent">
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
        <Col md={10} xs={12} style={{width:'100%'}} className="categories">
    <Row>
     
          {AllProducts.filter(product=>product.subcategory===subcategory).map(product=>(
               <Col md={3} xs={12}>
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
        ))}
        

  </Row>
  </Col>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
    </Row>
    </div>
  </Container>
    );
}

export default ProductSubCategory;