import React from 'react';
import './footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer-container">
                <div className="footer-contents">
                    <div className="footer-left">
                        <p>Scroll to discover</p>
                    </div>
                    <div className="footer-right">
                        <a href="#"><p>View projects on Github</p></a>
                    </div>
                </div>
            </div>
        );
    }
    };

export default Footer;