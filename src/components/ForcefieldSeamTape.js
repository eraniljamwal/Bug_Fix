import React from 'react';
//import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";
import PagesHeading from './PagesHeading';
import ReactHtmlParser from 'react-html-parser';
import Loading from './Loading';

class ForcefieldSeamTape extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchPages(149));
    }
  
    render() {        
        let pageData = '';
        const { error, loading, pages } = this.props;
        //console.log(this.props.pageheading);
        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return <Loading />;
        }
        
        if(pages.acf){
            pageData = pages.acf.content_editor
            
        }
        
        return (
            <React.Fragment>
                {/* <PagesHeading {...props} /> */}
                <PagesHeading {...this.props.pageheading} /> 
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