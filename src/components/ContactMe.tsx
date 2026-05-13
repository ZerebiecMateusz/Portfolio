import './ContactMe.css';
import { useState } from 'react';
const ContactMe = () => {
    const [message, setMessage] = useState('');
    return ( 
        <section className="contact-me" id="contact">
            <div className="section__title">
                <p className="section__title-main">Cont</p>
                <span className="section__title-sub">act Me</span>
            </div>
            <form 
                name="contact" 
                method="POST" 
                data-netlify="true" 
                className="contact__form">
            <input type="hidden" name="form-name" value="contact" />
            <div className="contact__form-field">
                <label htmlFor="name">Name</label>
                <input type="text" id='name' name="name" required/>
            </div>
            <div className="contact__form-field">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' name="email" required/>
            </div>
            <div className="contact__form-field">
                <label htmlFor="message">Message</label>
                <textarea 
                    id="message"
                    name="message" 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required 
                    rows={8}
                    placeholder='My inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!'
                ></textarea>
            </div>
            <button type="submit" className="contact__form-btn">Submit</button>
        </form>
        </section>
     );
}
 
export default ContactMe;