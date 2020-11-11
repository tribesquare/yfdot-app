import React from 'react';
// import { Link } from 'react-router-dom';

import theme from '../../utils/theme';
import './Footer.css';

import {  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegramPlane, faTwitter } from '@fortawesome/free-brands-svg-icons';

// import twitter from '../../utils/assets/twitter.png';
// import medium from '../../utils/assets/medium.png';
// import discord from '../../utils/assets/discord.png';
// import github from '../../utils/assets/github.png';
// import telegram from '../../utils/assets/telegram.png';
// import whitepaper from '../../utils/assets/whitepaper.png';

function Footer() {

    return (
        <footer className="footer-section">
            <div className="container">
                <div className="">
                    <div className="d-flex align-items-center justify-content-center">
                        <div className="d-flex align-items-center justify-content-center mx-2 p-1 social-media-wrapper">
                            <a href="https://twitter.com/YfdiaF">
                                <FontAwesomeIcon icon={faTwitter} color={theme.colors.white} style={{fontSize: "22px"}} />
                                {/* <img src={twitter} alt="twitter" className="" /> */}
                            </a>
                        </div>
                        {/* <div className="d-flex align-items-center justify-content-center mx-2 p-1 social-media-wrapper">
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
                        </div> */}
                        <div className="d-flex align-items-center justify-content-center mx-2 p-1 social-media-wrapper">
                            <a href="https://t.me/joinchat/UeOVvx25ULpTxf9YzBn3KA" target="_blank" rel="noopener noreferrer">
                                {/* <img src={telegram} alt="telegram" className="" /> */}
                                <FontAwesomeIcon icon={faTelegramPlane} color={theme.colors.white} style={{fontSize: "22px"}} />
                            </a>
                        </div>
                        {/* <div className="d-flex align-items-center justify-content-center mx-2 p-1 social-media-wrapper">
                            <Link to='/'>
                                <img src={whitepaper} alt="whitepaper" className="" />
                            </Link>
                        </div> */}
                    </div>
                    <p className="text-center mt-4 mb-0">Copyright &copy; 2020 YFDIA. All Right Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
