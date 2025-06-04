
import data from "./data.json";

function Projects() {

    return (
        <>
            <div className="container mt-4">
                {
                    data.projects.map(info => {
                        return (
                            <div className="row projects mt-4" key={info.project_id}>
                                <div className="col-lg-2 col-md-7 col-12 project_tech">
                                    <span>{info.project}</span>
                                </div>
                                <div className="col-lg-5 col-md-6 col-12 project_title">
                                    <h2>{info.project_title}</h2>
                                    <p>{info.project_description}</p>
                                    <span className="project_tool">{info.project_tool}</span>
                                </div>
                                <div className="col-lg-5 col-md-6 col-12 project_img">
                                    <img src={info.project_img} alt={info.project_title} />
                                    <div className="project_link">
                                        <div>
                                            <a href={info.project_code}>
                                                <span className="fa-brands fa-github"></span>
                                            </a>
                                        </div>
                                        <div>
                                            <a href={info.project_output}>
                                                <span className="fa-solid fa-link"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </>
    )
}
export default Projects;