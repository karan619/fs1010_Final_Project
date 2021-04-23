import React, { useState } from "react";
import { useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import AddProject from "./AddProject";
import UpdateProject from "./UpdateProject";

const ProjectTable = () => {
  const [projetcs, setProject] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("http://localhost:4000/projects");
      const data = await response.json();
      //console.log("this is data", data);
      setProject(data);
    };
    getData();
  }, []);

  const delProject = async (id) => {
    console.log("this is the id", id);
    if (window.confirm("Are you Sure")) {
      await fetch(`http://localhost:4000/projects/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      const response = await fetch("http://localhost:4000/projects", {
        method: "GET",
      });
      const data = await response.json();
      setProject(data);
    }
  };

  return (
    <>
      <section className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Project Name</th>
              <th>Image Link</th>
              <th>Project Link</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {projetcs.map((data) => (
              <tr>
                <td>{data.title}</td>
                <td>{data.image}</td>
                <td>{data.link}</td>
                <td>
                  {/**Update project Component */}
                  <UpdateProject ID={data.project_id} />
                </td>

                <td>
                  <Button
                    color="primary"
                    onClick={() => {
                      delProject(data.project_id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/** Add project modal component */}
        <AddProject />
      </section>
    </>
  );
};

export default ProjectTable;
