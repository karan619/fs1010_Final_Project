import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddProject = () => {
  const [show, setShow] = useState(false);
  const [project, setProject] = useState({
    name: "",
    image: "",
    link: "",
  });

  const handleInputChange = (key, val) => {
    setProject({ ...project, [key]: val });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async () => {
    await fetch("http://localhost:4000/projects/create-project", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        image: project.image,
        title: project.name,
        link: project.link,
      }),
    });
    setProject({
      name: "",
      image: "",
      link: "",
    });
    setShow(false);

    window.location.reload(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Project
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Project Title</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={project.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Enter Title"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Project Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                value={project.image}
                onChange={(e) => handleInputChange("image", e.target.value)}
                placeholder="Paste the Image Link"
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Project Link</Form.Label>
              <Form.Control
                type="text"
                name="link"
                value={project.link}
                onChange={(e) => handleInputChange("link", e.target.value)}
                placeholder="Paste the Project Link"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProject;
