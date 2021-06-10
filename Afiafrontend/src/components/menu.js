import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar,NavDropdown} from 'react-bootstrap';
import {NavLink} from 'react-router-dom';
//import Categories from './category';

function Menu() {

  return (
    <Navbar bg="" expand="md" >
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto" sticky="top">
        <NavDropdown title="COSMETICS" id="basic-nav-dropdown">
          <NavDropdown.Item><NavLink to="/Lotion-Gel">Lotion & Shower Gel</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink to="/Cleaning-Liquids">Washing & cleaning liquids</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink to="/Hair-Conditionals">Hair conditioners</NavLink></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="GROCERIES & BAKERY" id="basic-nav-dropdown">
          <NavDropdown.Item>Cereal & Oat</NavDropdown.Item>
          <NavDropdown.Item>Dairy Products & Beverages</NavDropdown.Item>
          <NavDropdown.Item>Food Flour & Pasta</NavDropdown.Item>
          <NavDropdown.Item>Cooking oil</NavDropdown.Item>
          <NavDropdown.Item>Organic Fruits</NavDropdown.Item>
          <NavDropdown.Item>Organic Vegetables</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Chicken & Beef</NavDropdown.Item>
          <NavDropdown.Item>Fish & Shrimp</NavDropdown.Item>
          <NavDropdown.Item>Vegetable &  chips</NavDropdown.Item>
          <NavDropdown.Divider />
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
        <NavDropdown title="HOUSEHOLD & FURNITURES" id="basic-nav-dropdown">
          <NavDropdown.Item>Pillows and bedspread</NavDropdown.Item>
          <NavDropdown.Item>Flower Vases</NavDropdown.Item>
          <NavDropdown.Item>Wall clocks & hangers</NavDropdown.Item>
          <NavDropdown.Item>Interiors</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Sofas &  Office Tables</NavDropdown.Item>
          <NavDropdown.Item>Cabinets & Public address System</NavDropdown.Item>
          <NavDropdown.Item>Dinning tables </NavDropdown.Item>
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
        <NavDropdown title="KITCHEN & OTHERS" id="basic-nav-dropdown">
          <NavDropdown.Item><NavLink to="Glassware">Glassware</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink to="/Dinner-Sets">Dinner Sets</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink to="/Microwave-and-Blenders">Microwaves & Blenders</NavLink></NavDropdown.Item>
          <NavDropdown.Item><NavLink to="Coolers">Coolers</NavLink></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Travelling bags</NavDropdown.Item>
          <NavDropdown.Item>Thread Mills</NavDropdown.Item>
          <NavDropdown.Item>Dumbbells & Barbells </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>Others...</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
    
</Navbar>      
  );
}

export default Menu;
