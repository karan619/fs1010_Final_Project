import React from "react";
import parseJwt from "../helper/authHelper";
import Navbar from "../shared/Navbar";
import { Table, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";

const Listing = () => {
  let history = useHistory();
  const token = sessionStorage.getItem("token");
  const user = parseJwt(token).username;
  const [listing, setListing] = useState([]);

  const logOut = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    history.push("/Login");
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
      console.log("this is data", data);
      setListing(data);
    };
    getData();
  }, [token]);

  return (
    <>
      <Navbar />
      <section className="container">
        <div className="row">
          <h1>Listing page: {user}</h1>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
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
                </tr>
              </tbody>
            ))}
        </Table>
        <div className="row my-5 ml-1">
          <Button onClick={logOut} color="primary">
            Logout
          </Button>
        </div>
      </section>
    </>
  );
};

export default Listing;
