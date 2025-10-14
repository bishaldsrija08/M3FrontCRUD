import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"
import { Link } from "react-router-dom"

const Home = () => {
    const [blog, setBlog] = useState([])
    const fetchAllBlogs = async () => {
        const response = await axios.get("http://localhost:3000/blogs")
        const allBlogs = response.data.data
        setBlog(allBlogs)
    }
    console.log(blog)
    useEffect(() => {
        // fetch data from api
        fetchAllBlogs()
    }, [])
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center m-3">
                {blog.map((blog, index) => <Card key={index} blog={blog} />)}
            </div>
        </>
    )
}

export default Home