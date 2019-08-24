import React from 'react';
//import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";
import ResorceData  from './ResorceData';
import Loading from './Loading';
import SeoSettings from './SeoSettings';
import ReactHtmlParser from 'react-html-parser';

class ForcefieldResources extends React.Component {

    componentDidMount() {
      this.props.dispatch(fetchPages(67));
    }
        
    render() {        
        let resourceData, pageData, pageSubhead, pageHeading = '';
        const { error, loading, pages } = this.props;
        //console.log(this.props.pageheading);
        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return <Loading />;
        }
        
        if(pages &&  pages.acf &&  pages.acf.resources){ 
            pageData =  ReactHtmlParser(pages.acf.resource_content);
            pageHeading =  ReactHtmlParser(pages.acf.heading);
            pageSubhead =  ReactHtmlParser(pages.acf.subhead);
            resourceData = (pages.acf.resources.map((page, index) => {
                return  <ResorceData  {...page}  key={index} />
            }));        
        }

        return (
            <div> 
                <SeoSettings />
                <section className="offset">
                    <div className="container pad">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>{pageHeading}</h1> 
                                <p>{pageSubhead}</p>
                            </div>
                        </div>
                    </div>
                </section>
                {resourceData} 
                {pageData} 
                          
         </div>
        );
    }
}
const mapStateToProps = state => ({
    //Acf: state.pages.pages.acf,
    pages: state.pages.pages,
    loading: state.pages.loading,
    error: state.pages.error
  });
  
  export default connect(mapStateToProps)(ForcefieldResources);
  
  