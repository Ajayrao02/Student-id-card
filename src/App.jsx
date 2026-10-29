import React, { useState } from 'react'
import './App.css'
const App = () => {
  const [students, setStudetns] = useState({
    name: "",
    rollNo: "",
    branch: "",
    phone: "",
    dob: ""
  })
  const handleChange = (e) => {
    setStudetns({
      ...students,
      [e.target.name]: e.target.value
    })
  }
  const handleImage = (e) => {
    const file = e.target.files[0]
    if (file) {
      setStudetns({
        ...students,
        photo: URL.createObjectURL(file)
      })
    }
  }
  const downloadbtn=()=>{
    window.print()
  }
  return (
    <>
      <div className="container">
        {/* form start */}
        <div className="form-box">
          <h1>Student ID Card</h1>
          <input
            type="text"
            name="name"
            placeholder='Student Name'
            onChange={handleChange}
          />
          <input
            type="text"
            name="rollNo"
            placeholder='Student Roll-No'
            onChange={handleChange}
          />
          <input
            type="text"
            name="branch"
            placeholder='Branch Name'
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder='Phone Number'
            onChange={handleChange}
          />
          <input
            type="text"
            name="dob"
            placeholder='D-O-B'
            onChange={handleChange}
          />
          <input
            type="file"
            name="image"
            onChange={handleImage}
          />
          <button className='dwn-btn' onClick={downloadbtn}>Download Your ID Card</button>
        </div>
        {/* form end  */}
        <div className="id-card" id="id-card">
          <div className="college">
            <img src="lulogo.jpg" alt="college logo" id='clg'/>
            <p>
              Second Campus University of Lucknow, <br />
              Jankipuram 60-feet Road
            </p>
            {/* photo  */}
            {
              students.photo ? (
                <img
                  className='student-photo'
                  src={students.photo}
                  alt='Student Photo'
                />
              ) : (
                <div className='student-photo photo-palceholder'>
                  PHOTO
                </div>
              )
            }
            {/* student details  */}
            <h3 className='std-name'>{students.name || "Student Name"}</h3>
            <div className="std-details">
              <p>
                <b>Roll-No: </b>
                <span>{students.rollNo || "-------"}</span>
              </p>
              <p>
                <b>Branch name: </b>
                <span>{students.branch || "-------"}</span>
              </p>
              <p>
                <b>Phone Number: </b>
                <span>{students.phone || "-------"}</span>
              </p>
              <p>
                <b>Date of Birth: </b>
                <span>{students.dob || "-------"}</span>
              </p>
            </div>
            <div className="footer">
              <p>NAAC+</p>
              <p>Proctor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App