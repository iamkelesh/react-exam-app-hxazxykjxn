import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBarComp() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#all-topics">All topics</Nav.Link>
                        <Nav.Link href="#create-discussion">Create discusion</Nav.Link>
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#register">Register</Nav.Link>
                        <Nav.Link href="#account">Account</Nav.Link>
                        <NavDropdown title="Theme" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#topics/games">Games</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#topics/movies">Movies</NavDropdown.Item>
                            <NavDropdown.Item href="#topics/anime">Anime</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#topics/books">
                                Books
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#topics/manga">Manga</NavDropdown.Item>
                            <NavDropdown.Item href="#topics/comics">
                                Comics
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarComp;