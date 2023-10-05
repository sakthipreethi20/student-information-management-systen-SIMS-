import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditStudent = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });

  useEffect(() => {
    loadStudent();
  }, []);

  const loadStudent = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/student/Student/${id}`);
      const apiData = response.data;
      console.log("Loaded student data:", apiData);
      setStudent({
        firstName: apiData.firstName || "",
        lastName: apiData.lastName || "",
        email: apiData.email || "",
        department: apiData.department || "",
      });
    } catch (error) {
      console.error("Error loading student:", error);
    }
  };

  const updateStudent = async (e) => {
    e.preventDefault();
    console.log("Updating student data:", student);

    try {
      const response = await axios.put(`http://localhost:8080/student/update/${id}`, student);
      console.log("Update response:", response.data);

      // After a successful update, you can navigate to the student view
      navigate("/view-student");
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  return (
    <div className="col-sm-8 py-2 px-5 offset-2 shadow">
      <h2 className="mt-5">Edit Student</h2>
      <form onSubmit={updateStudent}>
        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="firstName">
            First Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="firstName"
            id="firstName"
            required
            value={student.firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="lastName">
            Last Name
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="lastName"
            id="lastName"
            required
            value={student.lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="email">
            Your Email
          </label>
          <input
            className="form-control col-sm-6"
            type="email"
            name="email"
            id="email"
            required
            value={student.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-5">
          <label className="input-group-text" htmlFor="department">
            Department
          </label>
          <input
            className="form-control col-sm-6"
            type="text"
            name="department"
            id="department"
            required
            value={student.department}
            onChange={handleInputChange}
          />
        </div>

        <div className="row mb-5">
          <div className="col-sm-2">
            <button type="submit" className="btn btn-outline-success btn-lg">
              Save
            </button>
          </div>

          <div className="col-sm-2">
            <Link to={"/view-student"} className="btn btn-outline-warning btn-lg">
              Cancel
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
