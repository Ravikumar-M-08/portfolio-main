function Contact() {

    return (
        <>


            <div className="container container-contact ">
                <div className="row mt-5">
                    <div class="col-lg-5 col-md-5 col-12  d-flex align-items-center">
                        <div>
                            <h3>Let's chat.</h3>
                            <h3>Tell me about Your Projects.</h3>
                            <p><b>Let's create something together</b></p>
                            <div>
                                <div class="box">
                                    <div class="m-auto">
                                        <span class="fa-solid fa-envelope icon"></span>
                                    </div>
                                    <div>
                                        <p class="m-0"><b>Mail me at :</b><br /><a className="mailto" href="mailto:ravikumar936318@gmail.com"><b class="text">ravikumar936318@gmail.com</b></a></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7 col-md-7 col-12">
                        <div className="contain-form">
                            <form action="" method="post">
                                <div className="row  d-flex justify-content-between">
                                    <div className="col-lg-6 col-md-6 col-12 mb-4">
                                        <input type="text" name="" id="" className="inputname  p-1 w-100" placeholder="Name" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-12 mb-4">
                                        <input type="email" name="" id="" className="inputname  p-1 w-100" placeholder="Email address" required />
                                    </div>

                                </div>
                                <div className="row mb-4">
                                    <div>
                                        <textarea name="" id="" rows="7" className="w-100 inputname " placeholder="Enter the message..."></textarea>
                                    </div>
                                </div>
                                <div className="row">
                                    <div>
                                        <input type="submit" value="Send massage" className="inputname w-100" />

                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Contact;