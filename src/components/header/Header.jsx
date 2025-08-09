import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { LiaBarsSolid } from "react-icons/lia";
import { AiOutlineClose } from "react-icons/ai";
import './header.css';

const Header = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Search', path: '/search' },
    ];

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="header-wrapper">
            <Container>
                <Row>
                    <Col>
                        <nav className="navbar">
                            <Link to="/" className="logo">Movinza</Link>

                            <button className="hamburger" onClick={toggleMenu}>
                                <span className={`icon-wrap ${menuOpen ? 'fade-out' : 'fade-in'}`}>
                                    <LiaBarsSolid className="menu-icon" />
                                </span>
                                <span className={`icon-wrap ${menuOpen ? 'fade-in' : 'fade-out'}`}>
                                    <AiOutlineClose className="menu-icon" />
                                </span>
                            </button>

                            <div className={`nav-links ${menuOpen ? 'open' : 'close'}`}>
                                {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
