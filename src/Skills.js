
function Skills() {
    return (

        <>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-lg-6 col-md-6 col-12">
                        <h3 className="page_title">Skills</h3>
                        <p>
                            A Full Stack Developer Intern is proficient in both front-end and back-end development, enabling them to design, build,
                            and maintain complete web applications.
                        </p>
                    </div>
                </div>
                <div className="skill_container mt-4">
                    <div className="tools">
                        <div className="tool" style={{ "--i": 1 }}><img src="java.svg" alt=""/></div>
                        <div className="tool" style={{ "--i": 2 }}><img src="mysql.svg" alt="" /></div>
                        <p className="name">Programming Languages</p>
                    </div>
                    <div className="tools">
                        <div className="tool" style={{ "--i": 1 }}><img src="html.svg" alt="" /></div>
                        <div className="tool" style={{ "--i": 2 }}><img src="css.svg" alt="" /></div>
                        <div className="tool" style={{ "--i": 3 }}><img src="javascript.svg" alt="" /></div>
                        <div className="tool" style={{ "--i": 4 }}><img src="json.svg" alt="" /></div>
                        <p className="name">Scripting Languages</p>
                    </div>
                    <div className="tools">
                        <div className="tool" style={{ "--i": 1 }}><img src="bootstrap.svg" alt="" /></div>
                        <div className="tool" style={{ "--i": 2 }}><img src="react.svg" alt="" /></div>
                        <div className="tool" style={{ "--i": 3 }}><img src="springboot.svg" alt="" /></div>
                        <p className="name">Frame Works</p>
                    </div>
                    <div className="tools">
                        <div className="tool" style={{ "--i": 1 }}><img src="vs-code.svg" alt="" /></div>
                        <div className="tool" style={{ "--i": 2 }}><img src="github.svg" alt="" /></div>
                        <p className="name">Softwares</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Skills;