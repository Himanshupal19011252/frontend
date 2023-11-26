import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios"
import Formtable from './components/Formtable';
import Updatetable from './components/Updatetable';
import aadhaarValidator from 'aadhaar-validator';

axios.defaults.baseURL = "http://localhost:3000/"
function App() {

  const [addSection, setAddSection] = useState(false)
  const [editSection, setEditSection] = useState(false)
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    email: "",
    mobile: "",
    dob: "",
    doj: "",
    qualification: "",
    aadharNo: "",
    username: "",
    password: ""
  })

  const [formDataEdit, setFormDataEdit] = useState({
    email: "",
    mobile: "",
    dob: "",
    password: "",
    _id: ""
  })

  const [dataList, setDataList] = useState([])

  const handleOnchange = (e) => {
    const { value, name } = e.target
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log({ formData })
    const { aadharNo } = formData || {}
    console.log("string aadharvalidator", aadhaarValidator.isValidNumber(aadharNo))
    if (!aadhaarValidator.isValidNumber(aadharNo)) {
      console.log("error")
      alert("Aadhaar number must be valid")
      return
    }
    const data = await axios.post("/create", formData)
    console.log(data)
    if (data.data.success) {
      setAddSection(false)
      alert(data.data.message)
      getFetchData()

    }
  }

  const getFetchData = async () => {
    const data = await axios.get("/")
    console.log(data)
    if (data.data.success) {
      setDataList(data.data.data)
    }
  }
  useEffect(() => {
    getFetchData()
  }, [])
  console.log(dataList)

  const handleDelete = async (id) => {
    const userConfirmed = window.confirm("Are you sure you want to delete this item?");

    if (userConfirmed) {
      // User clicked "OK" in the confirmation dialog
      const data = await axios.delete("/delete/" + id);
      if (data.data.success) {
        getFetchData();
        alert(data.data.message);
      }
    } 
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const data = await axios.put("/update", formDataEdit)
    if (data.data.success) {
      getFetchData()
      alert(data.data.message)
      setEditSection(false)
    }
  }

  const handleEditOnchange = async (e) => {
    const { value, name } = e.target
    setFormDataEdit((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleEdit = (el) => {
    setFormDataEdit(el)
    setEditSection(true)
  }


  return (
    <>
      <div>
        <button className='btn btn-primary btn-lg px-4 my-5 mx-5' onClick={() => setAddSection(true)}>Add</button>
        {
          addSection && (
            <Formtable
              handleSubmit={handleSubmit}
              handleOnchange={handleOnchange}
              handleclose={() => setAddSection(false)}
            />
          )
        }

        {
          editSection && (
            <Updatetable
              handleSubmit={handleUpdate}
              handleOnchange={handleEditOnchange}
              handleclose={() => setEditSection(false)}
              rest={formDataEdit}
            />
          )
        }

        <div className="app-container">
          <table className="rounded table table-light table-hover">
            <thead>
              <tr style={{ backgroundColor: "#cff4fc" }}>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Dob</th>
                <th scope="col">Doj</th>
                <th scope="col">Qualification</th>
                <th scope="col">Aadhaar Number</th>
                <th scope="col">Username</th>
                <th scope="col">Password</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {dataList[0] ? (
                dataList.map((el) => {
                  return (
                    <tr key={el._id}>
                      <td>{el.code.toUpperCase()}</td>
                      <td>{el.name}</td>
                      <td>{el.email}</td>
                      <td>{el.mobile}</td>
                      <td>{new Date(el.dob).toLocaleDateString('en-US')}</td>
                      <td>{new Date(el.doj).toLocaleDateString('en-US')}</td>
                      <td>{el.qualification}</td>
                      <td>{el.aadharNo}</td>
                      <td>{el.username}</td>
                      <td>{el.password}</td>
                      <td>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button type="button" className="btn btn-success" onClick={() => handleEdit(el)}>Edit</button>
                          <button type="button" className="btn btn-danger" onClick={() => handleDelete(el._id)}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  )
                })
                )
                : 
                (<tr>
                  <td colSpan="11" className="text-center">No Data</td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
