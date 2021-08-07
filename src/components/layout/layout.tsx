import React from 'react';
import './layout.scss';

import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

class Layout extends React.Component {
    render() {
        return (
            <div className="layout-container">
                <Navbar/>
                <Footer/>
            </div>
        );
    }
    };

export default Layout;