import React from 'react';
//import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";
import Loading from './Loading';
import {bindActionCreators} from 'redux';

class HomePage extends React.Component {

    componentDidMount() {
      this.props.fetchPages(187);
    }
  
    render() {        
        let slides, slide_nav_link = '';
        const { error, loading, pages } = this.props;
        //console.log(pages.acf);

        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return <Loading />;
        }
        
        if(pages &&  pages.acf &&  pages.acf.slides){ 
            slide_nav_link = (pages.acf.slides.map((slide, index) => {
                return <li className={(slide.active_slide === true ) ? 'active' : ''} key={index}>
                            <a href={"#section"+index+"/"} >{null}</a>
                        </li> 
            }));

            slides = (pages.acf.slides.map((slide, index) => {
                    let contentBlock='';
                    if (slide.upload_image_video === 'Image') {
                        contentBlock = <div className="row">
                            <div className="col-xs-12 col-md-8 col-md-offset-1">
                                <div className="section-headline">
                                    {slide.slide_logo_image ? <img src={slide.slide_logo_image} alt='Slide Logo'></img> : ''}                                                        
                                    <h1>{slide.slide_heading}</h1>
                                </div>
                                <div className="section-body">
                                    <h3>{slide.slide_sub_heading}</h3>
                                    <p>{slide.slide_description}</p>
                                    <p><a href={slide.slide_link_url} className={slide.button_color === 'white' ? 'button '+slide.button_color : 'button'}>{slide.slide_link_text}</a></p>
                                </div>
                            </div>
                        </div>
                    }
                    if (slide.upload_image_video === 'Video') {
                        contentBlock =  <div className="row center-xs">
                                            <div className="col-xs-12 col-md-10">
                                                <h2 className="large">{slide.slide_sub_heading}</h2>
                                                <div className="video-container">
                                                    <iframe width="1280" height="720" src={slide.slide_video+'?rel=0&amp;showinfo=0'} title='video' frameBorder="0" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                    }
                    
                    return  <section id={"section"+index} className={(slide.active_slide === true ) ? 'full-height offset active' : 'full-height'} key={index} >
                                <div className="section-image shadow" style={{backgroundImage: `url(${slide.slide_image.url})`}}  ></div>
                                <div className="section-content">
                                        <div className="container invert">
                                            {contentBlock}
                                        </div>
                                </div>
                        </section>            
            }));
        }
        
        return (
            <div className="scroll-sections">
                { /*eslint-disable */}
                <ul className="scroll-nav">      
                    {slide_nav_link}                
                </ul>
                {slides} 
            </div>
        )
    }
}
const mapStateToProps = state => ({
    pages: state.pages.pages,
    loading: state.pages.loading,
    error: state.pages.error
  });
  
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPages }, dispatch)
}

  export default connect(mapStateToProps, mapDispatchToProps)(HomePage);