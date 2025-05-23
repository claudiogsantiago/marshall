import React, { useState } from "react";

// react-bootstrap
import { Button, Modal, Row, Col,Form } from "react-bootstrap";

// components
import InputField from "./inputfield";

const CastCrewForm = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Button onClick={handleShow}>
        <i className="fa-solid fa-square-plus me-2"></i>Add Cast / Crew
      </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Add Cast</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={handleFormSubmit} className="section-form">
                  <Row>
                    <Col sm="12">
                      <InputField
                        isLabel={true}
                        isRequired={true}
                        label="Person"
                        type="text"
                        placeholder="Enter name"
                      />
                    </Col>
                    <Col sm="12">
                    <div className="form-group px-3 d-flex flex-column">
                            <label className="form-label flex-grow-1" htmlFor="occupation"><strong>Occupation:</strong></label>
                            <select id="occupation" type="select" className="form-control select2-basic-multiple"
                                placeholder="Select Occupation">
                                <option>Cast</option>
                                <option>Crew</option>
                                <option>Production</option>
                                <option>Director</option>
                                <option>Actor</option>
                            </select>
                        </div>
                    </Col>
                    <Col sm="12">
                      <InputField
                        isLabel={true}
                        label="As"
                        type="text"
                        placeholder="Played as"
                      />
                    </Col>
                    <Col sm="12">
                      <InputField
                        label="Status"
                        type="toggle"
                        placeholder=""
                        className="d-flex align-self-start justify-content-between"
                        name="status"
                      />
                    </Col>
                  </Row>
                </Form>
          </Modal.Body>
          <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
        </Modal>
    </div>
  );
};

export default CastCrewForm;
