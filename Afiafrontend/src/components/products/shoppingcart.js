import 'bootstrap/dist/css/bootstrap.min.css';
//import { useState } from 'react';
import {Container, Row, Col, Alert, Table} from 'react-bootstrap';
import  AllProducts from './allproducts';
//import Header from '../header'
function ShoppingCart({item}) {
    document.title="Shopping Cart - Afia Stores";
    const qty = 1;
    let productSearchResult;
let total=[];
const totalSum = (a,b) => a+b;
    
    if(item.length > 0){
    
        const myCart = AllProducts.filter( al => {
            return item.some( cp => {
              return cp.pID === al.id;
            });
          });
    
function addToTotal(price){
    total.push(price.price)
    console.log(total);
}
myCart.forEach(addToTotal)
//let productSearch = AllProducts.filter(product=>product.id === item.includes());
           productSearchResult = 
           <>
           <Table responsive bordered>
            <thead>
                <tr>
                <th>ITEM</th> {/* <th>QUANTITY</th>*/}<th>UNIT PRICE</th><th>SUBTOTAL</th>
                </tr>
            </thead>
            <tbody>
                {
                myCart.map(product =>(
                    <tr key={product.id} style={{}}>
                        <td style={{fontWeight:'bold', lineHeight:'1'}}>
                            <img src={product.photo} alt="product" style={{width:'80px', float:'left;', paddingRight:'5px'}} />
                            {product.name}
                        </td>
                        {/*<td>
                            <input value={qty} type="number" style={{width:'50px', border:'solid 1px lightgrey', margin:'3%'}} onChange={changeQty} />
                        </td>*/}
                <td><del style={{textDecorationStyle:'double'}}>N</del>{product.price.toLocaleString()}</td>
                <td><del style={{textDecorationStyle:'double'}}>N</del>{(product.price * qty).toLocaleString()}</td>
                </tr>
                ))
            }
            <tr>
            <td colSpan="2" style={{textAlign:'right', color:'tomato', fontSize:'14pt'}}><b>TOTAL: </b></td>
            <td style={{color:'tomato', fontSize:'14pt'}}><b><del style={{textDecorationStyle:'double'}}>N</del>{total.reduce(totalSum).toLocaleString()}</b></td>
            </tr>
            </tbody>
     </Table>
     </>
}
else {
    productSearchResult= <Alert className="text-center" variant="warning" style={{padding:'5%', width:'100%'}}>
            <h3>Your Cart is Empty! Please add an Item.</h3>
        </Alert>
}
    
  return (
      <>
    <Container fluid>
      <div className="mainContent">
    <Row>
        <Col md={2}></Col>
        <Col md={8} xs={12} style={{backgroundColor:'#fff', width:'100%', padding:'5%'}}>
    <Row>
     
          {productSearchResult}
  </Row>
  </Col>
        <Col md={2}></Col>
    </Row>
    </div>
  </Container>
  </>
    );
}

export default ShoppingCart;