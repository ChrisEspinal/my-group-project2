import React, { useState } from "react";
import './SignIn.css';
import { Jumbotron, Container } from 'react-bootstrap';
import { Form, InputGroup } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { logIn,logOut } from "../actions/indexAction";
import {useSelector, useDispatch} from 'react-redux';//import this for redux
import LoggedIn from "../reducers/loggedIn";// and this

const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState("");
    const [validated, setValidated] = useState(false);


    const dispatch = useDispatch();


    //Copy this line, use rState variable for if statement
    const rState = useSelector((state)=> state.LoggedIn);
  
    const handleSubmit = (e) => {
        e.preventDefault();

        // e.preventDefault();
        // setUsername("");
        // setPassword("");

        const form = e.currentTarget;
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }


        let values = {
            userName: username,
            passWord:password};

        (async () => {
            const rawResponse = await fetch('/signIn', {
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

    

        dispatch(logIn());

  
        console.log(rState);

        // const form = e.currentTarget;
        // if (form.checkValidity() === false) {
        //   e.preventDefault();
        //   e.stopPropagation();
        // }
    
        // setValidated(true);

        // alert(username + ', routing to home page!');

        // let values = {
        //     userName: username,
        //     passWord: password
        // };

        // (async () => {
        //     const rawResponse = await fetch('/signIn', {
        //         method: 'POST',
        //         headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(values)
        //     });
        //     const content = await rawResponse.json();
        //     console.log("This is the content");
        //     console.log(content);
        //     })();


    };

    const toggleViewPassword = () => {
        setShowPassword(showPassword ? false : true);
    };


    const eye = <FontAwesomeIcon icon={faEye}/>

        return (
            <div className="signIn-body">

                <div className="header">
                    <Row>
                     <Col sm={12}>
                         <Jumbotron fluid>
                                <Container>
                                    <h1 className="display-3">Welcome!</h1>
                                </Container>
                            </Jumbotron>
                        </Col>    
                    </Row>
                </div>

                <div className="container-fluid formBody">
                    <Row>
                        <Col></Col>
                        <Col sm={12} md={8}>  Sign In

                        <div className="inputFields">
                        <Form noValidate validated={validated} className="form" onSubmit={handleSubmit}>

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
                                <InputGroup>
                                <Form.Control
                                required
                                type={showPassword ? "text" : "password"}
                                className="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                aria-describedby="eye_toggle"
                            />
                            <InputGroup.Append>
                            <InputGroup.Text id="eye_toggle"><i onClick={toggleViewPassword}>{eye}</i></InputGroup.Text>
                            </InputGroup.Append>
                            <Form.Control.Feedback type="invalid">Please enter a password.</Form.Control.Feedback>
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

export default SignIn;


// Work on pvb
// onChange check
// push server
// 