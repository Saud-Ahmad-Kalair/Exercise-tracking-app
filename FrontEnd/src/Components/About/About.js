import React from 'react'

function About() {
    return (
        <div className='container my-3'>
            <h2 className='text-center my-5'>About Us</h2>
            <div className="row row-cols-1 row-cols-md-3 my-3" >
                <div className="col">
                    <div className='row'>
                        <div className="card">
                            <img src="./running1.jpg" alt="swim image" />

                        </div>
                    </div>
                    <div className='row'>
                        <div className="card mt-3">
                            <img src="./swim.jpg" alt="swim image" />

                        </div>
                    </div>

                </div>
                <div className="col">
                    <div className="card">
                        <img src="./running-m.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className='row'>
                        <div className="card">
                            <img src="./cycle.jpg" className="card-img-top" alt="..." />

                        </div>
                    </div>
                    <div className='row'>
                        <div className="card mt-3">
                            <img src="./cycle.jpg" className="card-img-top" alt="..." />

                        </div>
                    </div>

                </div>

            </div>
            {/* <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card">
                        <img src="./bg.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="./bg.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="./bg.jpg" className="card-img-top" alt="..." />

                    </div>
                </div>

            </div> */}

        </div>
    )
}

export default About
