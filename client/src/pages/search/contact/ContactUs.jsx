import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        reason: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thank you for contacting us. We will get back to you soon.");
        setFormData({ firstName: "", lastName: "", email: "", reason: "", message: "" });
    };

    return (
        <div className="contact-us">
            <div className="contact-form-left">
                <div className="contactimg">
                    <img src="../images/contactimg.webp" alt="chef with question" />
                </div>
                <div className="contact-text">
                    <h1>Contact Us</h1>
                    <p>
                        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello,
                        feel free to reach out to us. We will respond to you in 2-5 business days.
                    </p>
                </div>
            </div>
            <div className="contact-form-container">
                <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name <span className="required-asterisk">*</span></label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name <span className="required-asterisk">*</span></label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email <span className="required-asterisk">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="reason">Reason for Contact <span className="required-asterisk">*</span></label>
                            <select
                                id="reason"
                                name="reason"
                                value={formData.reason}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a reason</option>
                                <option value="question">I have a question about a recipe</option>
                                <option value="publish">How do I publish a recipe?</option>
                                <option value="pictures">Can I use pictures from the website?</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message <span className="required-asterisk">*</span></label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
