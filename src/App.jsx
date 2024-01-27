import './App.css'
import BlogList from './components/AllBlog'
import WelcomeMessage from './components/Welcome'
import { Routes, Route } from "react-router-dom"
import EditBlog from './components/editBlog'
import ContentDisplay from './components/content'
import BlogNavbar from './components/Navbar'
import BlogFooter from './components/Footer'
function App() {


  return (
    <>
      <BlogNavbar />
      <Routes>
        <Route path="/" element={<WelcomeMessage />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path={"/content/:id"} element={<ContentDisplay />} />
      </Routes>
      <BlogFooter />
    </>



  )
}

export default App
