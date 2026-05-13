import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { Link } from 'react-router-dom';

function NavigationBar() {

  return (

    <Navbar color="dark" dark expand="md" className="px-3">

      <NavbarBrand tag={Link} to="/">
        Ficha 7
      </NavbarBrand>

      <Nav navbar>

        <NavItem>
          <NavLink tag={Link} to="/">
            Inicio
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to="/filmes-table">
            Lista de filmes (tabela)
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to="/filmes-card">
            Lista de filmes (card)
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to="/contacts">
            Contactos
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to="/login">
            Log in
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink tag={Link} to="/signup">
            Sign Up
          </NavLink>
        </NavItem>

      </Nav>

    </Navbar>
  );
}

export default NavigationBar;