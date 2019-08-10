import React from 'react';

const SingleResourceData = (props) => {    
    //console.log(props);
    return (
        <div className="col-xs-6 col-md-3">
            <a className="download-link" href={props.rsrc_link}>
                <img src={props.rsrc_image} alt={props.rsrc_name} width="600" height="780" />
                {props.rsrc_name}
            </a>
        </div>
    )
};
export default SingleResourceData;