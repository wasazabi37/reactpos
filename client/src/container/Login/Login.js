import React, { Component } from "react"
import { Card, Button, Form } from "react-bootstrap"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Card className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">
                        <Card.Header className="text-center" as="h5" variant="primary">LOGIN</Card.Header>
                        <Card.Body>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
  </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Login;