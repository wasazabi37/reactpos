import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap"
import { faTorah } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
        console.log("mount");
    }

    componentDidUpdate() {
        console.log("update");
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log("Unmount");
    }

    tick() {
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div className="container-fluid p-0">
                {/* <div className="row">
                    <div className="col-md-8 text-left">
                        <Link to="/" className="text-success"><h1>Healthy Cafe<img style={style} src="/images/logo/logo.png" alt=""></img></h1></Link>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="text-muted mt-4">{this.state.date.toLocaleTimeString()}</h5>
                        <ul className="list-inline">
                            <li className="list-inline-item"><Link className="text-success" to="/">Home | </Link></li>
                            <li className="list-inline-item"><Link className="text-success" to="/products">products | </Link></li>
                            <li className="list-inline-item"><Link className="text-success" to="/orders">orders | </Link></li>
                            <li className="list-inline-item"><Link className="text-success" to="/about">about</Link></li>
                        </ul>
                    </div>
                </div>
                <hr /> */}
                <Navbar bg="success" expand="lg">
                    <Navbar.Brand href="/">
                    <h1 className="text-white">BookStore
                    {/* <img alt="Cinque Terre" src="/images/logo/logo.png" width="50" height="50" className="d-inline-block align-top text-success"/> */}
                    <FontAwesomeIcon icon={faTorah} className="ml-2"/>
                    </h1>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/" className="text-white">Home</Nav.Link>
                            <Nav.Link href="/orders" className="text-white">Order</Nav.Link>
                            <Nav.Link href="/products" className="text-white">Product</Nav.Link>
                            <Nav.Link href="/about" className="text-white">About</Nav.Link>
                        </Nav>
                        <Navbar.Text className="text-white">
                            <h3>{this.state.date.toLocaleTimeString()}</h3>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;