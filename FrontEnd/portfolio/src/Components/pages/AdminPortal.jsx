import React from "react";
import { Tab, Row, Col, Nav, Button } from "react-bootstrap";
import Navbar from "../shared/Navbar";
import Listing from "./Listing";
import ProjectTable from "./ProjectTable";
import { useHistory } from "react-router";
import parseJwt from "../helper/authHelper";
import Resume from "./Resume";

const AdminPortal = () => {
  let history = useHistory();
  const token = sessionStorage.getItem("token");
  const user = parseJwt(token).name;

  const logOut = (event) => {
    event.preventDefault();
    sessionStorage.removeItem("token");
    history.push("/Login");
  };
  return (
    <>
      <Navbar />

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div>
          <h1>Welcome: {user}</h1>
        </div>
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Contact Tab</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Project Tab</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="third">Resume Tab</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Listing />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <ProjectTable />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Resume />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>

      <div className="row my-5 ml-1">
        <Button onClick={logOut} color="primary">
          Logout
        </Button>
      </div>
    </>
  );
};

export default AdminPortal;
