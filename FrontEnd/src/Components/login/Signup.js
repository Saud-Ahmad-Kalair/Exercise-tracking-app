import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const empty = {
        username: '',
        email: '',
        password: ''
    }
    const [signup, setSignUp] = useState([])
    let navigate = useNavigate()
    const register = async (e) => {

        e.preventDefault()
        let record = await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(signup)
        })
        // record = record.json()

        if (record.status === 401) {
            alert('User already register')
        }
        else if (record.status !== 401) {
            // alert('hello')
            navigate('/login')
        }
        else {
            alert('complete the signup process')
        }

        setSignUp(empty);

        console.log(signup)

    }



    const change = (e) => {
        let { name, value } = e.target
        setSignUp({ ...signup, [name]: value })
        // console.log(signup)
    }


    return (
        <form id='main-body' onSubmit={register}>
            <div id='Card'>

                <div className="card p-3 shadow p-3  bg-white rounded " id='card-body'  >
                    <div className="card-body d-flex flex-column ">
                        <h5 className="card-title text-center mb-3">Become Part of Our Organization</h5>
                        <div >
                            <input required type="text" className="form-control  mb-3 "
                                placeholder="Enter Name "
                                name='username'
                                value={signup.username}
                                onChange={change}
                            />
                            <input required type="email" className="form-control  m-auto"
                                placeholder="Enter email"
                                name='email'
                                value={signup.email}
                                onChange={change} />
                            <input required type="password" className="form-control mt-3  "
                                placeholder="Password"
                                name='password'
                                onChange={change}
                                value={signup.password} />

                        </div>
                        

                        <button type='submit' className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold mt-3">Register</button>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default Signup
