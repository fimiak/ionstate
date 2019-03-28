import React from 'react';
import Title from '../.././main/home/title/Title';

function Contact() {
  return (
    <div className="contact">
      <Title title="Contact Us" />
      <div className="contact-details">
        <h4>
          Ionstate is a demonstration product, and is not intended for public use. Please send any suggestions to the
          email address below.
        </h4>
        <p>
          Email: <a href="mailto:admin@ionstate.com">admin@ionstate.com</a>
        </p>
        <p>
          Website: <a href="http://www.ionstate.com">http://www.ionstate.com</a>
        </p>
        <span>
          NYTimes API: <a href="https://developer.nytimes.com/">https://developer.nytimes.com/</a>
        </span>
      </div>
    </div>
  );
}

export default Contact;
