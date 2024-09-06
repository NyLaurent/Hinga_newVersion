import React from 'react';
import { useEffect, useState } from 'react';
import logo from '../assets/logg.png';
import { FaXmark, FaBarsStaggered } from "react-icons/fa6";
import { Link as ScrollLink } from 'react-scroll';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { link: 'Home', path: 'home' },
        { link: 'Service', path: 'service' },
        { link: 'About', path: 'about' },
        { link: 'Product', path: 'product' },
        { link: 'FAQ', path: 'faq' }
    ];

    return (
        <Router>
            <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
                <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 right-0 border-b bg-white duration-300" : ""}`}>
                    <div className='flex justify-between items-center cursor-pointer text-base gap-8'>
                        <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
                            <img src={logo} alt="" className='w-12 inline-block items-center' />
                            <span className='text-[#263238]'>HINGA</span>
                        </a>
                        <ul className='md:flex space-x-12 hidden'>
                            {
                                navItems.map(({ link, path }) =>
                                    <ScrollLink to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray-900 hover:text-brandPrimary first:font-medium'>{link}</ScrollLink>
                                )
                            }
                        </ul>
                        <div className='space-x-12 hidden lg:flex items-center'>
                            <NavLink to="/login" className='hidden lg:flex items-center text-brandPrimary hover:text-gray-900'>Login</NavLink>
                            <button className='btnPrimary'>SignUp</button>
                        </div>
                        <div className='md:hidden'>
                            <button
                                onClick={toggleMenu} className=' text-neutralDGrey focus:outline-none focus:text-gray-500'>
                                {
                                    isMenuOpen ? (<FaXmark className='h-6 w-6 ' />) : (<FaBarsStaggered className='h-6 w-6 '/>)
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`space-y-4 px-4 mt-16 py-7 bg-brandPrimary ${isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"}`}>
                        {
                            navItems.map(({ link, path }) =>
                                <ScrollLink to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white hover:text-brandPrimary first:font-medium'>{link}</ScrollLink>
                            )
                        }
                    </div>
                </nav>
            </header>

            
        </Router>
    );
};

export default Navbar;
