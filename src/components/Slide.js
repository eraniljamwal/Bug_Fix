import React from 'react';
import {Link} from 'react-router-dom';

const Slide = (props) => {
    //console.log(props);
    // let slide = (props.pageAcf.slides.map((slide, index) => {
    //     return slide;
    // }));
    // let slide = (props.pageAcf.slides.map((slide, index) => {
    //     let id = "section"+index;
    //     console.log(id);
    //     return  <section id={id} className="full-height " key={index}>
    //                     <div className="section-image shadow" style={{backgroundImage: `url(${slide.slide_image.url})`}}  ></div>
    //                     <div className="section-content">
    //                             <div className="container invert">
    //                                 <div className="row">
    //                                     <div className="col-xs-12 col-md-8 col-md-offset-1">
    //                                         <div className="section-headline">
    //                                             <h1>{slide.slide_heading}</h1>
    //                                         </div>
    //                                         <div className="section-body">
    //                                             <h3>{slide.slide_sub_heading}</h3>
    //                                             <p>{slide.slide_description}</p>
    //                                             <p><Link to={slide.slide_link} className="button white">Click Me</Link></p>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                     </div>
    //             </section>
    // }));

    return(
        <div  className="scroll-sections">
            {slide}
        </div>
    )
};
export default Slide;