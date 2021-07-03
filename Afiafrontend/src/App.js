import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//import Header from './components/header';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';
import ProductCategory from './components/category/categoryproducts';
import Register from './components/registration/signup';
import ForgotPassword from './components/registration/forgotpassword';
import RegSuccess from './components/registration/regsuccess';
import Login from './components/registration/login';
import ErrorPage from './components/errorpage';
import Search from './components/category/search';
function App() {
  return (
  <Router>
    <Container fluid>
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
    <Route>
      <ProductCategory />
    </Route>
    <Route>
      <Search />
    </Route>
  </Switch>
  <Footer />
  </Container>
</Router>

  );
}

export default App;
