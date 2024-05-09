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
import AddEmployee from "./AddEmployee";

export default function EmployeeList() {

  // const empList = [{
  //   uniqueId: 1,
  //   image: "https://example.com/image.jpg",
  //   name: "John Doe",
  //   email: "john.doe@example.com",
  //   mobile: "123-456-7890",
  //   designation: "Software Engineer",
  //   gender: "Male",
  //   course: "Computer Science",
  //   createDate: "2024-05-09",
  //   action: "test"
  // }]

  const [employees, setEmployees] = useState([]);

  const handleAddEmployee = (employee) => {
    console.log("+++++++++++++", employee)
    setEmployees([...employees, employee]);
  };

  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  return (
    <>
      <Header />
      <AddEmployee toggle={toggleModal} modal={modal} onSubmit={handleAddEmployee} />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <FormGroup row>
                  <Col sm={9}>
                    <span><h3 className="mb-0">Employee List</h3></span>
                  </Col>
                  <Col sm={3}>
                    <Button
                      className="my-1"
                      color="primary"
                      onClick={toggleModal}
                      type="button"
                    >
                      {"Create Employee"}
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
                      <th>Courses</th>
                      <th>Create Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <img src={employee.image} alt="Employee" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
                        </td>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>{employee.mobile}</td>
                        <td>{employee.designation}</td>
                        <td>{employee.gender}</td>
                        <td>{employee.courses.join(', ')}</td>
                        <td>{employee.createDate}</td>
                        <td>{employee.action}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardHeader>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  )
}
