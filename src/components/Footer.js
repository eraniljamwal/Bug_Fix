import React from 'react';
import {connect} from 'react-redux';
import ReactHtmlParser from 'react-html-parser';

class Footer extends React.Component{
    

    render() {
        let footerBlock;
        const { error, misc } = this.props;
        if (error) {
            return <div>Error! {error.message}</div>;
        }
        
        if(misc.acf){
            footerBlock = <footer>
                            <div className="container">
                                <div className="grid">
                                    <div className="grid__col-xs-12">
                                        <div className="footer-logo">
                                            <a href="#/"><img src={misc.acf.footer_logo} alt="logo white" /></a>
                                        </div>
                                        <div className="contacts">
                                            {ReactHtmlParser(misc.acf.footer_address)}
                                        </div>

                                        <div className="copyright">
                                            {ReactHtmlParser(misc.acf.footer_copy)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>           
        }

        return(
            
            <React.Fragment>
                {footerBlock}
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    misc: state.misc.misc,
    error: state.misc.error
});
  
export default connect(mapStateToProps)(Footer);