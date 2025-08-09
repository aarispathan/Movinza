import React from 'react';
import './footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer-wrapper">
            <Container>
                <Row className="gy-4 text-center text-md-start">
                    <Col xs={12} md={6}>
                        <div className="footer-brand">
                            <h2>Movinza</h2>
                            <p>Discover and explore movies effortlessly.</p>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <a href="/">Home</a>
                            <a href="/about">About</a>
                            <a href="/contact">Contact</a>
                            <a href="/privacy">Privacy Policy</a>
                        </div>
                    </Col>

                    <Col xs={12} md={3}>
                        <div className="footer-social">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaTwitter /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaLinkedinIn /></a>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h3>Contact Us</h3>
                            <p>Email: support@mymovieapp.com</p>
                        </div>
                    </Col>
                </Row>

                <hr className="footer-divider" />

                <Row>
                    <Col>
                        <div className="footer-bottom">
                            <p>&copy; {new Date().getFullYear()} MyMovieApp. All rights reserved.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
