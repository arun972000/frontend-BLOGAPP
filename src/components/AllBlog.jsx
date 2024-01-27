/* eslint-disable react/prop-types */
import { Container, Row } from 'react-bootstrap';
import BlogCard from './blogCard';
import BlogForm from './blogForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../../Url.js';


const BlogList = () => {
    const [blogs,setBlogs]=useState([]);

    const Allblogs=async()=>{
        try{
            const res=await axios.get(`${URL}`)
            setBlogs(res.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        Allblogs();
    },[])
  return (
    <Container>
        <BlogForm/>
      <Row className="justify-content-center">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Row>
    </Container>
  );
};

export default BlogList;