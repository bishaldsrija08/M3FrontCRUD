import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SinglePage from "./pages/SinglePage"
import Create from "./pages/Create"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/single/:id" element={<SinglePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
