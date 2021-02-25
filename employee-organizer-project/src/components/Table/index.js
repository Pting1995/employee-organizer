import React from "react";

const table = (props) => (
    <tbody>
      <tr>
        <td><img src={props.image}></img></td>
        <td>{props.fullName}</td>
        <td>{props.phone}</td>
        <td>{props.email}</td>
        <td>{props.dob}</td>
      </tr>
    </tbody>
);

export default table;