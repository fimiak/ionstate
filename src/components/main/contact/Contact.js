import React from 'react';

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <h1>
    Hello from {props.compiler} and {props.framework}!
  </h1>
);

function Contact() {
  return (
    <div className="contact">
      <div className="contact-details">
        <h1>Contact Us</h1>
        <p>
          <a href="mailto:admin@ionstate.com">admin@ionstate.com</a>
        </p>
        <p>
          <a href="http://www.ionstate.com">http://www.ionstate.com</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
