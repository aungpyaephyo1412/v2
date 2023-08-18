import Navbar from "./layouts/Navbar/Navbar.jsx";
import Home from "./layouts/Home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AllProjects from "./layouts/Projects/AllProjects.jsx";
import About from "./layouts/About/About.jsx";
import Blogs from "./layouts/Blogs/Blogs.jsx";
import Contact from "./layouts/Contact/Contact.jsx";
import Dark from "./layouts/Dark/Dark.jsx";




const App = () => {
    return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/projects' element={<AllProjects/>}/>
                        <Route path='/blogs' element={<Blogs/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                    </Routes>
                    <Navbar/>
                    <Dark/>
                </BrowserRouter>
            </>
    )
}
export default App