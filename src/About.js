import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faDownload, faCheckCircle, faTimesCircle, faSpinner } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CSS/About.css'; 
import './CSS/About1.css';
import img from './images/1.gif'; 
import gif from './images/2.gif'; 
import emailjs from 'emailjs-com';

const About = () => {
    const [formVisible, setFormVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '', // Comma-separated emails
        contactNumber: '',
        message: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState('');
    const [loading, setLoading] = useState(false);

    const formRef = useRef();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            offset: 200,
            delay: 10,
            mirror: true,
            once: false
        });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateEmails = (emails) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emails.every(email => emailPattern.test(email));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formData.name || !formData.email || !formData.message || !formData.contactNumber) {
            setFormError('All fields are required.');
            setLoading(false);
            return;
        }

        const emails = formData.email.split(',').map(email => email.trim());
        if (!validateEmails(emails)) {
            setFormError('One or more email addresses are invalid.');
            setLoading(false);
            return;
        }

        emailjs.sendForm('service_vengadeshan', 'template_fszowib', formRef.current, 'sD3ZPjwK8MMaB93np')
            .then((result) => {
                console.log('Main email sent:', result.text);
                setFormSubmitted(true);
                setFormError('');
                setFormData({ name: '', email: '', contactNumber: '', message: '' });
                setFormVisible(false);
                sendConfirmationEmails(emails);
            }, (error) => {
                console.error('Error sending main email:', error.text);
                setFormError('Failed to send message. Please try again.');
                setLoading(false);
            });
    };

    const sendConfirmationEmails = (emailAddresses) => {
        emailAddresses.forEach(email => {
            const templateParams = {
                to_email: email,
                subject: 'Form Submission Confirmation',
                message: 'Thank you for reaching out! I will get back to you soon.'
            };

            emailjs.send('service_vengadeshan', 'template_9byi005', templateParams, 'sD3ZPjwK8MMaB93np')
                .then((result) => {
                    console.log('Confirmation email sent to:', email, result.text);
                }, (error) => {
                    console.error('Error sending confirmation email to:', email, error.text);
                });
        });
    };

    const toggleFormVisibility = () => {
        setFormVisible(!formVisible);
        if (formVisible) {
            setFormSubmitted(false);
            setFormError('');
        }
    };

    const resetForm = () => {
        setFormData({ name: '', email: '', contactNumber: '', message: '' });
        setFormError('');
    };

    return (
        <div id="prl" data-aos="fade-down">
            <h1>Hi, I'M VENGADESHAN R</h1>
            <div className="wrapper">
                <ul className="dynamic-txts">
                    <li><span>FULL STACK DEVELOPER</span></li>
                </ul>
            </div>
            <button className="custom-btn btn-11" onClick={toggleFormVisibility}>
                <span><FontAwesomeIcon icon={faBriefcase} /> HIRE ME</span>
            </button>
            <div className="btn-12">
                <a href={require('./images/VENGADESHAN_BBA_2021.pdf')} download>
                    <button className="custom-btn btn-11">
                        <span><FontAwesomeIcon icon={faDownload} /> RESUME</span>
                    </button>
                </a>
            </div>
            <p>
                "Experienced graphic designer transitioning to full stack web development<br /> 
                with a proven track record in frontend and backend development. Skilled in <br />
                HTML5, CSS3, JavaScript, Bootstrap, React.js, Python 3.12.0, and MySQL. <br />
                Adept at project management, customer relationship management, and driving<br />
                business growth. Seeking to leverage technical expertise and creative <br />
                problem-solving skills as a Business Development Associate."
            </p>
            <div className="logo">
                <img src={gif} className="gif" alt="Logo 2" />
                <img src={img} className="img1" alt="Logo 1" />
            </div>
            
            {formVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <button className="close-btn" onClick={toggleFormVisibility}>×</button>
                        <h2 className="me">CONTACT ME</h2>
                        <form ref={formRef} onSubmit={handleSubmit} className="hire-form">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter Email Addresses"
                                    required
                                    title="Enter email addresses separated by commas"
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="tel"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    placeholder="Your Contact Number"
                                    required
                                    title="Enter your contact number"
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    maxLength="500"
                                    title="Enter your message (max 500 characters)"
                                ></textarea>
                                <small>{formData.message.length}/500 characters</small>
                            </div>
                            {formError && <p className="error"><FontAwesomeIcon icon={faTimesCircle} /> {formError}</p>}
                            {formSubmitted && <p className="success"><FontAwesomeIcon icon={faCheckCircle} /> Thank you for reaching out! I will get back to you soon.</p>}
                            {loading && <p className="loading"><FontAwesomeIcon icon={faSpinner} spin /> Sending...</p>}
                            <button type="submit">Submit</button>
                            <button type="button" onClick={resetForm} className="reset-btn">Reset</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default About;
