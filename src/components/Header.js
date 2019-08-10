import React from 'react';
import Logo from './Logo'
import NavBar from './NavBar';

function Header(props){
    //console.log(props);
    return(
        <React.Fragment>
            <header>           
                <Logo />
                <NavBar onFilterCurrPage =  {props.onFilterCurrPage}/>            
            </header>
        </React.Fragment>
    );
}
export default Header;