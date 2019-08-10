import React from 'react';
import {Link} from 'react-router-dom';

function NavBar(props){
    //console.log(props);
    return(
        <React.Fragment>            
            <nav className="">
                <div className="toggle"><Link to="/"><span></span></Link></div>
               
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li>
                        <Link to="#" className="nolink" >ForceField System</Link>
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
                    <li><Link to="forcefield-contacts" >Contacts</Link></li>
                </ul>
            </nav>
        </React.Fragment>
    )
}
export default NavBar;