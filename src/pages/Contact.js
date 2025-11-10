import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import FaqItem from '../components/FaqItem';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_ulujwyr',   // 🔹 Replace with your EmailJS Service ID
            'template_t06f4uj',  // 🔹 Replace with your EmailJS Template ID
            form.current,
            'IbGwBJqCQIgABWx81'    // 🔹 Replace with your EmailJS Public Key
        ).then(
            () => {
                alert('✅ Message sent successfully!');
                e.target.reset();
            },
            (error) => {
                console.error('Error:', error.text);
                alert('❌ Failed to send message. Please try again later.');
            }
        );
    };

    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 data-aos="fade-up">Get In <span>Touch</span></h2>
                <p data-aos="fade-up" data-aos-delay="100">Ready to transform your business? Let's discuss your vision.</p>

                {/* Contact Info */}
                <div className="contact-grid">
                    <div className="card-glass contact-card" data-aos="fade-up" data-aos-delay="200"><Mail /><h4>Email Us</h4><p>abhisek.labala01@gmail.com</p></div>
                    <div className="card-glass contact-card" data-aos="fade-up" data-aos-delay="300"><Phone /><h4>Call Us</h4><p>+91 8328826667</p></div>
                    <div className="card-glass contact-card" data-aos="fade-up" data-aos-delay="400"><MapPin /><h4>Visit Us</h4><p>2116, Dharuthenga Road, Near Sai Paradise, Bhubaneswar, Odisha, 751024.</p></div>
                </div>

                {/* Contact Form with EmailJS */}
                <form ref={form} onSubmit={sendEmail} className="contact-form card-glass" data-aos="fade-up">
                    <h3>Send us a Message</h3>
                    <div className="form-group">
                        <input type="text" name="user_name" placeholder="Full Name" required />
                        <input type="email" name="user_email" placeholder="Email Address" required />
                        <input type="text" name="user_number" placeholder="Contact Number" required />
                    </div>
                    <div className="form-group">
                        <input type="text" name="user_company" placeholder="Your Company" />
                        <select name="user_service" defaultValue="">
                            <option value="" disabled>Service Interested In</option>
                            <option value="Web Development">Web Development</option>
                            <option value="Mobile App Development">Mobile App Development</option>
                            <option value="SEO Services">SEO Services</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Backend Development">Backend Development</option>
                            <option value="Cloud Solutions">Cloud Solutions</option>
                        </select>
                    </div>
                    <textarea name="message" placeholder="Project Details..." rows="5"></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>

                {/* Quick Actions */}
                <div className="quick-actions-section">
                    <div className="card-glass" data-aos="fade-up">
                        <h3>Quick Actions</h3>
                        <div className="quick-actions-grid">
                            <a href="tel:+918328826667" className="btn-quick action-call"><Phone /> Schedule a Call</a>
                            <a href="https://calendly.com/abhisek-labala01/30min" className="btn-quick action-meeting"><Calendar /> Book a Meeting</a>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="faq-section">
                    <h2 data-aos="fade-up">Frequently Asked <span>Questions</span></h2>
                    <div className="faq-container" data-aos="fade-up" data-aos-delay="100">
                        <FaqItem question="How long does a typical project take?">
                            <p>Project timelines vary. Simple websites take 2–4 weeks, while complex applications can take 8–16 weeks.</p>
                        </FaqItem>
                        <FaqItem question="Do you provide ongoing support after launch?">
                            <p>Yes, we offer comprehensive support packages including maintenance, updates, and security monitoring.</p>
                        </FaqItem>
                        <FaqItem question="What is your pricing model?">
                            <p>We offer both fixed-price packages for defined projects and flexible hourly rates for ongoing work.</p>
                        </FaqItem>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
