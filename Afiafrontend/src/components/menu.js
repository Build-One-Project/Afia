import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,NavDropdown, Col, Container, Row } from 'react-bootstrap';

function Menu() {
  return (
        <>
        <Navbar bg="light" expand="sm" sticky="top">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <NavDropdown title="COSMETICS" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Lotion & Shower Gel</NavDropdown.Item>
          <NavDropdown.Item href="">Washing & cleaning liquids</NavDropdown.Item>
          <NavDropdown.Item href="">Hair conditioners</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="GROCERIES" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Cereal & Oat</NavDropdown.Item>
          <NavDropdown.Item href="">Dairy Products & Beverages</NavDropdown.Item>
          <NavDropdown.Item href="">Food Flour & Pasta</NavDropdown.Item>
          <NavDropdown.Item href="">Cooking oil</NavDropdown.Item>
          <NavDropdown.Item href="">Organic Fruits</NavDropdown.Item>
          <NavDropdown.Item href="">Organic Vegetables</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="BAKERY" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Fresh Bread</NavDropdown.Item>
          <NavDropdown.Item href="">Cookies & Pie</NavDropdown.Item>
          <NavDropdown.Item href="">Prepared Meals</NavDropdown.Item>
          <NavDropdown.Item href="">Cakes & Pastries</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="FASHION" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Men & Female Wears</NavDropdown.Item>
          <NavDropdown.Item href="">Perfumes & Watches</NavDropdown.Item>
          <NavDropdown.Item href="">Children Wears</NavDropdown.Item>
          <NavDropdown.Item href="">Accessories</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Others...</NavDropdown.Item>
          </NavDropdown>
        <NavDropdown title="DRINKS" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Juice & Milk</NavDropdown.Item>
          <NavDropdown.Item href="">Whiskey & Wine</NavDropdown.Item>
          <NavDropdown.Item href="">Beer & Sparkling wine</NavDropdown.Item>
          <NavDropdown.Item href="">Minerals & Soft Drinks</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="HOUSEHOLD" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Pillows and bedspread</NavDropdown.Item>
          <NavDropdown.Item href="">Flower Vases</NavDropdown.Item>
          <NavDropdown.Item href="">Wall clocks & hangers</NavDropdown.Item>
          <NavDropdown.Item href="">Interiors</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="BABY & TODDLER" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Milk & Cereal</NavDropdown.Item>
          <NavDropdown.Item href="">Feeding & Bathing items</NavDropdown.Item>
          <NavDropdown.Item href="">Baby wear & Strollers</NavDropdown.Item>
          <NavDropdown.Item href="">Baby Toys</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="FROZEN" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Chicken & Beef</NavDropdown.Item>
          <NavDropdown.Item href="">Fish & Shrimp</NavDropdown.Item>
          <NavDropdown.Item href="">Vegetable &  chips</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="KITCHEN & ELECTRONICS" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Glassware</NavDropdown.Item>
          <NavDropdown.Item href="">Dinner Sets</NavDropdown.Item>
          <NavDropdown.Item href="">Microwaves & Blenders</NavDropdown.Item>
          <NavDropdown.Item href="">Coolers</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="FURNITURES" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Sofas &  Office Tables</NavDropdown.Item>
          <NavDropdown.Item href="">Cabinets & Public address System</NavDropdown.Item>
          <NavDropdown.Item href="">Dinning tables </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Others...</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="GYM ACC. & BAGS" id="basic-nav-dropdown">
          <NavDropdown.Item href="">Travelling bags</NavDropdown.Item>
          <NavDropdown.Item href="">Thread Mills</NavDropdown.Item>
          <NavDropdown.Item href="">Dumbbells & Barbells </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="">Others...</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
</Navbar>

        </>
      
  );
}

export default Menu;
