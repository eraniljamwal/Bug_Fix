import React from 'react';
import { connect } from "react-redux";
import Loading from './Loading';
import {Helmet} from 'react-helmet';

class SeoSettings extends React.Component{ 
    
    render(){    
        let SEO_SETTINGS =''; 
        const { error, loading, pages } = this.props;
        

        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return <Loading />;
        }

        if(pages && pages.yoast_meta){               
                SEO_SETTINGS = <Helmet>
                    <title>{pages.yoast_meta.yoast_wpseo_title}</title>
                    <meta name="description" content={pages.yoast_meta.yoast_wpseo_metadesc} />
                </Helmet>
            }
            //console.log(SEO_SETTINGS);
        return(
            <React.Fragment>
                {SEO_SETTINGS}
            </React.Fragment>
        )
    }    
}

const mapStateToProps = state => ({
    pages: state.pages.pages,
    loading: state.pages.loading,
    error: state.pages.error
});

export default connect(mapStateToProps)(SeoSettings);