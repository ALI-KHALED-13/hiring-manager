import { BrowserRouter, Routes, Route} from "react-router-dom"
import NavMenu from "./components/NavMenu"
import Home from "./pages/Home"


function App() {

  return (
    <BrowserRouter basename="/hiring-manager" >
      <>
        <NavMenu />
        <Routes>
          <Route path="*" element={<Home />}/>
        </Routes>
      </>  
    </BrowserRouter>
  )
}

export default App
