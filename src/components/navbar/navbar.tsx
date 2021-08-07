import React from 'react';
import './navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar-container">
                <div className="nav-contents">
                    <div className="nav-left">
                        <p>andrew ozeki</p>
                        <p>FRONT END DEVELOPER & UI DESIGNER</p>
                    </div>
                    <div className="nav-right">
                        <p>Work</p>
                        <p>About</p>
                        <p>Contact</p>
                    </div>
                </div>
            </div>
        );
    }
    };

export default Navbar;