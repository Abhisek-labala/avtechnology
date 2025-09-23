import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Users, Code, Atom, Server, Box, Codepen, Smartphone, Webhook, Code2, Award, Star } from 'lucide-react';

const Home = () => {
    return (
        <>
            <section className="hero" id="home">
                <div className="floating-shapes">
                    <div className="shape shape-1"><Code2 /></div>
                    <div className="shape shape-2"><Smartphone /></div>
                    <div className="shape shape-3"><Globe /></div>
                </div>
                <div className="container" data-aos="fade-up">
                    <h1>Innovate with <br /><span>AV Technology</span></h1>
                    <p>We craft exceptional digital experiences with cutting-edge technologies. From web development to mobile apps, we bring your vision to life.</p>
                    <div className="hero-buttons">
                        <Link to="/contact" className="btn btn-primary">Get Started <ArrowRight /></Link>
                        <Link to="/services" className="btn btn-secondary">View Our Work <Globe /></Link>
                    </div>
                </div>
            </section>

            <section className="stats" data-aos="fade-up">
                <div className="container">
                    <div className="stat-item">
                        <div className="icon-wrapper"><Users /></div>
                        <h3>500+</h3>
                        <p>Happy Clients</p>
                    </div>
                    <div className="stat-item">
                        <div className="icon-wrapper"><Code /></div>
                        <h3>1000+</h3>
                        <p>Projects Completed</p>
                    </div>
                    <div className="stat-item">
                        <div className="icon-wrapper"><Award /></div>
                        <h3>50+</h3>
                        <p>Awards Won</p>
                    </div>
                    <div className="stat-item">
                        <div className="icon-wrapper"><Star /></div>
                        <h3>4.9</h3>
                        <p>Client Rating</p>
                    </div>
                </div>
            </section>

            <section className="tech">
                <div className="container">
                    <h2 data-aos="fade-up">Technologies We <span>Master</span></h2>
                    <p data-aos="fade-up" data-aos-delay="100">We stay ahead of the curve with the latest and most powerful technologies.</p>
                    <div className="tech-grid">
                        <div className="tech-card" data-aos="fade-up" data-aos-delay="200"><Atom className="tech-react" /><span>React</span></div>
                        <div className="tech-card" data-aos="fade-up" data-aos-delay="250"><Server className="tech-node" /><span>Node.js</span></div>
                        <div className="tech-card" data-aos="fade-up" data-aos-delay="300"><Box className="tech-next" /><span>Next.js</span></div>
                        <div className="tech-card" data-aos="fade-up" data-aos-delay="350"><Codepen className="tech-laravel" /><span>Laravel</span></div>
                        <div className="tech-card" data-aos="fade-up" data-aos-delay="400"><Smartphone className="tech-react" /><span>React Native</span></div>
                        <div className="tech-card" data-aos="fade-up" data-aos-delay="450"><Webhook className="tech-express" /><span>Express</span></div>
                    </div>
                </div>
            </section>
            
            <section className="cta" data-aos="fade-up">
                <div className="container card-glass">
                    <h2>Ready to Transform <br />Your <span>Business?</span></h2>
                    <p>Let's discuss your project and bring your vision to life with our expertise</p>
                    <Link to="/contact" className="btn btn-primary">Start Your Project <ArrowRight /></Link>
                </div>
            </section>
        </>
    );
};

export default Home;