import React, { useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { Global } from '../App'

const Protected = (props) => {
    let navigate = useNavigate()
    const { islogin } = useContext(Global)
    let { Component } = props
    useEffect(() => {
        if (!islogin) {
            navigate('/login')
        }



    },)


    return (
        <div>
            <Component />
        </div>
    )
}

export default Protected
