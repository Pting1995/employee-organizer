import React, { useEffect, useState } from "react";
import API from "./utils/API";
import jumbotron from "./components/jumbotron";
import searchForm from "./components/searchForm";
import table from "./components/table";

function App() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
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
  function handleBtnClick(event) {
    if (btnName === "sortName") {

    }
  }

  return (
    <div>
      <jumbotron />
      <searchForm />
      <table
        fullName={user.firstName + " " + user.lastName}
        email={user.email}
        image={user.image}
        phone={user.phone}
        dob={user.dob}
      />
    </div>
  );
}

export default App;