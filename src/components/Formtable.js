import React from 'react'
import { MdClose } from "react-icons/md"

const Formtable = ({ handleSubmit, handleOnchange, handleclose }) => {
  return (
    <div className='container rounded mb-4' style={{ width: "35rem", backgroundColor: "white" }}>
      <form onSubmit={handleSubmit}>

        <div className="close-btn" style={{ fontSize:'20px',paddingTop:'10px',marginLeft: '500px' }} onClick={handleclose}><MdClose /></div>

        <div className="mb-1 pt-3">
          <label htmlFor="exampleInputCode" className="form-label">
            Code
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputCode"
            name="code"
            onChange={handleOnchange}
            required
          />
        </div>

        <div className="mb-1">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            name="name"
            onChange={handleOnchange}
            required
          />
        </div>

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
            required
          />
        </div>

        <div className="mb-1">
          <label htmlFor="exampleInputdoj" className="form-label">
            Date of join
          </label>
          <input
            type="date"
            className="form-control"
            id="exampleInputdoj"
            name="doj"
            onChange={handleOnchange}
            required
          />
        </div>

        <div className="mt-2 ">
          <label htmlFor="exampleInputqualification" className="form-label">
            Qualification
          </label>
          <select
            className="form-select"
            id="exampleInputqualification"
            name="qualification"
            onChange={handleOnchange}
            required
          >
            <option value="" disabled selected>Select qualification</option>
            <option value="diploma">Diploma</option>
            <option value="graduate">Graduate</option>
            <option value="postgraduate">Postgraduate</option>
            <option value="phd">Phd</option>
          </select>
        </div>

        <div className="mb-1">
          <label htmlFor="exampleInputaadhar" className="form-label">
            Aadhaar Number
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputaadhar"
            name="aadharNo"
            onChange={handleOnchange}
            required
          />
        </div>


        <div className="mb-1">
          <label htmlFor="exampleInputusername" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputusername"
            name="username"
            onChange={handleOnchange}
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
            minLength={5}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mb-3" style={{ backgroundSize:'50px',marginTop:'10px'}}>
          Submit
        </button>

      </form>
    </div>
  )
}

export default Formtable
