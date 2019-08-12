import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from "react-redux";
import { fetchPages, findDealer } from "../actions/pagesActions";
import {bindActionCreators} from 'redux';

class ForcefieldSeamTape extends React.Component {
    
    constructor() {
        super();
        this.state = {
            pincode: ""
        };
        //this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const zipcode = event.target.elements.zipcode.value
        //console.log(this.props);
        this.props.findDealer(zipcode);
    }
    
    componentDidMount() {
      this.props.fetchPages(213);
    }

    render() {    
        const { title } = this.state;    
        let pageHeading,pageSubHeading, pageData = '';
        const { error, loading, pages } = this.props;
        //console.log(this.props);
        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return <div>Loading...</div>;
        }
        
        if(pages.acf){
            //console.log(pages.acf);
            pageHeading = pages.acf.heading;
            pageSubHeading = pages.acf.subhead;
            pageData = pages.acf.content_editor;
        } 
        
        return (
            <React.Fragment>
                <section className="offset">
                    <div className="container pad">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>{ReactHtmlParser(pageHeading)}</h1>
                            </div>

                            <div className="col-xs-12 col-md-6">
                                <p>{ReactHtmlParser(pageSubHeading)}</p>
                            </div>
                                <form onSubmit={this.handleSubmit}>
                                    <div className="col-xs-12 col-md-6">
                                        <div className="dealer-search">
                                            <label>Search By Zip Code</label>
                                            <input name="zipcode" type="text" id="zipcode1" value={title}  />
                                            <input type="submit" name="btnSearch" value="Go"  id="btnSearch" className="button" />
                                        </div>
                                        <span id="reqFVZipCode" style={{color:'Red',display:'none'}}>Zip Code value is required.</span>
                                        <span id="regExpFVZipCode" style={{color:'Red',display:'none'}}>Invalid Zip Code.</span>
                                    </div>
                                </form>
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
    error: state.pages.error,
    dealer: state.dealers
});
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPages, findDealer }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ForcefieldSeamTape);