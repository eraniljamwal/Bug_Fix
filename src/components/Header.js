import React from 'react';
import {connect} from 'react-redux';
import NavBar from './NavBar';

class Header extends React.Component{

    render() {
        let footerBlock;
        const { error, misc } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        
        if(misc.acf){
            footerBlock = <header>           
                            <div className="logo">
                                    <a href="#/">  <img className= "img-rounded" src={misc.acf.header_logo} alt="logo" /> </a>
                            </div>   
                            <NavBar />            
                        </header>         
        }

        return(            
            <React.Fragment>
                {footerBlock}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    misc: state.misc.misc,
    error: state.misc.error
});
  
export default connect(mapStateToProps)(Header);