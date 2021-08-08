import React , { useRef, useEffect } from 'react';
import './layout.scss';
import StrideImage from '../../assets/images/StrideImage.jpg';
import { gsap } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';

gsap.registerPlugin(CSSRulePlugin)

const Layout = () => {
    let imageRef = useRef<HTMLImageElement>(null);
    let container = useRef<HTMLDivElement>(null);
    let imageReveal = CSSRulePlugin.getRule(".layout-container .layout-contents .project-container .project-contents .about-right:after");   

    let tl = gsap.timeline();

    useEffect(() => {
        console.log(imageRef);
        console.log(container);
        console.log(imageReveal);
        tl.to(container, {
            duration: 0.1, 
            css: { visibility: "visible" }
        })
            tl.to(imageReveal, {
                duration: 1.7,
                width: "0%", 
                ease: "Power2.easeOut",
            })
                tl.from(imageRef, {
                    duration: 1.7,
                    scale: 1.4,
                    ease: "Power2.easeOut",
                    delay: -2
                })
        
    })
        return (
            <div className="layout-container" ref={el => (container = el)}>
                <div className="layout-contents">
                    <div className="header-container">
                        <div className="header-contents">
                            <div className="header-left">
                                <p>andrew ozeki</p>
                                <p>FRONT END DEVELOPER & UI DESIGNER</p>
                            </div>
                            <div className="header-right">
                                <p>Work</p>
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="project-contents">
                            <div className="project-text">
                                <h1>Stride & Co</h1>
                                <p>Website concept built in Angular</p>
                                <a href="#"><p>Visit Website</p></a>
                            </div>
                            <div className="about-right">
                                <div className="project-image">
                                    <img ref={el => imageRef = el} src={StrideImage}/>
                                </div>
                            </div>
                        </div> 
                    </div>
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
                </div>
            </div>
            
        );
    }
    

export default Layout;