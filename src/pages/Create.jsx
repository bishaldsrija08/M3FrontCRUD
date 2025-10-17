import { useState } from "react"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Create = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: "",
        subTitle: "",
        description: "",
        image: ""
    })
    const handleChange = (e) => {
        // const name = e.target.name
        // const value = e.target.value
        const { name, value, files } = e.target
        setFormData({
            ...formData,
            [name]: name === "image" ? files[0] : value
        })
        console.log(formData)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axios.post("https://m3firstproject.onrender.com/blog", formData, {
            headers:{
                "Content-Type": "multipart/form-data"
            }
        })
        if (response.status === 200) {
            alert("Blog created successfully")
            navigate("/")
        } else {
            alert("Something went wrong")
        }
    }
    return (
        <>
            <Navbar />
            <div className="bg-white border-4 rounded-lg shadow relative m-10">
                <div className="flex items-start justify-between p-5 border-b rounded-t">
                    <h3 className="text-xl font-semibold">
                        Create Blog
                    </h3>
                </div>
                <div className="p-6 space-y-6">
                    <form>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Blog Title</label>
                                <input onChange={handleChange} type="text" name="title" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Blog Subtitle</label>
                                <input onChange={handleChange} type="text" name="subTitle" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Feature Image</label>
                                <input onChange={handleChange} type="file" name="image" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required />
                            </div>
                            <div className="col-span-full">
                                <label htmlFor="product-details" className="text-sm font-medium text-gray-900 block mb-2">Description</label>
                                <textarea onChange={handleChange} name="description" id="product-details" rows={6} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-4" placeholder="Details" defaultValue={""} />
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

export default Create