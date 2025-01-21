import React, { useState } from "react";
import "./ContactUs.css";
import { assets } from "../../assets/assets";



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
        <div className="col-start-3 col-span-8">
            
            <div className="contact-us">
                <div className="contact-form-left">
                    <div className="col-start-4 col-span-6 h-28">
                        <img className="max-h-72 pt-7" src={assets.contact_img} alt="contact_img" />
                    </div>
                    <div className="col-start-2 col-span-10 pt-16">
                        <h1 className="text-2xl">Contact Us</h1>
                        <p className="text-lg pt-4">
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
                                    <option value="question">I have a question about a product</option>
                                    <option value="publish">How do I review a product?</option>
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

            <div className=" text-left my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
                <div className="flex flex-col justify-center items-start gap-6">
                    <p className="text-left font-semibold text-xl text-gray-600">Our Office</p>
                    <p className="text-gray-500">Darwin Innovation Hub Level 1,<br />48-50 Smith Street Mall,<br />Darwin City NT 0800</p>
                    <p className="text-gray-500">Email: support@blackrose.com.au</p>
                </div>
                <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt="" />
            </div>
        </div>
    );
};

export default ContactUs;
