import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../contexts/authContext';
import Button from 'react-bootstrap/Button';

function NavBarComp() {

    const { authState, isUserAuthenticated, fullName } = useContext(AuthContext)


    function onClickHandler() {
        console.log('authState ' + authState)
        console.log('fullname ' + fullName)
    }
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={Link} to={'/home'}>Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={'/all-topics'}>All topics</Nav.Link>

                        {isUserAuthenticated && (
                            <>
                                <Nav.Link as={Link} to={'/create-discusion'}>Create discusion</Nav.Link>
                                <Nav.Link as={Link} to={'/account'}>Account</Nav.Link>
                            </>
                        )}



                        <NavDropdown title="Topics" id="collapsible-nav-dropdown">
                            <NavDropdown.Item as={Link} to={'/topics/games'}>Games</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to={'/topics/movies'}>Movies</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/topics/anime'}>Anime</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to={'/topics/books'}>
                                Books
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/topics/manga'}>Manga</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to={'/topics/comics'}>
                                Comics
                            </NavDropdown.Item>
                        </NavDropdown>
                        {!isUserAuthenticated && (
                            <>
                                <Nav.Link as={Link} to={'/login'}>Login</Nav.Link>
                                <Nav.Link as={Link} to={'/register'}>Register</Nav.Link>
                            </>
                        )}
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Button variant="primary" onClick={onClickHandler}>Primary</Button>{' '}
        </Navbar>
    );
}

export default NavBarComp;