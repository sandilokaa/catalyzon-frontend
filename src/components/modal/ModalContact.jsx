import React, { useState } from "react";
import {
    Row,
    Col,
    Button,
    Image,
    Modal,
    Form
} from "react-bootstrap";
import axios from "axios";
import { useSnackbar } from 'notistack';

import ModalImage from "../../assets/images/background/modal-bg.png";

import "../../assets/css/home.css";
import "../../assets/css/responsive.css";

const ModalContact = ({ show, handleClose }) => {

    const { enqueueSnackbar } = useSnackbar();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmitEmail = async (e) => {

        e.preventDefault();

        try {

            const response = await axios.post(
                'https://formspree.io/f/mjvndwpb',
                {
                    name,
                    phone,
                    email,
                    message
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            );

            if (response) {
                enqueueSnackbar('Email sent successfully', { variant: 'success', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
            }

            handleClose();

        } catch (err) {
            enqueueSnackbar('An error occurred while sending the email', { variant: 'error', anchorOrigin: { vertical: 'top', horizontal: 'center' }, autoHideDuration: 3000 });
        }
    };

    return (

        <Modal className="modal-contact" show={show} onHide={handleClose} size="lg">
            <Row>
                <Col xs={12} xl={6} className={`${window.innerWidth < 480 ? 'd-none' : ''}`}>
                    <Image src={ModalImage} className="w-100 h-100" />
                </Col>
                <Col xs={12} xl={6} className="p-4">
                    <Modal.Header closeButton />
                    <h1 style={{ fontWeight: '600', marginTop: '4%' }}>Contact our team.</h1>
                    <p>Complete the form to gain the benefits of positive environmental change!</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Input your name" onChange={(e) => setName(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Input your phone number" onChange={(e) => setPhone(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="I'm interested to" onChange={(e) => setMessage(e.target.value)} required />
                        </Form.Group>
                    </Form>
                    <Row>
                        <Col xs={12} xl={12}>
                            <Button onClick={handleSubmitEmail} variant="primary" className="w-100 btn-submit" style={{ backgroundColor: '#012E80', border: '1px solid #012E80' }}>
                                Submit
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Modal>

    );

};

export default ModalContact;