import React from 'react'
import './Section1.css'

function Section1() {
    return (
        <div>
            <div className=" col-xxl-8 container-fluid  border-bottom ">
                <div className="row flex-lg-row-reverse align-items-center g-5 ">
                    <div className="col-10 col-sm-8 col-lg-6" >
                        <img src="./bg.jpg" className="d-block mx-lg-auto img-fluid " id='border-img' alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h1 className="display-5 fw-bold lh-1 mb-3">3 Things to Do to Make Your Treadmill Walking Workout Less of a Slog</h1>
                        <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Read More</button>
                            {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section1
