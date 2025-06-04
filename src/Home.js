
function Home() {
    return (
        <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 aboutme">
                            <div className="myname">
                                <div>
                                    <span className="first-name">I'm </span>
                                    <span className="second-name"> RAVIKUMAR</span>
                                </div>
                                <h3>Java Full Stack Developer</h3>
                                <p>
                                    Hello! I'm Ravikumar Manikkam, a passionate Java Full Stack Developer just starting my
                                    career journey in web development. With a strong foundation in Java and a growing knowledge of
                                    front-end and back-end technologies, I’m eager to learn, grow, and contribute to building
                                    dynamic, user-friendly web applications.
                                </p>
                                <div className="icons">
                                    <ul>
                                        <li>
                                            <a href="https://github.com/Ravikumar-M-08"><span className="fa-brands fa-github"></span></a>
                                        </li>
                                        {/* <li>
                                            <a href=""><span className="fa-brands fa-instagram"></span></a>
                                        </li> */}
                                        <li>
                                            <a href="https://www.linkedin.com/in/ravikumar-m-66853a293"><span className="fa-brands fa-linkedin-in"></span></a>
                                        </li>
                                        {/* <li>
                                            <a href=""><span className="fa-brands fa-facebook"></span></a>
                                        </li> */}
                                    </ul>
                                </div>
                                <div className="resume">
                                    <a href="./Ravikumar Resume.pdf" className="btn btn-resume" download="ravikumar_resume">Download Resume</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 profile">
                            <div className="box-1">
                                <div className="innerbox-1">
                                    <img src="./rk.jpeg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    )
}
export default Home;