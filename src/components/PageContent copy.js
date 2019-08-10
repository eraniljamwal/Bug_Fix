import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import PagesHeading from './PagesHeading';

const PageContent = (props) => {
    //console.log( props.pageAcf.acf);    
    let page = props.pageAcf.acf;
    return <React.Fragment>     
                <PagesHeading {...props}/>                
                { ReactHtmlParser(page.content_editor) }    
            </React.Fragment>
};
export default PageContent;