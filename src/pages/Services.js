import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutTemplate, Smartphone, Cloud, Search, PenTool, Database, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const Services = () => {
    return (
        <>
            <section className="services" id="services">
                <div className="container">
                    <h2 data-aos="fade-up">Our <span>Services</span></h2>
                    <p data-aos="fade-up" data-aos-delay="100">Comprehensive technology solutions to transform your business and drive growth.</p>
                    <div className="service-grid">
                        
                        {/* Web Development Card */}
                        <div className="card-glass service-card" data-aos="fade-up">
                            <div className="service-icon-wrapper"><LayoutTemplate size={32} /></div>
                            <h4>Web Development</h4>
                            <p>Custom web applications built with modern frameworks like React, Next.js, and Laravel.</p>
                            <h5>Technologies:</h5>
                            <div className="tags"><span className="tag">React</span><span className="tag">Next.js</span><span className="tag">Laravel</span><span className="tag">Node.js</span><span className="tag">Express</span></div>
                            <h5>Key Features:</h5>
                            <ul>
                                <li><CheckCircle /> Responsive Design</li>
                                <li><CheckCircle /> Performance Optimization</li>
                                <li><CheckCircle /> SEO-Friendly Architecture</li>
                                <li><CheckCircle /> Cross-browser Compatibility</li>
                                <li><CheckCircle /> Progressive Web Apps</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary">Get Quote <ArrowRight /></Link>
                        </div>

                        {/* Mobile App Development Card */}
                         <div className="card-glass service-card" data-aos="fade-up" data-aos-delay="100">
                           <div className="service-icon-wrapper"><Smartphone size={32} /></div>
                            <h4>Mobile App Development</h4>
                            <p>Native and cross-platform mobile applications that deliver exceptional user experiences.</p>
                            <h5>Technologies:</h5>
                            <div className="tags"><span className="tag">React Native</span><span className="tag">Flutter</span><span className="tag">iOS</span><span className="tag">Android</span></div>
                             <h5>Key Features:</h5>
                            <ul>
                                <li><CheckCircle /> Cross-platform Development</li>
                                <li><CheckCircle /> Native Performance</li>
                                <li><CheckCircle /> App Store Optimization</li>
                                <li><CheckCircle /> Push Notifications</li>
                                <li><CheckCircle /> Offline Functionality</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary">Get Quote <ArrowRight /></Link>
                        </div>

                        {/* SEO Services Card */}
                         <div className="card-glass service-card" data-aos="fade-up" data-aos-delay="200">
                            <div className="service-icon-wrapper"><Search size={32} /></div>
                            <h4>SEO Services</h4>
                            <p>Comprehensive SEO strategies to boost your online visibility and drive organic traffic.</p>
                             <h5>Technologies:</h5>
                            <div className="tags"><span className="tag">Google Analytics</span><span className="tag">Search Console</span><span className="tag">SEMrush</span><span className="tag">Ahrefs</span></div>
                             <h5>Key Features:</h5>
                            <ul>
                                <li><CheckCircle /> Keyword Research</li>
                                <li><CheckCircle /> On-page Optimization</li>
                                <li><CheckCircle /> Technical SEO</li>
                                <li><CheckCircle /> Content Strategy</li>
                                <li><CheckCircle /> Performance Tracking</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary">Get Quote <ArrowRight /></Link>
                        </div>

                        {/* UI/UX Design Card */}
                        <div className="card-glass service-card" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-icon-wrapper"><PenTool size={32} /></div>
                            <h4>UI/UX Design</h4>
                            <p>Beautiful, intuitive designs that enhance user engagement and conversion rates.</p>
                            <h5>Technologies:</h5>
                            <div className="tags"><span className="tag">Figma</span><span className="tag">Adobe XD</span><span className="tag">Sketch</span><span className="tag">Principle</span></div>
                            <h5>Key Features:</h5>
                            <ul>
                                <li><CheckCircle /> User Research</li>
                                <li><CheckCircle /> Wireframing & Prototyping</li>
                                <li><CheckCircle /> Visual Design</li>
                                <li><CheckCircle /> Usability Testing</li>
                                <li><CheckCircle /> Design Systems</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary">Get Quote <ArrowRight /></Link>
                        </div>

                        {/* Backend Development Card */}
                        <div className="card-glass service-card" data-aos="fade-up" data-aos-delay="400">
                            <div className="service-icon-wrapper"><Database size={32} /></div>
                            <h4>Backend Development</h4>
                            <p>Robust, scalable backend solutions with secure APIs and database management.</p>
                             <h5>Technologies:</h5>
                            <div className="tags"><span className="tag">Node.js</span><span className="tag">PHP</span><span className="tag">Python</span><span className="tag">MongoDB</span><span className="tag">PostgreSQL</span></div>
                            <h5>Key Features:</h5>
                            <ul>
                                <li><CheckCircle /> RESTful APIs</li>
                                <li><CheckCircle /> Database Design</li>
                                <li><CheckCircle /> Authentication Systems</li>
                                <li><CheckCircle /> Real-time Features</li>
                                <li><CheckCircle /> Microservices Architecture</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary">Get Quote <ArrowRight /></Link>
                        </div>

                        {/* Cloud Solutions Card */}
                         <div className="card-glass service-card" data-aos="fade-up" data-aos-delay="500">
                           <div className="service-icon-wrapper"><Cloud size={32} /></div>
                            <h4>Cloud Solutions</h4>
                            <p>Scalable cloud infrastructure and deployment solutions for modern applications.</p>
                            <h5>Technologies:</h5>
                            <div className="tags"><span className="tag">AWS</span><span className="tag">Google Cloud</span><span className="tag">Azure</span><span className="tag">Docker</span><span className="tag">Kubernetes</span></div>
                             <h5>Key Features:</h5>
                            <ul>
                                <li><CheckCircle /> Cloud Migration</li>
                                <li><CheckCircle /> Auto-scaling</li>
                                <li><CheckCircle /> Load Balancing</li>
                                <li><CheckCircle /> Monitoring & Analytics</li>
                                <li><CheckCircle /> Disaster Recovery</li>
                            </ul>
                            <Link to="/contact" className="btn btn-primary">Get Quote <ArrowRight /></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="process" data-aos="fade-up">
                <div className="container">
                    <h2>Our <span>Process</span></h2>
                    <p>A proven methodology that ensures successful project delivery.</p>
                    <div className="process-timeline">
                        <div className="timeline-item" data-aos="fade-up"><div className="timeline-dot">01</div><div className="timeline-content"><h4>Discovery</h4><p>Understanding your needs and goals</p></div></div>
                        <div className="timeline-item" data-aos="fade-up" data-aos-delay="100"><div className="timeline-dot">02</div><div className="timeline-content"><h4>Planning</h4><p>Creating a detailed project roadmap</p></div></div>
                        <div className="timeline-item" data-aos="fade-up" data-aos-delay="200"><div className="timeline-dot">03</div><div className="timeline-content"><h4>Development</h4><p>Building with cutting-edge technologies</p></div></div>
                        <div className="timeline-item" data-aos="fade-up" data-aos-delay="300"><div className="timeline-dot">04</div><div className="timeline-content"><h4>Launch</h4><p>Deployment and ongoing support</p></div></div>
                    </div>
                </div>
            </section>

             <section className="pricing" id="pricing">
                <div className="container">
                    <h2 data-aos="fade-up">Pricing <span>Packages</span></h2>
                    <p data-aos="fade-up" data-aos-delay="100">Flexible pricing options to suit businesses of all sizes.</p>
                    <div className="pricing-grid">
                        <div className="card-glass price-card" data-aos="fade-up" data-aos-delay="200">
                            <h4>Starter</h4>
                            <p className="price">$2,999</p>
                            <p className="price-description">Perfect for small businesses and startups.</p>
                            <ul>
                                <li><CheckCircle /> Responsive Website</li>
                                <li><CheckCircle /> Basic SEO Setup</li>
                                <li><CheckCircle /> Contact Forms</li>
                                <li><CheckCircle /> 3 Months Support</li>
                                <li><CheckCircle /> Mobile Optimization</li>
                            </ul>
                            <Link to="/contact" className="btn-price">GET STARTED <ArrowRight size={16}/></Link>
                        </div>
                        <div className="card-glass price-card featured" data-aos="fade-up" data-aos-delay="300">
                            <h4>Professional</h4>
                            <p className="price">$7,999</p>
                             <p className="price-description">Ideal for growing businesses.</p>
                            <ul>
                                <li><CheckCircle /> Custom Web Application</li>
                                <li><CheckCircle /> Advanced SEO</li>
                                <li><CheckCircle /> CMS Integration</li>
                                <li><CheckCircle /> 6 Months Support</li>
                                <li><CheckCircle /> Performance Analytics</li>
                            </ul>
                            <Link to="/contact" className="btn-price featured-btn">GET STARTED <ArrowRight size={16}/></Link>
                        </div>
                        <div className="card-glass price-card" data-aos="fade-up" data-aos-delay="400">
                            <h4>Enterprise</h4>
                            <p className="price">$15,999</p>
                            <p className="price-description">Complete solution for large organizations.</p>
                            <ul>
                                <li><CheckCircle /> Full-stack Development</li>
                                <li><CheckCircle /> Mobile App Included</li>
                                <li><CheckCircle /> Cloud Infrastructure</li>
                                <li><CheckCircle /> 12 Months Support</li>
                                <li><CheckCircle /> Dedicated Team</li>
                            </ul>
                            <Link to="/contact" className="btn-price">GET STARTED <ArrowRight size={16}/></Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta final-cta" data-aos="fade-up">
                <div className="container card-glass">
                    <div className="cta-icon"><Zap /></div>
                    <h2>Ready to Get Started?</h2>
                    <p>Let's discuss your project requirements and create something amazing together.</p>
                    <div className="cta-buttons">
                        <Link to="/contact" className="btn btn-primary">Get Free Consultation <ArrowRight /></Link>
                        <Link to="#" className="btn btn-dark">View Portfolio</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;