import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../components/Navbar.css';
import { NavLink } from 'react-router-dom';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className='Navbar'>
      <Container>
        <NavLink to='/' className='Logo'>A B H A Y</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to='/skills' className='navtext'>Skills</NavLink>
            <NavLink to='/contact' className='navtext'>Contact</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;