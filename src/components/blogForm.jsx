/* eslint-disable react/prop-types */
import axios from 'axios';
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import { URL } from '../../Url.js';

const BlogForm = ({blogdata}) => {
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const handleAddBlog = () => {
        const newBlog = {
            title,
            content,
            image,
        };
        
        const postData = async () => {
            try {
                await axios.post(`${URL}create`, newBlog)
            } catch (err) {
                console.log(err)
            }
        }

        postData();
        blogdata();
        setTitle('');
        setContent('');
        setImage('');
        handleCloseModal();
    };

    return (
        <>
            <Button variant="primary" onClick={handleShowModal}>
                Create Blog
            </Button>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Create New Blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formTitle">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formContent">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter content"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group controlId="formImage">
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Image URL"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleAddBlog}>
                        Create Blog
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default BlogForm;
