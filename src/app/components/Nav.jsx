"use client"
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Nav = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#97C4B8] z-10">
            <div>
                <Link to="hero" smooth={true} duration={500}>
                    <img src="https://imgur.com/ooU8N2U.png" alt="Logo" style={{ width: '50px' }} className="rounded" />
                </Link>
            </div>

            {/* Menu */}
            <ul className="hidden lg:flex space-x-5">
                <li className="cursor-pointer hover:font-bold font-semibold">
                    <Link to="mission" smooth={true} duration={500} >
                        Mission
                    </Link>
                </li>
                <li className="cursor-pointer hover:font-bold font-semibold">
                    <Link to="donation" smooth={true} duration={500} >
                        Donation
                    </Link>
                </li>
                <li className="cursor-pointer hover:font-bold font-semibold">
                    <Link to="about" smooth={true} duration={500} >
                        About
                    </Link>
                </li>
                <li className="cursor-pointer hover:font-bold font-semibold">
                    <Link to="contact" smooth={true} duration={500} >
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger  */}
            <div onClick={handleClick} className='lg:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menu */}
            <ul className={
                !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#CCF3EE] flex flex-col justify-center items-center'
            }>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="mission" smooth={true} duration={500} >
                        Mission
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="donation" smooth={true} duration={500} >
                        Donation
                    </Link>
                </li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="about" smooth={true} duration={500} >
                    About
                </Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact" smooth={true} duration={500} >
                    Contact
                </Link></li>
            </ul>
        </div>
    )
}

export default Nav