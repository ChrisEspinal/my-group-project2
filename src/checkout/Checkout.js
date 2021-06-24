import React, { useState } from "react";
import './Checkout.css';
import { Jumbotron, Container } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const Checkout = () => {
    const [name, setName] = useState("");
    const [ccNumber, setCCNumber] = useState("");
    const [expDate, setExpDate] = useState("");
    const [cvv, setCVV] = useState("");
    const [billingAddress, setBillingAddress] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
    
        setValidated(true);

        let values = {
            name: name,
            ccNumber: ccNumber,
            expDate: expDate,
            cvv: cvv,
            billingAddress: billingAddress,
            shippingAddress: shippingAddress,
        };

        (async () => {
            const rawResponse = await fetch('/checkout', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            });
            const content = await rawResponse.json();
            console.log("This is the content");
            console.log(content);
          })();

    //     // alert(username + ', you have checkedout successfully!');
    };



        return (
            <div className="register-body">

                <div className="header">
                    <Row>
                     <Col sm={12}>
                         <Jumbotron fluid>
                                <Container>
                                    <h1 className="display-3">Almost Done!</h1>
                                </Container>
                            </Jumbotron>
                        </Col>    
                    </Row>
                </div>

                <div className="container-fluid formBody">
                    <Row>
                        <Col></Col>
                        <Col sm={12} md={8}>  Please input the following:

                        <div className="inputFields">
                        <Form noValidate validated={validated} className="form" onSubmit={handleSubmit}>

                        <Form.Row>
                                <Form.Group as={Col} sm="12" controlId="validationCustom01">
                                <Form.Control
                                required
                                type="name"
                                className="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a name.</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} sm="12" controlId="validationCustomUsername">
                            <InputGroup hasValidation>
                                <Form.Control
                                type="text"
                                className="ccnumber"
                                placeholder="Credit Card Info"
                                value={ccNumber}
                                onChange={(e) => setCCNumber(e.target.value)}
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">Please enter a credit card number.</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} sm="12" controlId="validationCustom02">
                            <InputGroup>
                            <Form.Control
                                required
                                type="text"
                                className="billingAddress"
                                placeholder="Billing Address"
                                value={billingAddress}
                                onChange={(e) => setBillingAddress(e.target.value)}
                                aria-describedby="eye_toggle"
                            />
                            <Form.Control.Feedback type="invalid">Please enter a billing address.</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} sm="12" controlId="validationCustom02">
                            <InputGroup>
                            <Form.Control
                                required
                                type="text"
                                className="shippingAddress"
                                placeholder="Shipping Address"
                                value={shippingAddress}
                                onChange={(e) => setShippingAddress(e.target.value)}
                                aria-describedby="eye_toggle"
                            />
                            <Form.Control.Feedback type="invalid">Please enter a shipping address.</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} sm="12" controlId="validationCustom02">
                            <InputGroup>
                            <Form.Control
                                required
                                type="text"
                                className="expDate"
                                placeholder="Expiration Date"
                                value={expDate}
                                onChange={(e) => setExpDate(e.target.value)}
                                aria-describedby="eye_toggle"
                            />
                            <Form.Control.Feedback type="invalid">Please enter an expiration date.</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} sm="12" controlId="validationCustom02">
                            <InputGroup>
                            <Form.Control
                                required
                                type="text"
                                className="cvv"
                                placeholder="CVV"
                                value={cvv}
                                onChange={(e) => setCVV(e.target.value)}
                                aria-describedby="eye_toggle"
                            />
                            <Form.Control.Feedback type="invalid">Please enter a CVV code.</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        <Button variant="primary"type="submit">Submit</Button>

                        </Form>
                        </div>

                        </Col>
                        <Col></Col>
                    </Row>
                </div>

            </div>
            
        );
    }

export default Checkout;