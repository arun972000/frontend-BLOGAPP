/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { URL } from '../../Url.js';

const EditBlog = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState('');

    useEffect(() => {
        const fetchBlogData = async () => {
            try {
                const response = await axios.get(`${URL}get/${id}`);
                const { title, content, image } = response.data.data;
                setTitle(title);
                setContent(content);
                setImage(image);
            } catch (error) {
                console.error(error);
                // Handle error
            }
        };

        fetchBlogData();
    }, [id]);

    const handleEditBlog = async () => {
        const editedBlog = {
            title,
            content,
            image,
        };

        try {
            await axios.put(`${URL}update/${id}`, editedBlog);
            navigate("/blogs");
        } catch (error) {
            console.error(error);
            // Handle error
        }
    };

    return (
        <div style={{ height: "100vh", margin: "20px 20px" }}>
            <h2>Edit Blog</h2>
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
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter image URL"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" className="mt-3" onClick={handleEditBlog}>
                    Save Changes
                </Button>

                <Link to="/blogs" className="btn btn-secondary mt-3 ml-2" style={{marginLeft:20}}>
                    Back
                </Link>
            </Form>
        </div>
    );
};

export default EditBlog;
