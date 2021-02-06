import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const resultData = await axios.get(`http://localhost:3001/users/${id}`);
      setUser(resultData.data);
    } catch (err) {
      console.log("error is" + err);
    }
  };

  return (
    <div className="container">
      <div className="">
        <h1 className="text-center mb-4 text-dark font-weight-bold">
          Users View Page
        </h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr className="text-center">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
            </tr>
          </thead>

          <tbody>
            <tr className="text-center">
              <td scope="row">{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;
