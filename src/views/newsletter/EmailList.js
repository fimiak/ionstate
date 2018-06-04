import React from 'react';

function EmailList() {
  return (
    <div id="mc_embed_signup">
      <form
        action="//presidentprime.us16.list-manage.com/subscribe/post?u=b6ca623d477533c7a0fd4aae3&amp;id=3694cbac9e"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="mc-field-group">
            <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
            <label htmlFor="mce-EMAIL">Email Address</label>
          </div>
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" />
            <div className="response" id="mce-success-response" />
          </div>
          <div aria-hidden="true">
            <input
              type="text"
              name="b_b6ca623d477533c7a0fd4aae3_3694cbac9e"
              tabIndex="-1"
              value=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}


export default EmailList;
