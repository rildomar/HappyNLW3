import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"

import '../styles/pages/landing.css';

import logo from '../images/logo.svg'

function Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
            <motion.img 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5}}
                src={logo} alt="Happy"/>

            <motion.main
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5}}
            >
                <h1>
                    Leve felicidade para o mundo.
                </h1>
                <p>
                    Visite orfanatos e mude o dia de muitas crianças.
                </p>
            </motion.main>

            <motion.div 
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5}}
                className="location">
                <strong>João Pessoa</strong>
                <span>Paraiba</span>
            </motion.div>

            <motion.div 
                className="enter-app"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5}}
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.8 }}
            >
                <Link to="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </Link> 
            </motion.div>
        </div>
      </div>
    );
}

export default Landing;