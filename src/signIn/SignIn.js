import React from 'react';
import './SignIn.css';
import { Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class SignIn extends React.Component {

    render () {
        return (
            <div className="signIn-body">
                <div className="container-fluid formBody">
                    <Row>
                        <Col></Col>
                        <Col sm={12} md={8}>  SignIn Page
                        {/* <div className="inputFields">
                        <form className="form" onSubmit={handleSubmit}>
                            <input 
                                className="form-control email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="form-control username"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                className="form-control password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <Button variant="primary"type="submit">Submit</Button>
                        </form>
                        </div> */}
                        </Col>
                        <Col></Col>
                    </Row>

                </div>
            </div>
        );
    }

}

export default SignIn;