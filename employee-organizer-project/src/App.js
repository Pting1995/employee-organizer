import React, { useState, useEffect } from "react";
import API from "./utils/API";
import Jumbotron from "./components/Jumbotron";
// import SearchForm from "./components/SearchForm";
import Table from "./components/Table";

function App() {

  const [users, setUsers] = useState([]);

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
  function handleBtnClick(event) {
    event.preventDefault();
    const dataVal = event.target.getAttribute("data-value");
    
    if (dataVal === "sortName") {
      // console.log(users)
      var tempArr = [];
      tempArr = users;
      console.log(tempArr);
      tempArr = tempArr.sort((a, b) => (a.fullname > b.fullname) ? 1 : -1);
      console.log(tempArr);
      setUsers(tempArr);
    }
  }

  return (
    // console.log("render")
    <div>
      <Jumbotron />
      {/* <SearchForm /> */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Picture</th>
            <th scope="col"><button onClick={handleBtnClick} data-value="sortName">Name</button></th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        {users.map(user => {
          return <Table
            fullname={user.fullname}
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