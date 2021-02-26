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
    var tempArr = [];
    if (dataVal === "sortName") {
      tempArr = [...users];
      tempArr = tempArr.sort((a, b) => (a.fullname > b.fullname) ? 1 : -1);
      setUsers(tempArr);
    } else if (dataVal === "sortPhone") {
      tempArr = [...users];
      tempArr = tempArr.sort((a, b) => (a.phone > b.phone) ? 1 : -1);
      setUsers(tempArr);
    } else if (dataVal === "sortEmail") {
      tempArr = [...users];
      tempArr = tempArr.sort((a, b) => (a.email > b.email) ? 1 : -1);
      setUsers(tempArr);
    } else if (dataVal === "sortDOB") {
      tempArr = [...users];
      tempArr = tempArr.sort((a, b) => (a.dob > b.dob) ? 1 : -1);
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
              <th scope="col"><button className="btn btn-info">Picture</button></th>
              <th scope="col"><button className="btn btn-info" onClick={handleBtnClick} data-value="sortName">Name</button></th>
              <th scope="col"><button className="btn btn-info" onClick={handleBtnClick} data-value="sortPhone">Phone</button></th>
              <th scope="col"><button className="btn btn-info" onClick={handleBtnClick} data-value="sortEmail">Email</button></th>
              <th scope="col"><button className="btn btn-info" onClick={handleBtnClick} data-value="sortDOB">DOB</button></th>
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