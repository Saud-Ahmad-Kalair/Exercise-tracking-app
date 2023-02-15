import React from 'react'
import About from '../About/About'
import Article from '../Article/Article'
import './home.css'

function Home() {
    return (
        <>
            <section className='hero-img hero d-flex flex-column align-items-center justify-content-center'>
                <div className='hero-text'> <h3 className='label text-white'>WelCome To Fitness Mania </h3>
                    <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolorum accusamus fugiat sequi asperiores officiis vero quae
                        atque ex maxime! Ratione autem veniam dolores itaque magni saepe, aspernatur voluptatibus delectus!</p>

                    <button className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">GetStarted</button></div>

            </section>
            <About />
            <Article />
        </>
    )
}

export default Home
