import { BrowserRouter, Route, Routes } from "react-router-dom";
import Education from "./Education";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
import Control from "./Control";
import Footer from "./Footer";
import Experiences from "./Experiences";

function Navbar() {
    return (
        <>

            <BrowserRouter>
                <Control />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/experiences" element={<Experiences />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}
export default Navbar;