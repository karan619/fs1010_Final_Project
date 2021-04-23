import React from "react";

import { Table, Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";

//import ProjectTable from "./ProjectTable";

const Listing = () => {
  const token = sessionStorage.getItem("token");

  const [email, updEmail] = useState("");
  const [phoneNumber, updPhoneNumber] = useState("");
  const [dispUser, displayUser] = useState({
    id: "",
    user: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [listing, setListing] = useState([]);

  const handleShow = (username, id) => {
    displayUser({
      user: username,
      id: id,
    });
    setShow(true);
  };

  /**Update form Function */
  const updEntry = async (id) => {
    console.log("this is:", id);
    try {
      await fetch("http://localhost:4000/contact_form/entries", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phoneNumber, id }),
      });
      setShow(false);
      updEmail("");
      updPhoneNumber("");
    } catch (error) {
      console.log("update post: ", error);
    }
  };
  /**Delete entry function */

  const delEntry = async (id) => {
    try {
      if (window.confirm("Are you sure")) {
        await fetch(`http://localhost:4000/contact_form/entries/${id}`, {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        });

        const response = await fetch(
          "http://localhost:4000/contact_form/entries",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();
        setListing(data);
      }
    } catch (error) {
      console.log("delete post: ", error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "http://localhost:4000/contact_form/entries",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      //console.log("this is data", data);
      setListing(data);
    };
    getData();
  }, [token]);

  return (
    <>
      <section className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          {listing.length > 0 &&
            listing.map((entry) => (
              <tbody>
                <tr>
                  <td>{entry.id}</td>
                  <td>{entry.name}</td>
                  <td>{entry.phoneNumber}</td>
                  <td>{entry.email}</td>

                  <td>
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleShow(entry.name, entry.id);
                      }}
                    >
                      Update
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title>{dispUser.user}</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Form>
                          <Form.Group controlId="formBasicPhoneNumber">
                            <Form.Label>PhoneNumber</Form.Label>
                            <Form.Control
                              type="phone"
                              name="phone"
                              value={phoneNumber}
                              placeholder="Update Phone Number"
                              onChange={(e) => updPhoneNumber(e.target.value)}
                            />
                          </Form.Group>

                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                              type="email"
                              name="email"
                              value={email}
                              placeholder="Update Email Id"
                              onChange={(e) => updEmail(e.target.value)}
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
                          onClick={() => {
                            updEntry(dispUser.id);
                          }}
                        >
                          Save Changes
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </td>
                  <td>
                    <Button
                      onClick={() => {
                        delEntry(entry.id);
                      }}
                      color="primary"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              </tbody>
            ))}
        </Table>
      </section>
    </>
  );
};

export default Listing;
