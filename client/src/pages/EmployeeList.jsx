import React, { useState, useEffect } from "react";
import {
  Button,
  TabContent,
  TabPane,
  Card,
  CardHeader,
  FormGroup,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  CardText,
  Table,
  Container,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import Header from "../components/Headers/Header";

export default function EmployeeList() {
  return (
    // <Table striped>
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>Image</th>
    //       <th>Name</th>
    //       <th>Email</th>
    //       <th>Mobile No.</th>
    //       <th>Designation</th>
    //       <th>Gender</th>
    //       <th>Course</th>
    //       <th>Create Date</th>
    //       <th>Action</th>
    //     </tr>
    //   </thead>
    // </Table>
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <FormGroup row>
                  <Col sm={9}>
                    <h3 className="mb-0">Employee List</h3>
                  </Col>
                  <Col sm={3}>
                    <Button
                      className="my-1"
                      color="primary"
                      // onClick={toggleModal}
                      type="button"
                    >
                      {"Add Device"}
                    </Button>
                  </Col>
                </FormGroup>
                <Table
                  className="align-items-center table-flush"
                  striped
                  bordered
                  hover
                >
                  <thead className="thead-light">
                    <tr>
                      <th>Unique Id</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Mobile No.</th>
                      <th>Designation</th>
                      <th>Gender</th>
                      <th>Course</th>
                      <th>Create Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                </Table>
              </CardHeader>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}
