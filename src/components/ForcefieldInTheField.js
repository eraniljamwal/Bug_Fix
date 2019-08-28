import React from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";
import Loading from './Loading';
import SeoSettings from './SeoSettings';
import ReactHtmlParser from 'react-html-parser';



let  images = []; 
class ForcefieldInTheField extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchPages(158));
    }
    constructor(props) {
        super(props);
    
        this.state = {
          photoIndex: 0,
          isOpen: false
        };
      

    //this.onCloseRequest = this.onCloseRequest.bind(this);
    this.onGalleryBtnClick = this.onGalleryBtnClick.bind(this);
    this.onMovePrevRequest = this.onMovePrevRequest.bind(this);
    this.onMoveNextRequest = this.onMoveNextRequest.bind(this);
  }

    onCloseRequest=() => {
      this.setState({ isOpen: false })
    }

    onMovePrevRequest=(photoIndex) => {
        this.setState({
        photoIndex: (photoIndex + images.length - 1) % images.length,
        })
    }

    onMoveNextRequest=(photoIndex) =>{
        this.setState({
            photoIndex: (photoIndex + 1) % images.length,
        })
    }

    onGalleryBtnClick=(event) =>{
        event.preventDefault(); 
        //return console.log(event.target.getAttribute('alt'));
        return this.setState({ isOpen: true, photoIndex: event.target.getAttribute('alt') })
    }
  

     
 
    render() {
        const { photoIndex, isOpen } = this.state;

            let IntheSlidePhotos, gallery_image,  pageHeading, pageSubhead= ''; //="";        
            const { error, loading, pages } = this.props;
            if (error) {
                return <div>Error! {error.message}</div>;
            }

            if (loading) {
                return <Loading />;
            }
            
            //console.log(isOpen);
            if(pages &&  pages.acf &&  pages.acf.gallery){
                //console.log(this.props.inthefieldAcf.gallery);
                IntheSlidePhotos = (this.props.pages.acf.gallery.map((page, index) => {
                    //let column_class =  "grid "+page.column_class;

                    // column_class =  "grid "+page.column_class;
                    gallery_image = page.gallery_image;
                    pageHeading =  ReactHtmlParser(pages.acf.heading);
                    pageSubhead =  ReactHtmlParser(pages.acf.subhead);

                    images.push(page.gallery_image); //page.find(index => index.id === '45').foo;;//this.state.images.push(page.gallery_image;
                    //return <img src={page.gallery_image}  onClick={this.onGalleryBtnClick} key={index} alt={index} />;
                    //return gallery_image;
                    //return  "test"//console.log(this.state.images1)//<button type="button" onClick={() => this.onGalleryBtnClick(index)} key={index}>{images1}</button>;
                    //return <button type="button" onClick={() => this.setState({ isOpen: true, photoIndex: 1})}>

                    // return <a className={column_class+" masonry-item"}  href={gallery_image} 
                    //         style={{backgroundImage: `url(${gallery_image})`}} 
                    //         title={page.location_name} 
                    //         key={index} onClick={this.onGalleryBtnClick} alt={index}  >
                    //         <div className="grid-overlay">
                    //             <h2>{page.location_name}</h2>
                    //         </div>
                    //     </a> 
                    return <div class="masonry-item hvrbox" key={index}>
                                <img src={gallery_image} alt={index} class="masonry-content" onClick={this.onGalleryBtnClick} />
                                <div class="hvrbox-layer_top">
                                  <div class="hvrbox-text">{page.location_name}</div>
                                </div>
                                
                            </div>
                
                }));
            }
            //console.log(images);
        return (        
            <section className="offset">
                <SeoSettings />
                <div className="container pad">

                    <div className="row">
                        <div className="col-xs-12 masonry-wrapper">
                                <h1>{pageHeading}</h1> 
                                <p>{pageSubhead}</p>
                            <div className="image-grid clearfix masonry">
                                {IntheSlidePhotos}
                            </div>

                        </div>
                    </div>
                </div>
            
            
                {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                    onMovePrevRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + images.length - 1) % images.length,
                    })
                    }
                    onMoveNextRequest={() =>
                    this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                    })
                    }
                />
            )}
            </section>
        );
    }
}

const mapStateToProps = state => ({
    pages: state.pages.pages,
    loading: state.pages.loading,
    error: state.pages.error
});
  
export default connect(mapStateToProps)(ForcefieldInTheField);