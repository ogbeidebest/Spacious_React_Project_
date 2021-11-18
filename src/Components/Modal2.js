import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form, Col } from 'react-bootstrap';
import { PlusCircleFill } from 'react-bootstrap-icons';



export default function InfoModal2() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Col className="col-12">
                <PlusCircleFill size="50" id="plus-create" onClick={handleShow} />


                <Modal show={show} onHide={handleClose} id="planet-modal">
                    <Modal.Header closeButton>
                        <Modal.Title>Charater</Modal.Title>
                    </Modal.Header><Form className="mx-5" >
                        <Modal.Body>
                            <Form.Group className="mb-3" controlId="formBasicImage">
                                <Form.Label id="pm-ilabel">Image</Form.Label>
                                <Form.Control type="url" id="modal-background" />
                                <Form.Text className="text-muted" id="pm-ilabel">
                                    Paste the URL of a JPG or PNG of max 20Kb
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="floatingTextarea">

                                <Form.Label id="pm-nlabel">Name</Form.Label>
                                <Form.Control type="text" id="modal-background" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label id="pm-dlabel">Description</Form.Label>
                                <Form.Control type="text" style={{ heigh: '100px' }} id="modal-background" />

                            </Form.Group>

                            <Form.Group ClassName="mb-2">
                                <Form.Select>
                                    <option>Default select</option>
                                </Form.Select>
                            </Form.Group>

                        </Modal.Body>



                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose} id="mcancel-btn">
                                Cancel
                            </Button>
                            <Button variant="primary" onClick={handleClose} type="submit" id="mcreate-btn">
                                Create Charater
                            </Button>
                        </Modal.Footer></Form>
                </Modal>
            </Col>

        </>
    );
}




