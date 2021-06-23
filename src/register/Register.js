import React, { useState } from "react";
import './Register.css';
import { Jumbotron, Container } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // setEmail("");
        // setUsername("");
        // setPassword("");

        let values = {
            userName: username,
            email: email,
            passWord:password};

        (async () => {
            const rawResponse = await fetch('/register', {
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

        const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //   e.preventDefault();
        //   e.stopPropagation();
        // }
    
        setValidated(true);

        alert(username + ', you have registered successfully!');
    };

        return (
            <div className="register-body">

                <div className="header">
                    <Row>
                     <Col sm={12}>
                         <Jumbotron fluid>
                                <Container>
                                    <h1 className="display-3">Let's Get Started!</h1>
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
                                type="email"
                                className="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Please enter an email.</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} sm="12" controlId="validationCustomUsername">
                            <InputGroup hasValidation>
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                className="username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                aria-describedby="inputGroupPrepend"
                                required
                            />
                            <Form.Control.Feedback type="invalid">Please enter a username.</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </InputGroup>
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                                <Form.Group as={Col} sm="12" controlId="validationCustom02">
                                <Form.Control
                                required
                                type="text"
                                className="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
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

export default SignIn;