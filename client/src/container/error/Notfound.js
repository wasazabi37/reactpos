import React from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <Header />
            <div className="container-md-8 text-center">
                <h1 className="title mt-5" style={{ fontSize: 120 }}>404</h1>
                <h2 className="title mb-4">Not Found</h2>
                <p className="title mb-5">Click <Link to="/" className="text-primary">Here</Link> to return homepage</p>
            </div>
            <Footer />
        </div>
    )

}
export default NotFound;