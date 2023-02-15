import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Global } from '../../App'
import './login.css'

function Login() {

    const { islogin, loginUser, loginHandle } = useContext(Global)
    let navigate = useNavigate()
    useEffect(() => {
        if (islogin) {
            navigate('/myactivity')
        }
    },)




    return (
        <form


            id='main-body' method='POST' onSubmit={(e) => loginUser(e)

            }>
            <div id='Card'>
                <div className="card p-3 shadow p-3  bg-white rounded " id='card-body'  >
                    <div className="card-body d-flex flex-column ">
                        <h5 className="card-title text-center mb-3">Member Login</h5>
                        <div >

                            <input type="email" className="form-control  m-auto"
                                placeholder="Enter email"
                                name='email'
                                value={islogin.email}
                                onChange={loginHandle} />
                            <input type="password"
                                className="form-control mt-3  "
                                placeholder="Password"
                                name='password'
                                value={islogin.password}
                                onChange={loginHandle} />

                        </div>
                        <div className="form-group form-check mt-3">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>

                        <button type='submit' className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Login</button>
                    </div>
                </div>

            </div>
        </form >
    )
}

export default Login

