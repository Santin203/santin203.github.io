import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
        <Link to="/" className="site-title">
            Home
        </Link>
        <ul>
            <CustomLink to="/about">About</CustomLink>
            <CustomLink to="/projects">Projects</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
            <CustomLink to="/resume">Resume</CustomLink>
        </ul>
    </nav>
  );
}

const CustomLink = ({ to, children, ...props }: any) => {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch( {path: resolvedPath.pathname, end: true});
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}

export default Navbar;