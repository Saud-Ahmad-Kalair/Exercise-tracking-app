import React, { useContext } from 'react'
import { Global } from '../../App'
import './Activity_Form.css'
function Activity() {
    const { inputHandle, handleInput, submitForm, cancelActivity } = useContext(Global)
    return (

        <div id='activity-form'>
            <form className='card px-5 py-3 shadow p-4  bg-white rounded'>
                <div className='card-body'>
                    <h4 className='text-center'>Add New Activity</h4>
                </div>
                <div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Enter Name :</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" id="inputPassword4"
                                name='name'
                                onChange={handleInput}
                                value={inputHandle.name}
                                placeholder="Name" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Enter Description :</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" name='description'
                                onChange={handleInput}
                                value={inputHandle.description} id="inputPassword4" placeholder="Description" />
                        </div>

                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Activity Type :</label>
                        <div className="col-sm-8">
                            <select className="form-control" name='type'
                                onChange={handleInput}
                                value={inputHandle.type} id="exampleFormControlSelect1">
                                <option selected >Choose Type</option>
                                <option>Run</option>
                                <option>Bicycle Ride</option>
                                <option>Walk</option>
                                <option>Swim</option>
                                <option>Hike</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Set Duration :</label>
                        <div className="col-sm-8">
                            <input type="text" className="form-control" name='duration'
                                onChange={handleInput}
                                value={inputHandle.duration} id="inputPassword4" placeholder="Set Duration" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-4 col-form-label">Select Date :</label>
                        <div className="col-sm-8">
                            <input type="date" className="form-control" name='date'
                                onChange={handleInput}
                                value={inputHandle.date} id="inputPassword4" placeholder="Select Date" />
                        </div>
                    </div>
                    {/* <div className="form-group">
                        <label for="exampleFormControlTextarea1">Descripition</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
                    </div> */}
                    <a onClick={() => submitForm(inputHandle)} className="btn btn-outline-info btn-lg px-4 me-sm-4 fw-bold mr-3">Add Activity</a>
                    <a onClick={() => cancelActivity()} className="btn btn-info btn-lg px-4 me-sm-4 fw-bold">Cancel</a>

                </div>
            </form>
        </div>
    )
}

export default Activity
