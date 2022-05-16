import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

const Demo = (props) => {
  return (
    <div>
      <h2>{props.className}</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicals</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.name}</td>
            <td>{props.noLectures}</td>
            <td>{props.noPracticals}</td>
          </tr>
          <tr>
            <td>{props.name}</td>
            <td>{props.noLectures}</td>
            <td>{props.noPracticals}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Demo;
