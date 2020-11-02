import React from 'react';
import { Link } from 'react-router-dom';

import theme from '../../utils/theme';
import './Footer.css';

import twitter from '../../utils/assets/twitter.png';
import medium from '../../utils/assets/medium.png';
import discord from '../../utils/assets/discord.png';
import github from '../../utils/assets/github.png';
import telegram from '../../utils/assets/telegram.png';
import whitepaper from '../../utils/assets/whitepaper.png';

function Footer() {

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="d-flex align-items-center justify-content-center mx-2 p-1 social-media-wrapper">
                            <Link to='/'>
                                <img src={twitter} alt="twitter" className="" />
                            </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mx-2 p-1 social-media-wrapper">
                            <Link to='/'>
                                <img src={discord} alt="discord" className="" />
                            </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mx-2 p-1 social-media-wrapper">
                            <Link to='/'>
                                <img src={github} alt="github" className="" />
                            </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mx-2 p-1 social-media-wrapper">
                            <Link to='/'>
                                <img src={medium} alt="medium" className="" />
                            </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mx-2 p-1 social-media-wrapper">
                            <Link to='/'>
                                <img src={telegram} alt="telegram" className="" />
                            </Link>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mx-2 p-1 social-media-wrapper">
                            <Link to='/'>
                                <img src={whitepaper} alt="whitepaper" className="" />
                            </Link>
                        </div>
                    </div>
                    <p className="text-center mt-4 mb-0">Copyright &copy; 2020 YFDOT. All Right Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
