import React from "react";
import Header from "../components/Header"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare} from '@fortawesome/free-brands-svg-icons'
import { faGithubSquare} from "@fortawesome/free-brands-svg-icons"

// functional
const About = () => { 
        return (
            <div>
                <Header />
                <div className="container col-md-5">
                <h3>POS Mini Project</h3>
                <p className="title text-justify mt-4 mb-4">
                    this is mini project build for learning react and use as example in portfolio
                </p>
                <h4>
                    Contract: <a href="https://www.facebook.com/rawiphon.kraisibawon/"><FontAwesomeIcon icon={faFacebookSquare} /></a> || <a href="https://www.facebook.com/rawiphon.kraisibawon/" className="text-muted"><FontAwesomeIcon icon={faGithubSquare} /></a> 
                </h4>
                </div>
                <Footer email="rawiphon_k@gmail.com" />
            </div>
            
        );
}
export default About;