import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import Header from './components/header';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';
import ProductCategory from './components/products/categoryproducts';
import Register from './components/registration/signup';
import ForgotPassword from './components/registration/forgotpassword';
import RegSuccess from './components/registration/regsuccess';
import Login from './components/registration/login';
import ErrorPage from './components/errorpage';
import Header from './components/header';
import {useState } from 'react';
import ShoppingCart from './components/products/shoppingcart';
function App() {

  const [cart, setCart] = useState([]);
  function addCart (e){
    if(cart.find(ct => ct.pID === e.target.value)){
      document.getElementById('itemButton'+e.target.value).disabled = true;
    }
    else{
      const itemValue = [...cart, {pID: e.target.value}];
      setCart(itemValue);
      document.getElementById('itemButton'+e.target.value).disabled = true;
    }
  }
  return (
  <Router>
    <Container fluid>
    <Header item={cart} />
    <Switch>
  <Route exact path="/">
      <Homepage />
  </Route>
  
  <Route path="/login">
      <Login />
    </Route>
  <Route path="/register">
      <Register />
    </Route>
    <Route path="/successpage">
      <RegSuccess />
    </Route>
    <Route path="/errorpage">
      <ErrorPage />
    </Route>
    <Route path="/forgotpassword">
      <ForgotPassword />
    </Route>
    <Route path="/shopping-cart">
      <ShoppingCart item={cart} />
    </Route>
    <Route>
      <ProductCategory item={cart} addItem={addCart} />
    </Route>
  </Switch>
  <Footer />
  </Container>
</Router>

  );
}

export default App;
