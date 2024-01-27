/* eslint-disable react/prop-types */

import axios from 'axios';
import { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { URL } from '../../Url.js';

const BlogCard = ({ blog }) => {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    }

    const handleDelete = async (id) => {
        const shouldDelete = window.confirm("Are you sure you want to delete this blog?");
        
        if (shouldDelete) {
            try {
                await axios.delete(`${URL}delete/${id}`);
                window.location.reload();
            } catch (err) {
                console.log(err);
            }
        }
    }

    const truncatedContent = `${blog.content.slice(0, 150)}...`;

    return (
        <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Img variant="top" src={blog.image} style={{ marginTop: 10 }} />
            <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>
                    {truncatedContent}
                    <Link to={`/content/${blog.id}`} style={{ color: "#007BFF", textDecoration: "underline", cursor: "pointer" }}>
                        Learn More
                    </Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted custom-footer" style={{backgroundColor:"white"}}>
                <p className="mt-2" style={{ fontSize: '0.8em' }}>
                    Posted on {new Date(blog.date).toLocaleString()}
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <Button variant="link" onClick={handleLike}>
                        <i className={`fas fa-thumbs-up ${liked ? 'text-success' : ''}`}></i>
                    </Button>
                    <Button variant="link">
                        <i className="fas fa-comment"></i>
                    </Button>
                    <Button variant="link">
                        <i className="fas fa-share"></i>
                    </Button>
                    <Link to={`/edit/${blog.id}`}>
                        <Button variant="link">
                            <i className="fas fa-edit"></i>
                        </Button>
                    </Link>
                    <Button variant="link" onClick={() => handleDelete(blog.id)}>
                        <i className="fas fa-trash" style={{ color: "#ed0707", cursor: 'pointer' }}></i>
                    </Button>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default BlogCard;
