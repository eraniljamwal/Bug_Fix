import React from 'react';
//import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";
import Loading from './Loading';

class ForcefieldInTheField extends React.Component {
    componentDidMount() {
      this.props.dispatch(fetchPages(158));
    }
            
    render() {        
        //console.log(this.props);
        let IntheSlidePhotos; //="";        
        const { error, loading, pages } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }

        if (loading) {
            return <Loading />;
        }
        if(pages &&  pages.acf &&  pages.acf.gallery){
            //console.log(this.props.inthefieldAcf.gallery);
            IntheSlidePhotos = (this.props.pages.acf.gallery.map((page, index) => {
                let column_class =  "grid "+page.column_class;
                let gallery_image = page.gallery_image.url;
                return  <a className={column_class} data-rel="lightcase:galleryCollection" 
                            href={gallery_image} 
                            style={{backgroundImage: `url(${gallery_image})`}} 
                            title={page.location_name} 
                            key={index} >
                            <div className="grid-overlay">
                                <h2>{page.location_name}</h2>
                            </div>
                        </a> 
            }));
        }

        return (
            <section className="offset">
                <div className="container pad">

                    <div className="row">
                        <div className="col-xs-12">
                            <h1>ForceField<sup className="reg">&reg;</sup> In The Field</h1>

                            <div className="image-grid clearfix">

                                {IntheSlidePhotos}

                            </div>

                        </div>
                    </div>
                </div>
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