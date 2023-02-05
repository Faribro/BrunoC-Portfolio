import './scss/Home.modules.scss';
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
                    <AnimatedCursor innerSize={8} outerSize={35}  innerScale={1} outerScale={1.7} outerAlpha={0} hasBlendMode={true} outerStyle={{border: '3px solid var(--subtitle2-color)'}} innerStyle={{backgroundColor: 'var(--subtitle2-color)'}} />
                    <div className='imgBackground'></div>   
                    <Header /> 
                    <MouseParallaxContainer>  
                        <div id='Home' class="header-content">                                              
                            <div className='bakc'/>

                            <div className='backgroundCap'>
                                <img src={ backgroundCover }  alt="back"/>
                            </div>  

                            <div className='paralax'>
                                <MouseParallaxChild factorX={0.1} factorY={0.1}>
                                    <div class="header-shape shape-one layer" data-depth="0.10">                                            
                                        <img src={ shape1 }  alt="Shape" />
                                    </div>        
                                    <div class="header-shape shape-two layer" data-depth="0.10">                                            
                                        <img src={ shape2 }  alt="Shape"/>
                                    </div>  
                                    <div class="header-shape shape-three layer" data-depth="0.10">                                            
                                        <img src={ shape3 }  alt="Shape"/>
                                    </div>  
                                    <div class="header-shape shape-four layer" data-depth="0.10">                                            
                                        <img src={ shape4 }  alt="Shape"/>
                                    </div>  
                                    <div class="header-shape shape-five layer" data-depth="0.10">                                            
                                        <img src={ shape5 }  alt="Shape"/>
                                    </div>                          
                                </MouseParallaxChild>
                            </div>  

                            <div class="container">                    
                                <div class="col-xl-5 col-lg-6">
                                    <div className="HomeTitle">
                                        <div class="header-content-right">
                                            <h4 class="sub-titleH">Olá, Eu sou</h4>
                                            <h1 class="titleH">Bruno Costa C.</h1>
                                            <div class="titlePro">              
                                                <Type />
                                            </div>                                            
                                            <a class="main-btn1" without rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1yN62QAxfL2RHPrZvQx9l3FpdnuzN2ZuK/view?usp=share_link">Baixar CV</a>
                                        </div>           
                                    </div>   
                                    <div class="col-lg-6 offset-xl-1">
                                        <div class="header-image d-none d-lg-block">
                                            <img src={perfil} alt="perfil" />
                                        </div> 
                                    </div>     
                                </div>  
                            </div>    

                            <div class="header-social">
                                <div class="container">
                                    <div class="row">
                                        <div class="header-social-icon">
                                            <ul>
                                                <li><a target="_blank" without rel="noreferrer" href="https://github.com/ibrunoc/"><BsGithub className='GitHubHeader'/></a></li>
                                                <li><a target="_blank" without rel="noreferrer" href="https://www.linkedin.com/in/brunocostac/"><BsLinkedin className='LinkedinHeader' /></a></li>
                                            </ul> 
                                        </div>          
                                    </div>                           
                                </div> 
                            </div>  

                            <div className="scroll-down">
                                <a href="#About">
                                    <MdArrowDownward className='ArrowDown' />    
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