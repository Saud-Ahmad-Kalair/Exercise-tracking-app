import React from 'react'
import './Footer.css'

function Footer() {
    return (
        // <div className="container-fluid bg-dark text-white footer fixed-bottom">
        <footer className="container-fluid text-white   " id='footer' >
            <div >

                <p className='lead' >© 2022 Company, Inc. All rights reserved.</p>
            </div>
            {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
                <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
            </ul> */}
        </footer>
        // </div>

    )
}

export default Footer
