import { Link, Outlet } from "react-router-dom";
function Control() {
    return (
        <>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">
                    <Link to="/" className="nav ">Ravikumar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                        <label for="menu-2" class="menu-2">
                            <input type="checkbox" name="menu-2" id="menu-2"/>
                                <span></span>
                                <span></span>
                                <span></span>
                        </label>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                        <div className="navbar-nav w-100">
                            <ul className="d-lg-flex d-md-flex justify-content-evenly w-100 m-0 p-0">
                                <li><Link to="/" className="nav ">Home</Link></li>
                                <li><Link to="/education" className="nav ">Education</Link></li>
                                <li><Link to="/skills" className="nav ">Skills</Link></li>
                                <li><Link to="/experiences" className="nav ">Experiences</Link></li>
                                <li><Link to="/projects" className="nav ">Projects</Link></li>
                                <li><Link to="/contact" className="nav ">Contact</Link></li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav >
            <Outlet />
        </>
    )
}
export default Control;