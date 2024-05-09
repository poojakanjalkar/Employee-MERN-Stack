import React, { useState, useEffect } from "react";


import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormFeedback,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Col,

} from "reactstrap";

export default function UpdateEmployee(props) {
  const { className, editModal, toggleEditModal } = props;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    courses: '',
    createDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const newCourses = checked
        ? [...formData.courses, value]
        : formData.courses.filter(course => course !== value);
      setFormData({ ...formData, courses: newCourses });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const { name, email, mobile, designation, gender, courses, createDate } = formData;

  const handleSubmit = () => {
    console.log("------employee data---", formData)
    props.onSubmit(formData);

    props.toggleEditModal(); // Close modal after submission
  };



  return (
    <div>
      <Modal isOpen={editModal} toggle={toggleEditModal} className={className} size={"lg"}>
        <ModalHeader toggle={toggleEditModal}>Employee Edit</ModalHeader>

        <>
          <Card className="bg-secondary  px-md-2">
            <ModalBody>


              <FormGroup row>
                <Label sm={2}>Name</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="name" id="name" value={name} onChange={handleInputChange}

                  />

                  <FormFeedback>*Required</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Email</Label>
                <Col sm={10}>
                  <Input
                    type="email"
                    name="email" id="email" value={email} onChange={handleInputChange}

                  />

                  <FormFeedback>*Required</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Mobile No.</Label>
                <Col sm={10}>
                  <Input
                    type="text"
                    name="mobile" id="mobile" value={mobile} onChange={handleInputChange}

                  />

                  <FormFeedback>*Required</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Designation</Label>
                <Col sm={10}>
                  <Input type="select" name="designation" id="designation" value={designation} onChange={handleInputChange} placeholder='select option from dropdown'>
                    <option>HR</option>
                    <option>Manager</option>
                    <option>sales</option>

                  </Input>

                  <FormFeedback>*Required</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Gender</Label>
                <Col sm={10}>
                  <Label check>
                    <Input type="radio" name="gender" value="Male" checked={gender == "Male"} onChange={handleInputChange} />{' '}
                    Male
                  </Label>

                  <Label check>
                    <Input type="radio" name="gender" value="Female" checked={gender == "Female"} onChange={handleInputChange} />{' '}
                    Female
                  </Label>
                  <FormFeedback>*Required</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Courses</Label>
                <Col sm={10}>
                  <Input type="checkbox" name="course" value="MCA" checked={courses.includes('MCA')} onChange={handleInputChange} />{' '}
                  MCA
                  <Input type="checkbox" name="course" value="BCA" checked={courses.includes('BCA')} onChange={handleInputChange} />{' '}
                  BCA
                  <Input type="checkbox" name="course" value="BSC" checked={courses.includes('BSC')} onChange={handleInputChange} />{' '}
                  BSC
                  <FormFeedback>*Required</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Create date</Label>
                <Col sm={10}>
                  <Input
                    value={createDate}
                    type="date"
                    name="createDate"

                    onChange={handleInputChange}

                  />
                  <FormFeedback>*Required</FormFeedback>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label sm={2}>Img Upload</Label>
                <Col sm={10}>
                  <Input
                    type="text"

                    placeholder="Enter ID"
                  />

                  <FormFeedback>*Required</FormFeedback>
                </Col>
              </FormGroup>
            </ModalBody>
          </Card>

          <ModalFooter>
            <Button
              color="primary"
              onClick={handleSubmit}
            >
              Update
            </Button>{" "}

          </ModalFooter>
        </>
      </Modal>
    </div>
  )
}



