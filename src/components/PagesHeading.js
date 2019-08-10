import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import downArrow from '../assets/img/svg/down-arrow.svg';
//import {Link} from 'react-router-dom';

const PagesHeading = (props) => {
    //console.log( downArrows );    
    //let header_background, page = '';
    let header_background = '';
    if(props){
        header_background = ReactHtmlParser(props.header_background);        
     }
    return (
        <section id="section0" className="full-height active offset" >
            <div className="section-image shadow" style={{ backgroundImage: `url(${header_background})` }}></div>
            <div className="section-content">
                <div className="container invert">
                    <div className="row">
                        <div className="col-xs-12 col-md-8 col-md-offset-1">
                            <h1 data-aos="fade-up" data-aos-delay="100">{props.heading}</h1>
                            <h3 data-aos="fade-up" data-aos-delay="200">{props.subhead}</h3>
                            <p data-aos="fade-up" data-aos-delay="300">{ReactHtmlParser(props.description)}</p>
                            { 
                                props.heading_btn_url !== "" && props.heading_btn_lbl !== ''
                                ? <p><a href={props.heading_btn_url} className="button white download__white" data-aos="fade-up" data-aos-delay="400">{props.heading_btn_lbl}</a></p>
                                : null
                            }
                            
                        </div>
                    </div>
                </div>
                <div className="content-arrow scroll-nav" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-200">
                    <a href="#section1"><img src={downArrow} width="5rem" height="5rem" alt="Down Arrow" /></a>
                </div>
            </div>
        </section>
    
        // <div>Hii</div>
    );
};



export default PagesHeading;