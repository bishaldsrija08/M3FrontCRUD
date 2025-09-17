import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import About from "./About";
import UseState from "./UseState";
import UseEffect from "./UseEffect";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Hello World!</h1>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/use-state" element={<UseState />} />
          <Route path="/use-effect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}