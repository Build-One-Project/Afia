import Card from "react-bootstrap/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router';
import {Container, Row, Col, Alert} from 'react-bootstrap';
import  AllProducts from './allproducts';
import {useEffect} from 'react';
import axios from 'axios'
function ProductCategory() {
    let {category} = useParams();
    useEffect(
        ()=>{
            document.title=category.replace('-',' ') + " - Afia Stores"
        }
    )
let productQuery = AllProducts.filter(product=>product.category===category|| product.subcategory===category);
let productQueryResult;
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
        productQueryResult = <Alert variant="warning" style={{padding:'5%'}}><h3>No Products found in {category} Category!</h3></Alert>

    }
    const allPT=()=>{
    axios.get('https://fakestoreapi.com/products')
        .then((res)=>{
            const APIpr = res.data;
       APIpr.map(resProduct=>(
                <div>
                    <p>ID: {resProduct.id}</p>
                    <img src={resProduct.image} alt={resProduct.title} />
                    <p>{resProduct.title}</p>
                    <p>Price: {resProduct.price}</p>
                    <p>{resProduct.description}</p>
                </div>
    
            ))

        })
        .catch(function (error) {
            console.log(error);
          });
        }

  return (    
    <Container fluid>
      <div className="mainContent">
    <Row>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
        <Col md={10} xs={12} style={{width:'100%'}} className="categories">
    <Row>
     
          {productQueryResult}
        
       <div> {allPT}</div>
  </Row>
  </Col>
        <Col md={1} xs={12} className="d-none d-sm-block"></Col>
    </Row>
    </div>
  </Container>
    );
}

export default ProductCategory;