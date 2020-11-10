import React from 'react';
import { Link } from 'react-router-dom';

import theme from '../../utils/theme';

import './Header.css';

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../utils/assets/logo.png';

const Header = () => {

    return (
        <header className="header-section">
            <nav className="navbar navbar-expand-lg py-4">
                <div className="container">
                    <div className="navbar-brand d-flex align-items-center">
                        <Link to='/'>
                            <img src={logo} alt="logo" />&nbsp; <span style={{color: `${theme.colors.white}`}}>YFDIA</span>
                        </Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <FontAwesomeIcon icon={faBars} color={theme.colors.white} />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-center">
                            <li className="nav-item">
                                <Link to='/'>
                                    <span className={`nav-link px-3`}>Home</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div class="dropdown">
                                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Platform
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">
                                                <Link to='/'>
                                                    <span className="">Stake</span>
                                                </Link>
                                            </li>
                                            <li class="list-group-item">
                                                <Link to='/'>
                                                    <span className="">Farm</span>
                                                </Link>
                                            </li>
                                            <li class="list-group-item">
                                                <Link to='/'>
                                                    <span className="">Barter</span>
                                                </Link>
                                            </li>
                                            <li class="list-group-item">
                                                <Link to='/'>
                                                    <span className="">Borrow</span>
                                                </Link>
                                            </li>
                                            <li class="list-group-item">
                                                <Link to='/'>
                                                    <span className="">Mortgage</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link to='/'>
                                    <span className={`nav-link px-3`}>Latest Updates</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/'>
                                    <span className={`nav-link px-3`}>Liquidity</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/'>
                                    <span className={`nav-link px-3`}>Telegram</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="ml-auto">
                            <button className="btn btn-outline-secondary" >Stake Now</button>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
