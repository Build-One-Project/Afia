import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './components/homepage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Categories from './components/category';
import Header from './components/header';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';
function App() {
  return (
  <Router>
    <Container fluid>
    <Header />
    <Switch>
  <Route exact path="/">
      <Homepage />
  </Route>
    <Route path="/our-category">
      <Categories />
    </Route>
  </Switch>
  <Footer />
  </Container>
</Router>

  );
}

export default App;
