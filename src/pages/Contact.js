import React from 'react';
import FaqItem from '../components/FaqItem';
import { Mail, Phone, MapPin, Calendar, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="container">
                <h2 data-aos="fade-up">Get In <span>Touch</span></h2>
                <p data-aos="fade-up" data-aos-delay="100">Ready to transform your business? Let's discuss your vision.</p>
                <div className="contact-grid">
                    <div className="card-glass contact-card" data-aos="fade-up" data-aos-delay="200"><Mail /><h4>Email Us</h4><p>info@avtechnology.com</p></div>
                    <div className="card-glass contact-card" data-aos="fade-up" data-aos-delay="300"><Phone /><h4>Call Us</h4><p>+1 (555) 123-4567</p></div>
                    <div className="card-glass contact-card" data-aos="fade-up" data-aos-delay="400"><MapPin /><h4>Visit Us</h4><p>123 Tech Street, Digital City</p></div>
                </div>
                <form className="contact-form card-glass" data-aos="fade-up">
                    <h3>Send us a Message</h3>
                    <div className="form-group"><input type="text" placeholder="Full Name" required /><input type="email" placeholder="Email Address" required /></div>
                    <div className="form-group">
                        <input type="text" placeholder="Your Company" />
                        <select defaultValue="">
                            <option value="" disabled>Service Interested In</option>
                            <option value="web">Web Development</option>
                            <option value="mobile">Mobile App Development</option>
                            <option value="seo">SEO Services</option>
                            <option value="ui-ux">UI/UX Design</option>
                            <option value="backend">Backend Development</option>
                            <option value="cloud">Cloud Solutions</option>
                        </select>
                    </div>
                    <textarea placeholder="Project Details..." rows="5"></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>

                <div className="quick-actions-section">
                    <div className="card-glass" data-aos="fade-up">
                        <h3>Quick Actions</h3>
                        <div className="quick-actions-grid">
                            <a href="#" className="btn-quick action-call"><Phone /> Schedule a Call</a>
                            <a href="#" className="btn-quick action-meeting"><Calendar /> Book a Meeting</a>
                            <a href="#" className="btn-quick action-chat"><MessageCircle /> Live Chat</a>
                        </div>
                    </div>
                </div>

                <div className="faq-section">
                     <h2 data-aos="fade-up">Frequently Asked <span>Questions</span></h2>
                     <div className="faq-container" data-aos="fade-up" data-aos-delay="100">
                         <FaqItem question="How long does a typical project take?">
                             <p>Project timelines vary. Simple websites take 2-4 weeks, while complex web applications can take 8-16 weeks.</p>
                         </FaqItem>
                         <FaqItem question="Do you provide ongoing support after launch?">
                              <p>Yes, we offer comprehensive support packages including maintenance, updates, security monitoring, and technical support.</p>
                         </FaqItem>
                          <FaqItem question="What is your pricing model?">
                             <p>We offer both fixed-price packages for well-defined projects and flexible hourly rates for ongoing work.</p>
                         </FaqItem>
                     </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;