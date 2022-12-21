import { Routes, Route } from "react-router-dom"
import { HomePage } from "./pages/HomePage"


function App() {


  return (
    <div className="min-h-screen flex bg-base-100 items-stretch">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='*' element={<h1>404: Not Found</h1>} />
      </Routes>

    </div >
  )
}

export default App
