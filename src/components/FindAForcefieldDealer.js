import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";
import { findDealer } from "../actions/dealersActions";
import {bindActionCreators} from 'redux';
import Loading from './Loading';

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
        let pageHeading,pageSubHeading, pageData, dealersResp = '';
        const { pages, error, loading, dealers, deal_loading, deal_error } = this.props;
        console.log(this.props);
        if (error || deal_error) {
            if(error){
                return <div>Error! {error.message}</div>;
            }else if(deal_error){
                return <div>Error! {deal_error.message}</div>;
            }
        }
    
        if (loading || deal_loading) {
            return <Loading />;
        }
        

        if(pages &&  pages.acf){
            //console.log(this.props);
            pageHeading = pages.acf.heading;
            pageSubHeading = pages.acf.subhead;
            pageData = pages.acf.content_editor            
        }  


        if(dealers && dealers.length > 0){
            dealersResp = dealers.map((dlr,index)=>{
                return  <div className="col-xs-12 col-md-4" key={index}>
                            <div className="dealer">
                                <p>{dlr.Company}</p>
                                <p>{dlr.Address}</p>
                                <p>{dlr.state}</p>
                                <p>{dlr.ZipCode}</p>
                                <p> Distance: {dlr.Miles}.</p>
                            </div>
                        </div> 
            });
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
                                            <input name="zipcode" type="text" id="tbxZipCode" value={title}  />
                                            <input type="submit" name="btnSearch" value="Go"  id="btnSearch" className="ffButton" />
                                        </div>
                                        <span id="reqFVZipCode" style={{color:'Red',display:'none'}}>Zip Code value is required.</span>
                                        <span id="regExpFVZipCode" style={{color:'Red',display:'none'}}>Invalid Zip Code.</span>
                                    </div>
                                </form>
                        </div>
                        <hr />
                        <div className="results">
                            <div className="row">   
                                {dealersResp}
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
    loading: state.pages.loading,
    error: state.pages.error,
    dealers: state.dealers.dealers,
    deal_loading: state.dealers.deal_loading,
    deal_error: state.pages.deal_error,
  });
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPages, findDealer }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ForcefieldSeamTape);