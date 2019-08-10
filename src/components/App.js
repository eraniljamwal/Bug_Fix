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


//import './assets/js/main'
//import axios from 'axios';

//import {bindActionCreators} from 'redux';
//import {removePost, fetchData} from './actions/actions';


class  App extends Component {  

  // pageData(pageID){
  //   return this.props.posts.find(x => x.id === pageID);
  // }

 
  render(){
    
    return (      
      <div className="App">           
        {/* <Header  onFilterCurrPage =  {this.filterCurrPage}/> 
          <Route exact path="/" render={()=> <ScrollSection currPageData = {this.state.currPage} /> } />          
          <Route path="/forcefield-panels" render={()=> <ForcefieldPanels currPageData = {this.state.currPage} /> } />      
          <Route path="/forcefield-seam-tape" render={()=> <ForcefieldSeamTape currPageData = {this.state.currPage} /> } /> 
          <Route path="/forcefield-corner-seal" render={()=> <ForcefieldCornerSeal currPageData = {this.state.currPage} /> } /> 
          <Route path="/forcefield-flex-tape" render={()=> <ForcefieldFlexTape currPageData = {this.state.currPage} /> } /> 
          <Route path="/forcefield-in-the-field" render={()=> <ForcefieldInTheField currPageData = {this.state.currPage} /> } /> 
          <Route path="/forcefield-resources" render={()=> <ForcefieldResources currPageData = {this.state.currPage} /> } />  
          <Route path="/find-a-forcefield-dealer" render={()=> <FindAForcefieldDealer currPageData = {this.state.currPage} /> } /> 
          <Route path="/forcefield-contacts" render={()=> <ForcefieldContacts currPageData = {this.state.currPage} /> } /> 
        <Footer />                */}
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
          {/* <Route path="/forcefield-panels"  render={()=> <ForcefieldPanels {...this.pageData(108)}/> } />    
          <Route path="/forcefield-seam-tape"  render={()=> <ForcefieldSeamTape {...this.pageData(149)}/>   } /> 
          <Route path="/forcefield-corner-seal"  render={()=> <ForcefieldCornerSeal {...this.pageData(152)}/> }/> 
          <Route path="/forcefield-flex-tape"  render={()=> <ForcefieldFlexTape {...this.pageData(155)}/> }/>  
          <Route path="/forcefield-in-the-field"  render={()=> <ForcefieldInTheField {...this.pageData(158)}/>  }/> 
          <Route path="/forcefield-resources"  render={()=> <ForcefieldResources {...this.pageData(67)}/> }/>  
          <Route path="/find-a-forcefield-dealer"  render={()=> <FindAForcefieldDealer {...this.pageData(213)}/> }/> 
          <Route path="/forcefield-contacts"  render={()=> <ForcefieldContacts {...this.props} /> }/>   */}
          {/* <Route path="/forcefield-contacts"  render={()=> <ForcefieldContacts {...this.props} {...this.pageData(404)} /> }/>    */}
        <Footer /> 
      </div>
    );
  }
}



export default App;