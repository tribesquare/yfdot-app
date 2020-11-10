import React from 'react';
// import { Link } from 'react-router-dom';
import AppLayout from '../../layout/AppLayout/AppLayout';

import './HomeView.css';

// import { faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../utils/assets/logo.png';
// import bitkeep from '../../utils/assets/bitkeep.png';
// import catex from '../../utils/assets/catex.png';
import cointiger from '../../utils/assets/cointiger.png';
// import cryptomaster from '../../utils/assets/cryptomaster.png';
import digifinex from '../../utils/assets/digifinex.png';
// import dpanquan from '../../utils/assets/dpanquan.png';
import hotbit from '../../utils/assets/hotbit.png';
// import huoxing from '../../utils/assets/huoxing.png';
import rm1 from '../../utils/assets/rm1.png';
import rm2 from '../../utils/assets/rm2.png';
import rm3 from '../../utils/assets/rm3.png';
// import rm4 from '../../utils/assets/rm4.png';
// import rm5 from '../../utils/assets/rm5.png';
import tokeninfo from '../../utils/assets/tokeninfo.webp';
// import unibot from '../../utils/assets/unibot.png';
// import uniswap from '../../utils/assets/uniswap.png';

function HomeView() {

    return (
        <AppLayout>
            <main className="home-section">
                <section className="introduction-section">
                    <div className="container">
                        <h3 className="text-center">YEARN FINANCE DIA (YFDIA)</h3>
                        <p className="text-center">
                        YFDIA's For Innovative Investment. YFDIA is a community-owned DeFi infrastructure where its users determine what products they want and enjoy the yields.
                        </p>
                        {/* <div class="alert alert-warning text-center" role="alert">
                            <FontAwesomeIcon icon={faExclamationTriangle} /> <span className="font-weight-bold">Warning !!</span> Our Telegram official group is <Link to='/'>@YFDIA_Official</Link> and our Telegram official channel is <Link to='/'>@YFDIA_Finance</Link>. Apart from these, any other groups are scam.
                        </div>
                        <div class="alert alert-primary text-center" role="alert">
                            <FontAwesomeIcon icon={faInfoCircle} /> <span className="font-weight-bold">Audit Reports</span> This is the result of our token audit report from DPANQUAN, you can see it here : <Link to='/'>Audit Result</Link> and <Link to='/'>Audit Certificate</Link>. You can check it directly on the <Link to='/'>DPANQUAN official site</Link>.
                        </div> */}
                    </div>
                </section>
                <section className="token-profile">
                    <div className="container">
                        <div className="row token-profile-content">
                            <div className="col-md-6 mt-3">
                                <div className="h-100">
                                    <img src={tokeninfo} alt="token info" className="d-block w-100" />
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div className="d-flex flex-column justify-content-center h-100 py-3">
                                    <div className="d-flex align-items-center caption mb-4">
                                        <img src={logo} alt="logo" />
                                        <h4 className="mb-0"> &nbsp; YFDIA Token Profile</h4>
                                    </div>
                                    <p className="mb-0">0x23d4c243960166d8a247dfe9047396ba15d4d107</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Ticker</td>
                                                <td>: YFDIA</td>
                                            </tr>
                                            <tr>
                                                <td>Decimal</td>
                                                <td>: 18</td>
                                            </tr>
                                            <tr>
                                                <td>Token Based</td>
                                                <td>: ERC20</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="tokenomic-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 mt-3">
                                <div className="">
                                    <h4 className="">YFDIA Tokenomic</h4>
                                    <div className="mt-4">
                                        <div className="mb-2">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0">Presale</p>
                                                <h6 className="mb-0">5000 YFDIA</h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width: '40%'}} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0">Uni</p>
                                                <h6 className="mb-0">1000 YFDIA</h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0">Farming</p>
                                                <h6 className="mb-0">1300 YFDIA</h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width: '20%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0">Dev Team</p>
                                                <h6 className="mb-0">200 YFDIA</h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width: '5%'}} aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        {/* <div className="mb-2">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0">Marketing</p>
                                                <h6 className="mb-0">2,355 YFDOT</h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width: '10%'}} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="mb-2">
                                            <div className="d-flex align-items-center justify-content-between">
                                                <p className="mb-0">Development</p>
                                                <h6 className="mb-0">4,156.25 YFDOT</h6>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 mt-3"></div>
                        </div>
                    </div>
                </section>
                <section className="info-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mt-3"></div>
                            <div className="col-md-7 mt-3">
                                <div className="">
                                    <h4 className="">YFDIA Info</h4>
                                    <table className="table table-borderless mt-4">
                                        <tbody>
                                            <tr>
                                                <td>Total Supply</td>
                                                <td>: 7,500 YFDIA</td>
                                            </tr>
                                            <tr>
                                                <td>Ciculating Supply</td>
                                                <td>: 7,500 YFDIA</td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>: 40$</td>
                                            </tr>
                                            <tr>
                                                <td>Presale</td>
                                                <td>: 500 YFDIA </td>
                                            </tr>
                                            <tr>
                                                <td>Uniswap Liquidity</td>
                                                <td>: 1000  YFDIA and equivalent in ETH</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <p className="mb-0 mt-4">
                                        - Will burn 3 times, Total Burn 15% of the Total Supply. <br />
                                        - Team tokens amount will be locked for 18 months. <br />
                                        - Stake Pool Allocation will be unlocked when the Staking platform is live.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="roadmap-section">
                    <div className="container">
                        <h4 className="text-center">Roadmap</h4>
                        <div className="row mt-4">
                            <div className="col-md-6 offset-md-3">
                                <div className="position-relative p-5 text-right rm rm-1">
                                    <h6 className="">November 2020</h6>
                                    <p className="mb-0">
                                        Hotbit - <br />
                                        Coin tiger - <br />
                                        Digifinex - <br />
                                        Farming and staking -
                                    </p>
                                    <div className="rm-image-wrapper-1">
                                        <img src={rm1} alt="rm1" className="d-block w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="position-relative p-5 rm rm-2">
                                    <h6 className="">December 2020</h6>
                                    <p className="mb-0">
                                        - MXC listings.
                                    </p>
                                    <div className="rm-image-wrapper-2">
                                        <img src={rm2} alt="rm1" className="d-block w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="position-relative p-5 text-right rm rm-3">
                                    <h6 className="">Januaury 2020</h6>
                                    <p className="mb-0">
                                        - Launch of the Borrow platform.
                                    </p>
                                    <div className="rm-image-wrapper-3">
                                        <img src={rm3} alt="rm1" className="d-block w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="position-relative p-5 rm rm-4">
                                    <h6 className="">2021 Q1</h6>
                                    <p className="mb-0">
                                        - Third Burning 5% of the Total Supply. <br />
                                        - Expand the network. <br />
                                        - Launch of the Borrow platform. <br />
                                        - Launch of the Mortgage platform. <br />
                                        - Listing on the top 10 CMC Exchanges.
                                    </p>
                                    <div className="rm-image-wrapper-4">
                                        <img src={rm4} alt="rm1" className="d-block w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 offset-md-3">
                                <div className="position-relative p-5 text-right rm rm-5">
                                    <h6 className="">2021 Q2</h6>
                                    <p className="mb-0">
                                        - Development of Mobile app for Staking, Barter, Borrow and Mortgage.
                                        - 3rd Marketing Campaign.
                                    </p>
                                    <div className="rm-image-wrapper-5">
                                        <img src={rm5} alt="rm1" className="d-block w-100" />
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
                <section className="listing-section">
                    <div className="container">
                        <h4 className="text-center">Exchanges</h4>
                        <div className="row mt-4">
                            <div className="col-md-4 mt-3">
                                <div className="d-flex justify-content-center align-items-center listing-wrapper py-3 px-2">
                                    <span className="d-flex justify-content-center align-items-center">
                                        <img src={hotbit} alt="hotbit" className="d-block" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div className="d-flex justify-content-center align-items-center listing-wrapper py-3 px-2">
                                    <span className="d-flex justify-content-center align-items-center">
                                        <img src={cointiger} alt="cointiger" className="d-block" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div className="d-flex justify-content-center align-items-center listing-wrapper py-3 px-2">
                                    <span className="d-flex justify-content-center align-items-center">
                                        <img src={digifinex} alt="digifinex" className="d-block" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row mt-4">
                            <div className="col-md-4 offset-md-2 mt-3">
                                <div className="d-flex justify-content-center align-items-center listing-wrapper py-3 px-2">
                                    <Link to='/' className="d-flex justify-content-center align-items-center">
                                        <img src={catex} alt="catex" className="d-block" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div className="d-flex justify-content-center align-items-center listing-wrapper py-3 px-2">
                                    <Link to='/' className="d-flex justify-content-center align-items-center">
                                        <img src={uniswap} alt="uniswap" className="d-block" />
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </section>
                {/* <section className="partner-section">
                    <div className="container">
                        <h4 className="text-center">Partners</h4>
                        <div className="row mt-4">
                            <div className="col-md-4 mt-3">
                                <div className="d-flex justify-content-center align-items-center listing-wrapper py-3 px-2">
                                    <Link to='/' className="d-flex justify-content-center align-items-center">
                                        <img src={huoxing} alt="huoxing" className="d-block" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div className="d-flex justify-content-center align-items-center listing-wrapper py-3 px-2">
                                    <Link to='/' className="d-flex justify-content-center align-items-center">
                                        <img src={dpanquan} alt="dpanquan" className="d-block" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div className="d-flex justify-content-center align-items-center listing-wrapper py-3 px-2">
                                    <Link to='/' className="d-flex justify-content-center align-items-center">
                                        <img src={bitkeep} alt="bitkeep" className="d-block" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-md-4 offset-md-2 mt-3">
                                <div className="d-flex justify-content-center align-items-center listing-wrapper py-3 px-2">
                                    <Link to='/' className="d-flex justify-content-center align-items-center">
                                        <img src={unibot} alt="unibot" className="d-block" />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 mt-3">
                                <div className="d-flex justify-content-center align-items-center listing-wrapper py-3 px-2">
                                    <Link to='/' className="d-flex justify-content-center align-items-center">
                                        <img src={cryptomaster} alt="cryptomaster" className="d-block" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </main>
        </AppLayout>
    )
}

export default HomeView;
