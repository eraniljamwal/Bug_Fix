import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";
//import PagesHeading from './PagesHeading';

class ForcefieldSeamTape extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchPages(213));
    }
  
    render() {        
        let pageData = '';
        const { error, loading, pages } = this.props;
        //console.log(this.props.pageheading);
        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return <div>Loading...</div>;
        }
        
        if(pages.acf){
            pageData = pages.acf.content_editor
            
        }
        
        return (
            <React.Fragment>
                <section className="offset">
                    <div className="container pad">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>Find A ForceField<sup className="reg">®</sup> Dealer</h1>
                            </div>

                            <div className="col-xs-12 col-md-6">
                                <p>The ForceField system is available through our network of dealers. Enter your zip code to find the dealer nearest you.</p>
                            </div>

                            <div className="col-xs-12 col-md-6">
                                <div className="dealer-search">
                                    <label>Search By Zip Code</label>
                                    <input name="tbxZipCode" type="text"  id="tbxZipCode" />
                                    <input type="submit" name="btnSearch" value="Go"  id="btnSearch" className="button" />
                                </div>
                                <span id="reqFVZipCode" style={{color:'Red',display:'none'}}>Zip Code value is required.</span>
                                <span id="regExpFVZipCode" style={{color:'Red',display:'none'}}>Invalid Zip Code.</span>
                            </div>
                        </div>
                        <hr />
                        <div className="results">
                            <div className="row">                                
                            </div>
                        </div>
                    </div>
                </section>
                {ReactHtmlParser(pageData)}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    pages: state.pages.pages,
    pageheading: state.pages.pages.acf,
    loading: state.pages.loading,
    error: state.pages.error
});
  
  export default connect(mapStateToProps)(ForcefieldSeamTape);