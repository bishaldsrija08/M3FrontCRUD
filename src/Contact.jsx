import { Link } from "react-router-dom"
import "./home.css"
import Button from "./Button"
const Contact = () => {
  const data = {
    name: "John",
    age: 30
  }
  return (
    <>
      <h1 className="contact-title">Contact Us</h1>
      <Link to="/">Go to Home</Link>
      <br />
      <Button content={data} />
    </>
  )
}

export default Contact