import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../components/Navbar"

const Edit = () => {
    const navigate = useNavigate()
    const { id } = useParams() // get the id from the url
    const [data, setData] = useState({
        title: "",
        subTitle: "",
        description: "",
        image: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault()
       const response = await axios.patch(`https://m3firstproject.onrender.com/blog/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        if( response.status === 200 ){
            alert("Blog updated successfully")
            navigate(`/single/${id}`)
        }
    }
    const handleChange = (e) => {
        const { name, value, files } = e.target
        setData({
            ...data,
            [name]: name === "image" ? files[0] : value
        })
    }

    const fetchBlog = async () => {
        // fetch the blog data from the server and set it to the state
        const response = await axios.get(`https://m3firstproject.onrender.com/blog/${id}`)
        setData(response.data.data)
    }

    useEffect(() => {
        // fetch the blog data from the server and set it to the state
        fetchBlog()
    }, [])
    return (
        <>
            <Navbar />
            <div className="bg-white border-4 rounded-lg shadow relative m-10">
                <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold">
                        Edit Blog
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    <form>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Blog Title</label>
                                <input value={data.title} onChange={handleChange} type="text" name="title" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Blog Subtitle</label>
                                <input value={data.subTitle} onChange={handleChange} type="text" name="subTitle" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Feature Image</label>
                                <input onChange={handleChange} type="file" name="image" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                                <textarea value={data.description} onChange={handleChange} name="description" id="product-details" rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details" defaultValue={""} />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="p-6 border-t border-gray-200 rounded-b">
                    <button onClick={handleSubmit} className="text-white bg-cyan-600 hover:bg-cyan-700 focus:ring-4 focus:ring-cyan-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="submit">Submit</button>
                </div>
            </div>
        </>
    )
}

export default Edit