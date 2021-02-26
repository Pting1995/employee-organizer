import React, { useState, useEffect } from "react";
import API from "./utils/API";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm";
import Table from "./components/Table";

function App() {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("")

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
      var tempArr = [];
      tempArr = [...users];
      tempArr = tempArr.sort((a, b) => (a.fullname > b.fullname) ? 1 : -1);
      setUsers(tempArr);
    }
  }

  function cb(user) {
    var fullName = user.fullname.toLowerCase()
    if (fullName.includes(search.toLowerCase())) {
      return true;
    }
    else {
      return false;
    }
  }

  function handleSearchQueryChange(event) {
    setSearch(event.target.value)
  }
  return (
    <div>
      <Jumbotron />
      <div className="container">
        <SearchForm handleSearchQueryChange={handleSearchQueryChange} />
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Picture</th>
              <th scope="col"><button className="btn btn-info" onClick={handleBtnClick} data-value="sortName">Name</button></th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">DOB</th>
            </tr>
          </thead>
          {console.log(users),
            users.filter(cb).map(user => {
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
    </div>



  );
}

export default App;