import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data.reverse());
  };

  const deleteUser = async (id) => {
    console.log(id);

    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUsers();
  };

  return (
    <div className="container mb-5">
      <div className="">
        <h1 className="text-center mb-4 text-dark font-weight-bold">
          Users List
        </h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr className="text-center">
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <Link className="btn btn-dark mr-2" to={`/users/${user.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-dark mr-2"
                    to={`/users/edit/${user.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </Link>
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
