import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [project, setProject] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const singleUser = async() => {
    try {
      const { data } = await axios.get(
        `http://localhost:4000/api/user/single-user/${id}`
      );
      if (data.success) {
        setFname(data.singleUser.fname);
        setLname(data.singleUser.lname);
        setEmail(data.singleUser.email);
        setMobile(data.singleUser.mobile);
        setProject(data.singleUser.project);

      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    singleUser();
    console.log(id)
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `http://localhost:4000/api/user/update-user/${id}`,
        { fname, lname, email, mobile, project }
      );
      if (data.success) {
        alert("User updated");
        navigate("/");
      }
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <div className="w-50 mx-auto mt-5">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            value={fname}
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Last Name
          </label>
          <input
            type="text"
            class="form-control"
            value={lname}
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Mobile No
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Project
          </label>
          <input
            type="text"
            class="form-control"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
