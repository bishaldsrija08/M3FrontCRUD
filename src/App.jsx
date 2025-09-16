import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello World!</h1>} />
          <Route path="/about" element={<h1>About Us</h1>} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}