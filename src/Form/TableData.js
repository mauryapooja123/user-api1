import React from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function TableData(props) {
  const navigate = useNavigate();
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> Name</th>
            <th>email</th>
          </tr>
        </thead>
        {props.data.map((data) => (
          <tbody>
            <tr>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>
                <button
                  type="button"
                  onClick={() => navigate(`/edit/${data.id}`)}
                >
                  edit
                </button>
                <button
                  type="submit"
                  onClick={() => props.handelDelete(data.id)}
                >
                  delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
}
