import { useEffect } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"

const Home = () => {
    const fetchAllBlogs = async () => {
        const response = await axios.get("http://localhost:3000//blogs")
        console.log(response.data)
    }
    useEffect(() => {
        // fetch data from api
        fetchAllBlogs()
    }, [])
    return (
        <>
            <Navbar />
            <div className="flex flex-wrap justify-center m-3">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default Home
