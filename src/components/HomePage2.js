import React from 'react';
import Slider from 'react-animated-slider';
import '../assets/css/vertical.css';
import '../assets/css/custom.css';
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";
import Loading from './Loading';
import {bindActionCreators} from 'redux';
import ReactHtmlParser from 'react-html-parser';
import SeoSettings from './SeoSettings';



class HomePage2 extends React.Component {

    componentDidMount() {
        this.props.fetchPages(187);
      }

    render(){

        let slides, final = '';
        const { error, loading, pages } = this.props;
        //console.log(this.props);

        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return <Loading />;
        }
        
        if(pages &&  pages.acf &&  pages.acf.slides){ 
            slides = (pages.acf.slides.map((slide, index) => {
                    let contentBlock='';
                    if (slide.upload_image_video === 'Image') {
                        contentBlock = <div className="row">
                                <div className="col-xs-12 col-md-8 col-md-offset-1">
                                    <div className="section-headline">
                                        {slide.slide_logo_image ? <img src={slide.slide_logo_image} alt='Slide Logo'></img> : ''}                                                        
                                        <h1>{ReactHtmlParser(slide.slide_heading)}</h1>
                                    </div>
                                    <div className="section-body">
                                        <h3>{ReactHtmlParser(slide.slide_sub_heading)}</h3>
                                        <p>{ReactHtmlParser(slide.slide_description)}</p>
                                        <p><a href={slide.slide_link_url} className={slide.button_color === 'white' ? 'button white' :'button'}>{slide.slide_link_text}</a></p>
                                    </div>
                                </div>
                            </div>
                    }
                    if (slide.upload_image_video === 'Video') {
                        contentBlock =  <div className="row center-xs">
                                            <div className="col-xs-12 col-md-10">
                                                <h2 className="large"> {ReactHtmlParser(slide.slide_heading)}</h2>
                                                <div className="video-container">
                                                    <iframe width="1280" height="720" src={slide.slide_video+'?rel=0&amp;showinfo=0'} title='video' frameBorder="0" allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                    }                             

                    return  <div
                                key={index}
                                style={{ backgroundImage: `url('${slide.slide_image}') `, 
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover' }}
                                className="overlay"
                            >
                                <section className={(slide.active_slide === true ) ? 'full-height offset active' : 'full-height'} >
                                    <div className="section-content">
                                         <div className="container invert">
                                             {final}{contentBlock}
                                         </div>
                                 </div>
                                </section>
                            </div>
            }));
        }


        return (
            <div className="scroll-sections">
                <SeoSettings />
                <Slider direction="vertical">{slides}</Slider>
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage2);