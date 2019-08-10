import React from 'react';
import { connect } from "react-redux";
import { fetchPages } from "../actions/pagesActions";
import ReactHtmlParser from 'react-html-parser';
import {bindActionCreators} from 'redux';
import Loading from './Loading';

class ForcefieldContacts extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            salesContact : [],
            generalContact : false
        }
        this.onInputChange = this.onInputChange.bind(this);
    }

    componentDidMount() {  
        this.props.fetchPages(404); 
    }

    onInputChange(event){   
        if(this.props.pages.acf.sales_contact_block){            
            let city = event.target.value;
            const fltrString = this.props.pages.acf.sales_contact_block.find(fruit => fruit.contact_state === city); 
            let contactAddr =  "<p><strong>" + fltrString.contact_name + "</strong><br>" + fltrString.contact_email + "<br>" + fltrString.contact_phone + "</p>";
            return this.setState({salesContact : contactAddr ,generalContact: true});    
        }  
    }   

    render() {    
        let pageData, general_inquiries_content,contact_img, optionsList,pageHeading = '';
        const { error, loading, pages } = this.props;  
        
        const style = this.state.generalContact ? {} :  { display: 'none' };
        if (error) {
            return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
            return <Loading />;
        }
       
        if(this.props.pages &&  this.props.pages.acf &&  this.props.pages.acf.sales_contact_block){
            //console.log(this.props);
            let uniqueOptions = [...new Set(this.props.pages.acf.sales_contact_block.map(item => {
                return "<option values='"+item.contact_state +"'>"+item.contact_state + "</option>" ; 
            } ))];

            optionsList = uniqueOptions.map(opt => {
                return opt;
            })      
            //console.log(pages.acf.heading);
            pageHeading = pages.acf.heading;
            pageData = pages.acf.content_editor
            general_inquiries_content = pages.acf.general_inquiries_content;
            contact_img = pages.acf.upload_contact_page_image;
        }   
        
        return (
            <React.Fragment>
                <section className="offset">
                    <div className="container pad">
                        <div className="row">
                                <div className="col-xs-12">
                                    <h1>{ReactHtmlParser(pageHeading)}</h1>
                                    <hr />
                                </div>
                            <div className="col-xs-12 col-md-4">
                                <h3>Sales Contacts</h3>
                                <select id="sales-contacts" onChange={this.onInputChange} >
                                    <option value="">Select State</option>
                                    {ReactHtmlParser(optionsList)}                                    
                                </select>
                                <div className="contact-display"></div>
                                    {ReactHtmlParser(this.state.salesContact)}
                                <div className="general-inquiries" style={style}>
                                    {ReactHtmlParser(general_inquiries_content)}
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-8">
                                <p>
                                    <img src={contact_img} alt="city_nh_03" width="1600" height="1064" />
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {ReactHtmlParser(pageData)}
        </React.Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForcefieldContacts);