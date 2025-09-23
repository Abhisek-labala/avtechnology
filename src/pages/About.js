import React from 'react';
import { Target, Eye, Lightbulb, Heart, Gem, Handshake, Award } from 'lucide-react';
import teamImage from '../assets/images.PNG'; // Make sure this image is in src/assets/

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="about-header" data-aos="fade-up">
                    <h2>About <span>AV Technology</span></h2>
                    <p>We're a passionate team of developers, designers, and innovators dedicated to transforming businesses through cutting-edge technology solutions.</p>
                </div>

                <div className="about-story-grid" data-aos="fade-up">
                    <div className="about-image-wrapper">
                        <img src={teamImage} alt="Team member working" className="about-image" />
                    </div>
                    <div className="about-story-content">
                        <h3>Our <span>Story</span></h3>
                        <p>Founded in 2018, AV Technology emerged from a simple vision: to bridge the gap between innovative technology and real-world business solutions. What started as a small team has grown into a full-service digital agency.</p>
                        <p>Today, we're proud to have helped over 500 businesses transform their digital presence with our expertise in React, Node.js, Laravel, React Native, and more. Our commitment to excellence and innovation drives everything we do.</p>
                    </div>
                </div>

                <div className="about-mission-grid" data-aos="fade-up">
                    <div className="card-glass mission-vision-card">
                        <Target />
                        <h4>Our Mission</h4>
                        <p>To empower businesses with innovative technology solutions that drive growth, enhance user experiences, and create lasting digital impact in an ever-evolving world.</p>
                    </div>
                    <div className="card-glass mission-vision-card">
                        <Eye />
                        <h4>Our Vision</h4>
                        <p>To be the leading technology partner that businesses trust to navigate the digital landscape, setting new standards for innovation, quality, and client satisfaction.</p>
                    </div>
                </div>

                <div className="values-section" data-aos="fade-up">
                    <h3>Our <span>Values</span></h3>
                    <p>These core values guide every decision we make and every solution we create.</p>
                    <div className="values-grid">
                        <div className="card-glass value-card" data-aos="fade-up" data-aos-delay="100">
                            <Lightbulb />
                            <h5>Innovation</h5>
                            <p>We consistently push boundaries and embrace cutting-edge technologies to deliver exceptional solutions.</p>
                        </div>
                        <div className="card-glass value-card" data-aos="fade-up" data-aos-delay="200">
                            <Heart />
                            <h5>Passion</h5>
                            <p>Our team is passionate about creating digital experiences that make a real difference.</p>
                        </div>
                        <div className="card-glass value-card" data-aos="fade-up" data-aos-delay="300">
                            <Gem />
                            <h5>Excellence</h5>
                            <p>We strive for perfection in every project, ensuring the highest quality standards.</p>
                        </div>
                        <div className="card-glass value-card" data-aos="fade-up" data-aos-delay="400">
                            <Handshake />
                            <h5>Collaboration</h5>
                            <p>We work closely with our clients as partners to achieve their business goals.</p>
                        </div>
                    </div>
                </div>
                
                {/* AWARD SECTION ADDED BACK IN */}
                <div className="awards-section-updated" data-aos="fade-up">
                    <div className="card-glass">
                        <Award size={40} className="award-icon"/>
                        <h3><span>Award-Winning</span> Excellence</h3>
                        <p>Our commitment to excellence has been recognized by industry leaders and clients alike. We've received over 50 awards for our innovative solutions and outstanding service.</p>
                        <div className="awards-grid">
                            <div className="award-item">
                                <h4>2024</h4>
                                <p>Best Web Development Agency</p>
                            </div>
                            <div className="award-item">
                                <h4>2023</h4>
                                <p>Innovation in Mobile Apps</p>
                            </div>
                            <div className="award-item">
                                <h4>2022</h4>
                                <p>Client Satisfaction Excellence</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;