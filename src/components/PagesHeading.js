import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import downArrow from '../assets/img/svg/down-arrow.svg';
//import {Link} from 'react-router-dom';
import { Link, Events, animateScroll as scroll,  scroller } from 'react-scroll'

class PagesHeading extends React.Component {  

    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }
    
      componentDidMount() {
    
        Events.scrollEvent.register('begin', function () {
          //console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          //console.log("end", arguments);
        });
    
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }
      scrollToWithContainer() {
    
        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });
    
        goToContainer.then(() =>
          scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
          }));
      }
      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
      }

    //   let header_background = '';
    // if(this.props){
    //     header_background = ReactHtmlParser(this.props.header_background);        
    // }

    
    render() { 
        //console.log(this.props)
        return (
        <section id="section0" className="full-height active offset" >
            <div className="section-image shadow" style={{ backgroundImage: `url(${ReactHtmlParser(this.props.header_background)})` }}></div>
            <div className="section-content">
                <div className="container invert">
                    <div className="row">
                        <div className="col-xs-12 col-md-8 col-md-offset-1">
                            <h1 data-aos="fade-up" data-aos-delay="100">{ReactHtmlParser(this.props.heading)}</h1>
                            <h3 data-aos="fade-up" data-aos-delay="200">{ReactHtmlParser(this.props.subhead)}</h3>
                            <p data-aos="fade-up" data-aos-delay="300">{ReactHtmlParser(this.props.description)}</p>
                            { 
                                this.props.heading_btn_url !== "" && this.props.heading_btn_lbl !== ''
                                ? <p><a href={this.props.heading_btn_url} className="button white download__white" data-aos="fade-up" data-aos-delay="400">{this.props.heading_btn_lbl}</a></p>
                                : null
                            }
                            
                        </div>
                    </div>
                </div>
                <div className="content-arrow scroll-nav" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-200">
                    
                <Link activeClass="active" className="test6" to="section1" spy={true} smooth={true} duration={500}><img src={downArrow} width="5rem" height="5rem" alt="Down Arrow" /></Link>
                    {/* <a href="#section1"><img src={downArrow} width="5rem" height="5rem" alt="Down Arrow" /></a> */}
                </div>
            </div>
        </section>
    
        // <div>Hii</div>
        );
    }
};



export default PagesHeading;