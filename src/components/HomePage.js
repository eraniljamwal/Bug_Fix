import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";

class HomePage extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         pages: [
    //             {acf : [
    //                 {
    //                     slides :[]
    //                 }
    //             ]}
    //         ]
    //     }
    // }

    componentDidMount() {
      this.props.dispatch(fetchPages(187));
    }
  
    render() {        
        let slides, slide_nav_link = '';
        const { error, loading, pages } = this.props;
        //console.log(pages.acf);
        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return <div>Loading...</div>;
        }
        
        if(pages &&  pages.acf &&  pages.acf.slides){ 
            slide_nav_link = (pages.acf.slides.map((slide, index) => {
                return <li className={(slide.active_slide === true ) ? 'active' : ''} key={index}>
                            <a href={"#section"+index+"/"} >{null}</a>
                        </li> 
            }));

            slides = (pages.acf.slides.map((slide, index) => {
                return  <section id={"section"+index} className={(slide.active_slide === true ) ? 'full-height offset active' : 'full-height'} key={index} >
                            <div className="section-image shadow" style={{backgroundImage: `url(${slide.slide_image.url})`}}  ></div>
                            <div className="section-content">
                                    <div className="container invert">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-8 col-md-offset-1">
                                                <div className="section-headline">
                                                    <h1>{slide.slide_heading}</h1>
                                                </div>
                                                <div className="section-body">
                                                    <h3>{slide.slide_sub_heading}</h3>
                                                    <p>{slide.slide_description}</p>
                                                    <p><Link to={slide.slide_link} className="button white">Click Me</Link></p>
                                                </div>
                                            </div>
                                        </div>
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
  
  export default connect(mapStateToProps)(HomePage);