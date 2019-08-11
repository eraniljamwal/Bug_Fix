import React, {Component} from 'react';
import { Route} from 'react-router-dom';

import '../assets/css/style.css';
import '../assets/css/main.css'; 


import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import ForcefieldPanels from './ForcefieldPanels';
import ForcefieldSeamTape from './ForcefieldSeamTape';
import ForcefieldCornerSeal from './ForcefieldCornerSeal';
import ForcefieldFlexTape from './ForcefieldFlexTape';
import ForcefieldInTheField from './ForcefieldInTheField';
import ForcefieldResources from './ForcefieldResources';
import FindAForcefieldDealer from './FindAForcefieldDealer';
import ForcefieldContacts from './ForcefieldContacts';

class  App extends Component {  

  render(){
    
    return (      
      <div className="App">           
        <Header/>  
          <Route exact path="/"  component={HomePage}  />
          <Route path="/forcefield-panels" component={ForcefieldPanels} />
          <Route path="/forcefield-seam-tape" component={ForcefieldSeamTape} /> 
          <Route path="/forcefield-corner-seal" component={ForcefieldCornerSeal} />
          <Route path="/forcefield-flex-tape" component={ForcefieldFlexTape} /> 
          <Route path="/forcefield-in-the-field" component={ForcefieldInTheField} /> 
          <Route path="/forcefield-resources" component={ForcefieldResources} /> 
          <Route path="/find-a-forcefield-dealer" component={FindAForcefieldDealer} /> 
          <Route path="/forcefield-contacts" component={ForcefieldContacts} /> 
        <Footer /> 
      </div>
    );
  }
}
export default App;