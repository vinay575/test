import React, { useState } from 'react';
import Email from '../images/email.png';

const YourComponent = () => {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = () => {
    // Add your logic for handling form submission here
    // For now, let's just set the message sent state to true
    setMessageSent(true);
  };

  return (
    <>
    <div className='boy' id='ContactMe'>
      {/* title */}
      <div id="tc " className="title-containe">
        <h1 id='h1'>Contact Me</h1>
      </div>

      {/* main container */}
      <div id="c" className="containe">
        {/* image */}
        <div className="image-containe">
        <img id='img' src={Email} alt="email logo"/>
        </div>
        <div className="text-containe">
         
          <input id='input' type="text" name="name" placeholder="Name" /><br/>
          
         
          <input  id='input' type="email" name="email" placeholder="Email" /><br/>
          
        
          <textarea  id='input' type="text" name="message" placeholder="Message"/><br/>
          
          {/* message sent */}
          {isMessageSent && <div className="message">Message Sent</div>}
          
          <div className="button">
            <button id="submit"  className='bto' type="submit" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default YourComponent;
