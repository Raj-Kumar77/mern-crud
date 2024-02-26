import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios'

const Home = () => {
  const [users, setUsers] = useState([]);
  const getUser = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4000/api/user/all-user"
      );
      if (data.success) {
        setUsers(data.users);
      }
    } catch (error) {
        console.log(error)
    }
  };

  const deleteUser = async(id) =>{
    try {
        const {data} = await axios.delete(`http://localhost:4000/api/user/delete-user/${id}`)
        if(data.success){
            alert('User deleted. Please refresh page')
            navigate('/')
        }
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(() => {
    getUser();
    console.log(users);
  }, []);

  return (
    <div className="container">
      <h1>Clients</h1>
      <Link className="btn btn-secondary my-5" to="/add-user">
        Create Client
      </Link>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Mobile</th>
              <th scope="col">Project</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((e, i) => (
              <tr key={e._id}>
                <th scope="row">{i + 1}</th>
                <td>{e.fname}</td>
                <td>{e.lname}</td>
                <td>{e.email}</td>
                <td>{e.mobile}</td>
                <td>{e.project}</td>
                <td>
                    <Link to={`/update/${e._id}`} className="btn btn-primary me-2">Edit</Link>
                    <button className="btn btn-danger" onClick={()=>deleteUser(e._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
