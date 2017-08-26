import React, { Component } from 'react';
import Footer from './Footer';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <div className="contact-details">
                    <h2>Contact Us</h2>
                    <p>presidentprime.com</p>
                </div>

                <div className="footer">
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Contact;