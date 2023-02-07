import './Style/Home.modules.scss';
import './Style/ShapeHome.modules.scss';
import { useState, useEffect } from 'react';

import Loading from '../../Components/Loading/Loading';
import { Header } from '../../Components/Header/Header';
import { Type } from "../../Components/Profession/Type";
import { AboutMe } from '../../Components/About/AboutMe'; 
import { Skills } from '../../Components/Skills/Skills'; 
import { CoursesHome } from '../../Components/CoursesHome/CoursesHome';
import { ProjectHome } from '../../Components/ProjectHome/ProjectHome';
import { Service } from '../../Components/Service/Service';
import { Curriculum } from '../../Components/Curriculum/Curriculum';
import { Footer } from '../../Components/Footer/Footer';
import { Scroll } from '../../Components/ScrollTop/Scroll';

import { BsGithub, BsLinkedin } from "react-icons/bs"; 
import { MdArrowDownward } from "react-icons/md";

import shape1  from './Images/shape-1.png';
import shape2  from './Images/shape-2.png';
import shape3  from './Images/shape-3.png';
import shape4  from './Images/shape-4.png';
import shape5  from './Images/shape-5.png';
import perfil  from './Images/perfil.jpg';
import backgroundCover  from './Images/backgroundCover.png';

import AnimatedCursor from "react-animated-cursor";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export function Home() {

    const [loading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
        setIsLoading(false);
        }, 800);
    }, [])

    return (
        <>
            {loading?      
            <Loading />:
                <div>
                    <AnimatedCursor innerSize={8} outerSize={35}  innerScale={1} outerScale={1.7} outerAlpha={0} hasBlendMode={true} outerStyle={{border: '3px solid var(--subtitleInvert-color)'}} innerStyle={{backgroundColor: 'var(--subtitleInvert-color)'}} />
                    <div className='img-background'></div> 
                      
                    <Header /> 
                    <MouseParallaxContainer>  
                        <div id='Home' className="cover-content">                                              
                            <div className='color-background'/>

                            <div className='background-cover'>
                                <img src={ backgroundCover }  alt="back"/>
                            </div>  

                            <div className='parallax-cover'>
                                <MouseParallaxChild factorX={0.1} factorY={0.1}>
                                    <div class="cover-shape shape-one layer" data-depth="0.10">                                            
                                        <img src={ shape1 }  alt="Shape" />
                                    </div>        
                                    <div class="cover-shape shape-two layer" data-depth="0.10">                                            
                                        <img src={ shape2 }  alt="Shape"/>
                                    </div>  
                                    <div class="cover-shape shape-three layer" data-depth="0.10">                                            
                                        <img src={ shape3 }  alt="Shape"/>
                                    </div>  
                                    <div class="cover-shape shape-four layer" data-depth="0.10">                                            
                                        <img src={ shape4 }  alt="Shape"/>
                                    </div>  
                                    <div class="cover-shape shape-five layer" data-depth="0.10">                                            
                                        <img src={ shape5 }  alt="Shape"/>
                                    </div>                          
                                </MouseParallaxChild>
                            </div>  

                            <div className="right-container">           
                                <div className="info-cover">
                                    <div className="cover-container-right">
                                        <h4 className="sub-title-cover">Olá, Eu sou</h4>
                                        <h1 className="title-cover">Bruno Costa C.</h1>
                                        <div className="professions-cover">           
                                            <Type />
                                        </div>                                            
                                        <a className="cover-btn" without rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1yN62QAxfL2RHPrZvQx9l3FpdnuzN2ZuK/view?usp=share_link">Baixar CV</a>
                                    </div>           
                                </div>   
                                <div className="profile-image">
                                    <img src={perfil} alt="perfil" />
                                </div> 
                            </div>    

                            <div className="cover-social">
                                <div className="info-social-cover">
                                    <div className="cover-social-container">
                                        <div className="cover-social-icon">
                                            <ul>
                                                <li><a target="_blank" without rel="noreferrer" href="https://github.com/ibrunoc/"><BsGithub className='github-cover'/></a></li>
                                                <li><a target="_blank" without rel="noreferrer" href="https://www.linkedin.com/in/brunocostac/"><BsLinkedin className='linkedin-cover' /></a></li>
                                            </ul> 
                                        </div>          
                                    </div>                           
                                </div> 
                            </div>  

                            <div className="scroll-down">
                                <a href="#About">
                                    <MdArrowDownward className='arrow-down' />    
                                </a>
                            </div>      
                        </div>      
                    </MouseParallaxContainer>
                    <AboutMe />  
                    <Skills />  
                    <CoursesHome /> 
                    <ProjectHome /> 
                    <Service /> 
                    <Curriculum />   
                    <Footer />     
                    <Scroll />
                </div>
            }         
        </>
    );
}