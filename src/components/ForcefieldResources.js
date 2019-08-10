import React from 'react';
//import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";
import ResorceData  from './ResorceData';
import Loading from './Loading';

class ForcefieldResources extends React.Component {

    componentDidMount() {
      this.props.dispatch(fetchPages(67));
    }
        
    render() {        
        let resourceData = '';
        const { error, loading, pages } = this.props;
        //console.log(this.props.pageheading);
        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return <Loading />;
        }
        

        
        if(pages &&  pages.acf &&  pages.acf.resources){ 
            resourceData = (pages.acf.resources.map((page, index) => {
                return  <ResorceData  {...page}  key={index} />
                //return console.log(page.resource_category_name);
            }));
        
        }

        return (
            <div> 
                <section className="offset">
                    <div className="container pad">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>ForceField<sup className="reg">&reg;</sup> Resources</h1>
                                <p>Download the latest detailed information to keep you up-to-date on the ForceField air & water barrier system including its lifetime limited warranty.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {resourceData}              
         </div>
        );
    }
}
const mapStateToProps = state => ({
    //Acf: state.pages.pages.acf,
    pages: state.pages.pages,
    loading: state.pages.loading,
    error: state.pages.error
  });
  
  export default connect(mapStateToProps)(ForcefieldResources);
  
  
//   import React from 'react';
// import ResorceData from './ResorceData';


// function ForcefieldResources(props){

//     console.log(props.acf);
//    // console.log(props.currPageData);
//     //let slide = 1;
//     let resourceData = (props.acf.resources.map((page, index) => {
//         return  <ResorceData  {...page}  key={index} />
//         //return console.log(page.resource_category_name);
//     }));

//     return (
//         <div> 
//                 <section className="offset">
//                     <div className="container pad">
//                         <div className="row">
//                             <div className="col-xs-12">
//                                 <h1>ForceField<sup className="reg">&reg;</sup> Resources</h1>
//                                 <p>Download the latest detailed information to keep you up-to-date on the ForceField air & water barrier system including its lifetime limited warranty.</p>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//                 {resourceData}              
//         </div>
//     )
//   }
     
// export default ForcefieldResources;