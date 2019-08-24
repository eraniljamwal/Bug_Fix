import React, { Component } from 'react';

class Contact extends Component {
    render() {
        //console.log(this.props.list.sales_contact_block);
        if(this.props.list.sales_contact_block){
            let uniqueOptions = [...new Set(this.props.list.sales_contact_block.map(item => {
                return "<option values='"+item.contact_state +"'>"+item.contact_state + "</option>" ; 
            } ))];
            console.log(uniqueOptions);
        }

        return (
            <React.Fragment>
                <option values='contacts'>Contacts</option>
            </React.Fragment>
        );
    }
}

export default Contact;