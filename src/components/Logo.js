import React from 'react';
import logoUrl from '../assets/img/svg/forcefield-logo-white.svg';

function Logo(props){
    return(        
        <div className="logo">
                <a href="#/">  <img className= "img-rounded" src={logoUrl} alt="logo" /> </a>
        </div>       
    )
}
export default Logo;