import { Navbar, Title, Nav, Ul, Li } from './style.js';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar>
      <Title>CRUD</Title>
      <Nav>
        <Ul>
          <Li>
            <Link to="/">Home</Link>
          </Li>
          <Li>
            <Link to="/create">Create</Link>
          </Li>
        </Ul>
      </Nav>
    </Navbar>
  );
};

export default Header;
