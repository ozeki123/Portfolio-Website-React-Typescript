import React , { useRef, useEffect } from 'react';
import './layout.scss';
import StrideImage from '../../assets/images/StrideImage.jpg';
import { gsap } from 'gsap';
import CSSRulePlugin from 'gsap/CSSRulePlugin';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);

const Layout = () => {
    let imageRef = useRef<HTMLImageElement>(null);
    let container = useRef<HTMLDivElement>(null);
    let imageReveal = CSSRulePlugin.getRule(".layout-container .layout-contents .project-container .project-contents .about-right:after");  
    let textContainer = useRef([]);
    let headerRef = useRef<HTMLDivElement>(null);
    let headerTest = useRef([]);
    let titleRef = useRef([]);

    let tl = gsap.timeline();
    let t2 = gsap.timeline();

    useEffect(() => {
        console.log(imageRef);
        console.log(container);
        console.log(imageReveal);
        console.log(headerRef);
        console.log(headerTest);
        console.log(textContainer);

        document.body.style.height = `${container.current?.getBoundingClientRect().height}px`


        tl.to(container, {
            duration: 0.1, 
            css: { visibility: "visible" }
        })
            tl.from(headerTest.current, {
                duration: 1.5,
                y: 70,
                stagger: 0.2,
                ease: "Power3.easeOut"
            })

        t2.to(imageReveal, {
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
            },
            duration: 2,
            width: "0%", 
            ease: "Power2.easeOut",
            delay: 0.4,
        })
            t2.from(imageRef, {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top center",
                },
                duration: 1.7,
                scale: 1.4,
                ease: "Power2.easeOut",
                delay: -2,
                opacity: 0
            })

        gsap.from(titleRef.current, {
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
            },
            delay: 1,
            opacity: 0,
            duration: 1.5,
            y: 100,
            ease: "Power3.easeOut"
        })

        gsap.from(textContainer.current, {
            scrollTrigger: {
                trigger: container.current,
                start: "top center",
            },
            delay: 1.4,
            stagger: 0.3,
            duration: 1.9,
            y: 90,
            ease: "Power4.easeOut"
        })
        
                    
        
    })
        return (
            <div className="layout-container" ref={el => (container = el)}>
                <div className="layout-contents">
                    <div className="header-container">
                        <div className="header-contents">
                            <div className="header-left" ref={el => (headerRef = el)}>
                                <p ref={element => {headerTest.current[0] = element;}}>andrew ozeki</p>
                                <p ref={element => {headerTest.current[1] = element;}}>FRONT END DEVELOPER & UI DESIGNER</p>
                            </div>
                            <div className="header-right">
                                <p ref={element => {headerTest.current[2] = element;}}>Work</p>
                                <p ref={element => {headerTest.current[3] = element;}}>About</p>
                                <p ref={element => {headerTest.current[4] = element;}}>Contact</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="project-contents">
                            <div className="project-text">
                                <div className="project-text-contents">
                                    <h1 ref={element => {titleRef.current[0] = element;}}>Stride & Co</h1>
                                    <p ref={element => {textContainer.current[0] = element;}}>Website concept built in Angular</p>
                                    <a href="#"><p ref={element => {textContainer.current[1] = element;}}>Visit Website</p></a>
                                </div>
                            </div>
                            <div className="about-right">
                                <div className="project-image">
                                    <img ref={el => imageRef = el} src={StrideImage}/>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className="project-container">
                        <div className="project-contents">
                            <div className="project-text">
                                <div className="project-text-contents">
                                    <h1>Stride & Co</h1>
                                    <p>Website concept built in Angular</p>
                                    <a href="#"><p>Visit Website</p></a>
                                </div>
                            </div>
                            <div className="about-right">
                                <div className="project-image">
                                    <img src={StrideImage}/>
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