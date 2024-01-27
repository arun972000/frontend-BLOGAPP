
import { Container, Row, Col } from 'react-bootstrap';

const BlogFooter = () => {
    return (
        <footer className="bg-dark text-light mt-5">
            <Container>
                <Row className="py-4">
                    <Col>
                        <h5>My Blog</h5>
                        <p>&copy; 2024. All rights reserved.</p>
                    </Col>
                    <Col>
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li>Home</li>
                            <li>Create Blog</li>
                        
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default BlogFooter;
