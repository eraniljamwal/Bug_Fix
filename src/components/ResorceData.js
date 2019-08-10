import React from 'react';
import SingleResourceData from './SingleResourceData';

const ResorceData = (props) => {
    //console.log(props);
    return(
        <section className={"resources-list "+props.rsrc_bckgrnd}>
            <div className="container pad">
                <h2>{props.rsrc_cat_name}</h2>
                <div className="row">
                    {(props.resources.map((page, index) => {
                        return <SingleResourceData  {...page}  key={index} />
                    }))}  
                </div>
            </div>
        </section>
    )
};
export default ResorceData;