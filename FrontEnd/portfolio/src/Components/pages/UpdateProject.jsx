import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const UpdateProject = ({ ID }) => {
  const [show, setShow] = useState(false);
  const [project, setProject] = useState({
    id: "",
    name: "",
    imagelink: "",
    projectlink: "",
  });

  const handleInputChange = (key, val) => {
    setProject({ ...project, [key]: val });
  };

  const handleClose = () => setShow(false);

  const handleSubmit = async (project_id, image, title, link) => {
    await fetch("http://localhost:4000/projects/update-project", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ project_id, image, title, link }),
    });
    //console.log("this", address, HealthCard);
    window.location.reload(false);

    setShow(false);

    setShow(false);
  };

  const handleShow = async (id) => {
    const response = await fetch(`http://localhost:4000/projects/${id}`, {
      method: "GET",
    });
    const data = await response.json();
    console.log("this is data", data);
    setProject({
      id: id,
      name: data[0].title,
      imagelink: data[0].image,
      projectlink: data[0].link,
    });

    setShow(true);
  };
  return (
    <>
      <div>
        <Button color="primary" onClick={() => handleShow(ID)}>
          Update
        </Button>
        {/**Modal Show */}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Project: {project.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Project Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={project.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Image Link</Form.Label>
                <Form.Control
                  type="text"
                  name="imagelink"
                  value={project.imagelink}
                  onChange={(e) =>
                    handleInputChange("imagelink", e.target.value)
                  }
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Label>Project Link</Form.Label>
                <Form.Control
                  type="text"
                  name="projectlink"
                  value={project.projectlink}
                  onChange={(e) =>
                    handleInputChange("projectlink", e.target.value)
                  }
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                handleSubmit(
                  project.id,
                  project.imagelink,
                  project.name,
                  project.projectlink
                )
              }
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default UpdateProject;
