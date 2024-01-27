/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */

import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { URL } from '../../Url';

const ContentDisplay = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    const contentDetail = async () => {
        try {
            const res = await axios.get(`${URL}get/${id}`);
            setBlog(res.data.data);
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        contentDetail();
    }, []);

    if (!blog) {
        return <p>Blog not found</p>;
    }

    return (
        <Card style={{ margin: '20px 20px' }}>
            <Card.Img variant="top" src={blog.image} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.content}</Card.Text>
                <Link to="/blogs">
                    <Button variant="primary">Back</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default ContentDisplay;
