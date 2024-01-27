/* eslint-disable react/prop-types */
import { Container, Row, Spinner } from 'react-bootstrap';
import BlogCard from './blogCard';
import BlogForm from './blogForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../Url.js';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllBlogs = async () => {
    try {
      const res = await axios.get(`${URL}`);
      setBlogs(res.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <Container>
      <BlogForm blogdata={getAllBlogs}/>
      <Row className="justify-content-center">
        {loading ? (

          <Spinner as="output" className="spinner-border">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))
        )}
      </Row>
    </Container>
  );
};

export default BlogList;
