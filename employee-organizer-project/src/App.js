import React, { useState, useEffect } from "react";
import API from "./utils/API";
import Jumbotron from "./components/Jumbotron";
// import SearchForm from "./components/SearchForm";
import Table from "./components/Table";

function App() {

  const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadEmployees();
  }, []);

  function loadEmployees() {
    API.getEmployeeList()
      .then(() => {
        API.getEmployees().then((users) => {
          setUsers(users);
        });
      })
      .catch(err => console.log(err));
  }

  // for sort by button
  // function handleBtnClick(event) {
  //   if (btnName === "sortName") {

  //   }
  // }

  return (
    <div>
      <Jumbotron />
      {/* <SearchForm /> */}
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        {users.map(user => {
          return <Table
            fullName={user.firstname + " " + user.lastname}
            email={user.email}
            image={user.image}
            phone={user.phone}
            dob={user.dob}
          />
        })}
        </table>

    </div>
  );
}

export default App;