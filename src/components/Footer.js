import React from 'react';
import logoWhite from '../assets/img/svg/forcefield-logo-white.svg';

function Footer(props){
    return(
        <React.Fragment>
            <footer>
                <div className="container">
                    <div className="grid">
                        <div className="grid__col-xs-12">
                            <div className="footer-logo">
                                <a href="#/"><img src={logoWhite} alt="logo white" /></a>
                            </div>

                            <div className="contacts">
                                <p>Georgia-Pacific Wood Products</p>
                                <p>133 Peachtree Street, NE</p>
                                <p>Atlanta, GA 30303</p>
                                <p>800-284-5347</p>
                                <p>woodproducts@gapac.com</p>
                            </div>

                            <div className="copyright">
                                <p>©2017 Georgia-Pacific Wood Products LLC. All rights reserved.</p>
                                <p>FORCEFIELD, GEORGIA-PACIFIC, and the GP and FORCEFIELD logos are trademarks owned by or licensed to Georgia-Pacific Wood Products LLC.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    )
}
export default Footer;