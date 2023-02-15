import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

function Article() {
    return (
        <>
            <h3 className='text-center my-5'>Articles</h3>

            <Section1 />
            <Section2 />
            {/* <Section3 /> */}


            {/* <div className='container col-md-12'>
                <div className='col-md-6'>
                    <h3>hello</h3>
                    <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolorem explicabo molestias asperiores commodi dolorum reiciendis nesciunt deserunt voluptatem incidunt, quos nam! Reiciendis aliquam voluptas pariatur laudantium quibusdam. Fugiat, quisquam!</p>
                </div>
                <div className='col-md-6'>
                    <img src="./bg" alt="" />
                </div>
            </div> */}
        </>
    )
}

export default Article
