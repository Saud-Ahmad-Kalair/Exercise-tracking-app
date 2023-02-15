import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Global } from '../../App'
import Activity_Form from '../Activity Form/Activity_Form'
import moment from "moment";

function Activities() {
    const { data, newactivity, isinput, deleteActivity, updateActiviy } = useContext(Global)

    return (
        <div id='activites_page'>

            <div className='container text-center my-5'>
                <h2 className='text-center my-3'>My Activities</h2>
                {
                    (isinput === false) ?

                        <Link to="/myactivity" onClick={() => newactivity()} className="btn btn-outline-info btn-lg px-4 me-sm-4 fw-bold">Add New Activity</Link>
                        : <Activity_Form />
                }
            </div>

            <div className=' container m-auto row'>

                {data.map(el => {
                    let isoDate = el.date;
                    let newDate = moment.utc(isoDate).format("YYYY-MM-DD");
                    return (
                        (

                            <div className='col-md-4 mb-4 '>
                                <div className="card shadow p-4  bg-white rounded" >
                                    <div className="card-body d-flex flex-column">
                                        <h3 className="text-center">{el.type}</h3>
                                        {/* <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6> */}
                                        <p className="card-text lead">{el.description}</p>
                                        <p className='lead' >Duration : {el.duration}</p>
                                        <h5>{newDate}</h5>
                                        <div className='d-flex justify-content-between'>
                                            <a onClick={() => { deleteActivity(el._id) }} className="btn btn-danger">Delete</a>


                                        </div>
                                    </div>
                                </div>
                            </div>))
                })}


            </div>
        </div>
    )
}

export default Activities
