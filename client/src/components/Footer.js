import React from "react";

const Footer = (props) => {
    const { email } = props;

    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center title text-uppercase">
                <small>
                    <span className="text-warning">Created by <a href="https://www.facebook.com/rawiphon.kraisibawon/" className="text-warning">Rawiphon Kraisribovon</a></span> | <span className="text-muted">Contract {email}</span> 
                </small>
            </div>
        </div>
    );
};

export default Footer;