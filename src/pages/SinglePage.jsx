import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const SinglePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    // fetch single blog by id
    const fetchSingleBlog = async () => {
        const response = await axios.get("http://localhost:3000/blog/" + id)
        setBlog(response.data.data)
    }
    useEffect(() => {
        fetchSingleBlog()
    }, [])

    const deleteSingleBlog = async () => {
        const response = await axios.delete("http://localhost:3000/blog/" + id)
        if (response.status === 200) {
            alert("Blog deleted successfully")
            navigate("/")
        }
    }
    return (
        <>
            <Navbar />
            <div className="max-w-3xl mx-auto px-6 py-12">
                {/* Blog Header */}
                <header className="mb-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                        {blog.title}
                    </h1>
                    <h2 className="text-lg md:text-xl text-gray-500 italic mb-4">
                        {blog.subtitle}
                    </h2>
                    {/* Author + Date */}
                    <div className="flex justify-center items-center space-x-3 text-sm text-gray-600">
                        <img src={`http://localhost:3000/${blog.image}`} alt="Author" className="rounded-full w-10 h-10 border" />
                        <span>By <span className="font-semibold">Bishal Rijal</span></span>
                        <span>•</span>
                        <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                    </div>
                </header>
                {/* Featured Image */}
                <img src={`http://localhost:3000/${blog.image}`} alt="Blog Image" className="rounded-2xl shadow-lg mb-10 w-full object-cover" />
                {/* Blog Content */}
                <article className="prose prose-lg max-w-none">
                    <p>{blog.description}</p>
                </article>
                <Link to={`/edit/${blog._id}`} class="btn btn-blue mt-6"> Edit Post</Link>
                <button class="btn btn-red ml-4" onClick={deleteSingleBlog}> Delete Post</button>
                {/* Footer */}
                <footer className="mt-12 pt-6 border-t border-gray-300 text-center text-sm text-gray-500">
                    <p>© 2025 Bishal Rijal. All rights reserved.</p>
                </footer>
            </div>
        </>
    )
}

export default SinglePage