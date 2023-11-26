import React from 'react'
import { MdClose } from "react-icons/md"

const Updatetable = ({handleSubmit,handleOnchange,handleclose,rest}) => {
    return (
        <div className='container rounded mb-4' style={{ width: "35rem", backgroundColor: "white" }}>
                  <form onSubmit={handleSubmit}>
                    <div className="close-btn" style={{ fontSize:'20px',paddingTop:'10px',marginLeft: '500px' }} onClick={handleclose}><MdClose /></div>
    
                    <div className="mb-1">
                      <label htmlFor="exampleInputEmail" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail"
                        name="email"
                        aria-describedby="emailHelp"
                        onChange={handleOnchange}
                        value={rest.email}
                        required
                      />
                    </div>
    
                    <div className="mb-1">
                      <label htmlFor="exampleInputMobile" className="form-label">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="mobile"
                        id="exampleInputMobile"
                        onChange={handleOnchange}
                        value={rest.mobile}
                        pattern="[0-9]{10}"
                        required
                      />
                    </div>
    
                    <div className="mb-1">
                      <label htmlFor="exampleInputdob" className="form-label">
                        Date of birth
                      </label>
                      <input
                        type="date"
                        className="form-control"
                        id="exampleInputdob"
                        name="dob"
                        onChange={handleOnchange}
                        value={rest.dob}
                        required
                      />
                    </div>    
    
                    <div className="mb-1">
                      <label htmlFor="exampleInputPassword1" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        name="password"
                        onChange={handleOnchange}
                        value={rest.password}
                        minLength={5}
                        required
                      />
                    </div>
                    <button type="submit" className="btn btn-primary mb-3">
                      Update
                    </button>
                  </form>
                </div>
      )
}

export default Updatetable
