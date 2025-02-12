"use client"
import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div name='hero' className="flex flex-col lg:flex-row items-center justify-center w-full h-screen p-5">
            <div className="p-5 lg:w-[40vw]">
                <img src="https://imgur.com/9rKqJi7.png" alt="hero img" />
            </div>
            <div className="lg:w-[60vw] lg:h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-2 underline">Donation For Strays</h2>
                <p className="text-lg lg:text-xl py-2 px-5 text-center">
                The Stray Animal Donation App is a digital platform designed to facilitate and streamline financial support for stray animal welfare organizations and initiatives. This innovative app bridges the gap between those willing to help and the animals in need, providing hope and a brighter future for our furry friends.</p>
                <Link to="donation" smooth={true} duration={500}>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-xl font-semibold bg-[#950101] text-white px-2 py-1 rounded-lg hover:bg-[#FF0000] m-3">Donate Now</motion.button>
                </Link>
            </div>
        </div>
    )
}

export default Hero