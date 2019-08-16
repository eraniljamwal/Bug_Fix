import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import Loading from './Loading';

class NavBar extends React.Component{ 
    // constructor() {
    //     super();
    //     // this.state = {
    //     //     menuItem: []
    //     // };
    //     //this.handleChange = this.handleChange.bind(this);
    //     //this.handleSubmit = this.handleSubmit.bind(this);
    // }
    render(){       
        const { menus, menus_error, menus_loading} = this.props;
        //console.log(this.props);
        if (menus_error) {
            return <div>Error! {menus_error.message}</div>;
        }
    
        if (menus_loading) {
            return <Loading />;
        }   
        console.log(menus.items);

        let menuURL, fullURL, menuURL2, fullURL2 = '';
        return(
            <React.Fragment>            
                <nav className="">
                    <div className="toggle"><Link to="/"><span></span></Link></div>               
                    <ul>
                        {menus.items.map(function(menuItem, i) {
                            fullURL = menuItem.url.replace('http://wpstage.forcefield.gpbpittest.com/', '');
                            menuURL = fullURL.substring(0, fullURL.length-1);
                            
                            if (menuItem.child_items !== undefined) {
                                return (
                                        <li key={i}><Link to={menuItem.url}>{menuItem.title}</Link>
                                            <ul>
                                                {menuItem.child_items.map(function(subMenu, i) {

                                                    fullURL2 = subMenu.url.replace('http://wpstage.forcefield.gpbpittest.com/', '');
                                                    menuURL2 = fullURL2.substring(0, fullURL2.length-1);

                                                     return <li key={i}><Link to={menuURL2}>{subMenu.title}</Link></li>;
                                                })}
                                            </ul>
                                        </li>
                                )   
                            } else {
                                return (
                                    <li key={i}>
                                        
                                        <Link to={menuURL}>{menuItem.title}</Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>

                        {/* <li><Link to="/" >Home</Link></li> */}
                        {/* <li><Link to="#" className="nolink" >ForceField System</Link>
                                <ul>
                                    <li><Link to="forcefield-panels" >ForceField Panels</Link></li>
                                    <li><Link to="forcefield-seam-tape" >ForceField Seam Tape</Link></li>
                                    <li><Link to="forcefield-corner-seal" >ForceField Corner Seal</Link></li>
                                    <li><Link to="forcefield-flex-tape" >ForceField Flex Tape</Link></li>
                                </ul>
                            </li>
                        <li><Link to="forcefield-in-the-field"  >In The Field</Link></li>
                        <li>
                            <Link to="forcefield-resources" >Resources</Link>
                        </li>
                        <li><Link to="find-a-forcefield-dealer">Find A Dealer</Link></li>
                        <li><Link to="forcefield-contacts" >Contacts</Link></li> */}
                    
                </nav>
            </React.Fragment>
        )
    }    
}

const mapStateToProps = state => ({
    menus: state.menus.menus,
    menus_loading: state.menus.loading,
    menus_error: state.menus.error,
});

export default connect(mapStateToProps)(NavBar);