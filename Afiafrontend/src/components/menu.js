import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
//import Categories from './category';

function Menu() {
  return (
    <Navbar bg="" expand="md" sticky="top" className="container-fluid">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="COSMETICS" id="basic-nav-dropdown">
          <NavDropdown.Item href="/category/lotion.js">Lotion & Shower Gel</NavDropdown.Item>
          <NavDropdown.Item>Washing & cleaning liquids</NavDropdown.Item>
          <NavDropdown.Item>Hair conditioners</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="GROCERIES" id="basic-nav-dropdown">
          <NavDropdown.Item>Cereal & Oat</NavDropdown.Item>
          <NavDropdown.Item>Dairy Products & Beverages</NavDropdown.Item>
          <NavDropdown.Item>Food Flour & Pasta</NavDropdown.Item>
          <NavDropdown.Item>Cooking oil</NavDropdown.Item>
          <NavDropdown.Item>Organic Fruits</NavDropdown.Item>
          <NavDropdown.Item>Organic Vegetables</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="BAKERY" id="basic-nav-dropdown">
          <NavDropdown.Item>Fresh Bread</NavDropdown.Item>
          <NavDropdown.Item>Cookies & Pie</NavDropdown.Item>
          <NavDropdown.Item>Prepared Meals</NavDropdown.Item>
          <NavDropdown.Item>Cakes & Pastries</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="FASHION" id="basic-nav-dropdown">
          <NavDropdown.Item>Men & Female Wears</NavDropdown.Item>
          <NavDropdown.Item>Perfumes & Watches</NavDropdown.Item>
          <NavDropdown.Item>Children Wears</NavDropdown.Item>
          <NavDropdown.Item>Accessories</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
          </NavDropdown>
        <NavDropdown title="DRINKS" id="basic-nav-dropdown">
          <NavDropdown.Item>Juice & Milk</NavDropdown.Item>
          <NavDropdown.Item>Whiskey & Wine</NavDropdown.Item>
          <NavDropdown.Item>Beer & Sparkling wine</NavDropdown.Item>
          <NavDropdown.Item>Minerals & Soft Drinks</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="HOUSEHOLD" id="basic-nav-dropdown">
          <NavDropdown.Item>Pillows and bedspread</NavDropdown.Item>
          <NavDropdown.Item>Flower Vases</NavDropdown.Item>
          <NavDropdown.Item>Wall clocks & hangers</NavDropdown.Item>
          <NavDropdown.Item>Interiors</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="BABY & TODDLER" id="basic-nav-dropdown">
          <NavDropdown.Item>Milk & Cereal</NavDropdown.Item>
          <NavDropdown.Item>Feeding & Bathing items</NavDropdown.Item>
          <NavDropdown.Item>Baby wear & Strollers</NavDropdown.Item>
          <NavDropdown.Item>Baby Toys</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="FROZEN" id="basic-nav-dropdown">
          <NavDropdown.Item>Chicken & Beef</NavDropdown.Item>
          <NavDropdown.Item>Fish & Shrimp</NavDropdown.Item>
          <NavDropdown.Item>Vegetable &  chips</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="KITCHEN & ELECTRONICS" id="basic-nav-dropdown">
          <NavDropdown.Item>Glassware</NavDropdown.Item>
          <NavDropdown.Item>Dinner Sets</NavDropdown.Item>
          <NavDropdown.Item>Microwaves & Blenders</NavDropdown.Item>
          <NavDropdown.Item>Coolers</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="FURNITURES" id="basic-nav-dropdown">
          <NavDropdown.Item>Sofas &  Office Tables</NavDropdown.Item>
          <NavDropdown.Item>Cabinets & Public address System</NavDropdown.Item>
          <NavDropdown.Item>Dinning tables </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="GYM ACC. & BAGS" id="basic-nav-dropdown">
          <NavDropdown.Item>Travelling bags</NavDropdown.Item>
          <NavDropdown.Item>Thread Mills</NavDropdown.Item>
          <NavDropdown.Item>Dumbbells & Barbells </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
        <NavLink to="/our-category">CATEGORIES</NavLink>
      </Nav>
    </Navbar.Collapse>
    
</Navbar>      
  );
}

export default Menu;
