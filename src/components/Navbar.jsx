import { Navbar, Nav, Container } from 'react-bootstrap';

import "./navbar.css"

const BlogNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
            <Container>

                <Navbar.Brand>My Blog</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link>Create Blog</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BlogNavbar;