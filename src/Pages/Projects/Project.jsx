import './scss/Project.modules.scss';
import { useState, useEffect } from 'react';

import Loading from '../../Components/Loading/Loading';
import { HeaderProject } from '../../Components/HeaderProject/HeaderProject';
import { Footer } from '../../Components/Footer/Footer';
import { Scroll } from '../../Components/ScrollTop/Scroll';

import Blind from './Image/blind.png';
import Governo from './Image/governo.png';
import Hotel from './Image/hotel.png';
import Instagram from './Image/Instagram.png';
import Pizzaria from './Image/pizzaria.png';
import Placeup from './Image/placeup.png';
import Pokedex from './Image/pokedex.png';
import Todolist from './Image/todolist.png';
import Caoselheiro from './Image/caoselheiro.png';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import AnimatedCursor from "react-animated-cursor";

export function Projects() {

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
                <AnimatedCursor
                    innerSize={8}
                    outerSize={35}
                    innerScale={1}
                    outerScale={1.7}
                    outerAlpha={0}
                    hasBlendMode={true}
                    outerStyle={{
                        border: '3px solid var(--subtitle2-color)'
                    }}
                    innerStyle={{
                        backgroundColor: 'var(--subtitle2-color)'
                }} />
                <HeaderProject />
                    <section id='Project' className="projects-zone" data-aos="fade-up">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    <div className="section-title text-center pb-25">
                                        <h2 className="title-project">Projetos</h2>
                                        <hr />
                                    </div> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="container-projects w50 box2" data-aos="fade-right">
                                    <div className="single-project text-center mt-30">
                                        <div className="project-image">
                                            <h2>PlaceUP</h2>
                                            <a href="https://place-up.vercel.app/" rel="noreferrer" target="_blank"><img src={ Placeup } alt="Placeup" /></a>                                                                                                                                                                                                                                                          
                                            <p>Meu TCC feito no PROA, a PlaceUP  uma plataforma online que auxilia o comerciamente a precificar e expor seus produtos, e disponibiliza uma vitrine online para que os clientes possam reservar seus produtos favoritos sem sair de casa!</p>
                                        </div>
                                    </div>
                                </div>  
                                <div class="w50 box2" data-aos="fade-left"> 
                                    <div class="single-project text-center mt-30">
                                        <div class="project-image">
                                            <h2>Animal Space</h2>
                                            <a href="https://animal-space.vercel.app/" rel="noreferrer" target="_blank"><img src={ Hotel } alt="hotel" /></a>                                                                                                                                                                                                                     
                                            <p>Um tema de projeto sortiado e feito no curso do Proa. Um hotel para animais.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="w50 box2" data-aos="fade-right">
                                    <div class="single-project text-center mt-30">
                                        <div class="project-image">
                                            <h2>Governo de SP</h2>
                                            <a href="https://governo-de-sp.vercel.app/" rel="noreferrer" target="_blank"><img src={ Governo } alt="governo" /></a>                                                                                                                                                                            
                                            <p>Um projeto feito no Proa em grupo, escolher um site e recriar o site do zero e o design. O site que escolhemos para recriar o site do Governo de SP, já que o design não agradava.</p>
                                        </div>                    
                                    </div>
                                </div>
                                <div class="w50 box2" data-aos="fade-left">
                                    <div class="single-project text-center mt-30">
                                        <div class="project-image">
                                            <h2>Água na Boca</h2>
                                            <a href="https://agua-na-boca.vercel.app/" rel="noreferrer" target="_blank"><img src={ Pizzaria } alt="Pizzaria" /></a>                                                                                                                                  
                                            <p>Uma landing page para uma pizzaria do meu bairro.</p>
                                        </div>
                                    </div>
                                </div>    
                                <div class="w50 box2" data-aos="fade-right">
                                    <div class="single-project text-center mt-30">
                                        <div class="project-image">
                                            <h2>Clone do Instagram</h2>
                                            <a href="https://clone-instagram-bc.vercel.app/" rel="noreferrer" target="_blank"><img src={ Instagram }  alt="Instagram" /></a>                                                                                        
                                            <p>Este foi o um desafio no curso do Proa a criar um clone do Instagram de Maio de 2022.</p>
                                        </div>
                                    </div> 
                                </div>        
                                <div class="w50 box2" data-aos="fade-left">
                                    <div class="single-project text-center mt-30">
                                        <div class="project-image">
                                            <h2>Pokedex</h2>
                                            <a href="https://pokedex-ihyperbr.vercel.app/" rel="noreferrer" target="_blank"><img src={ Pokedex } alt="Pokedex" /></a>
                                            <p>Esse é um projeto simples, onde eu criei uma pokedex com base no vídeo do Manual do Dev.</p>
                                        </div>
                                    </div>
                                </div>   
                                <div class="w50 box2" data-aos="fade-right">
                                    <div class="single-project text-center mt-30">
                                        <div class="project-image">
                                            <h2>To Do List</h2>
                                            <a href="https://to-do-list-seven-mu.vercel.app/" rel="noreferrer" target="_blank"><img src={ Todolist } alt="Todolist" /></a>                                            
                                            <p>Esse é um ToDoList simples que eu criei apenas para treinar.</p>
                                        </div>
                                    </div>
                                </div> 
                                <div class="w50 box2" data-aos="fade-left">
                                    <div class="single-project text-center mt-30">
                                        <div class="project-image">
                                            <h2>Blind Vision</h2>
                                            <a href="https://blind-vision.vercel.app/" rel="noreferrer" target="_blank"><img src={ Blind } alt="Blind" /></a>                                                                                      
                                            <p>Esse foi um desafio feito no Proa onde era apenas criar uma ideia e um site básico.</p>
                                        </div>
                                    </div>
                                </div> 
                                <div class="w50 box2" data-aos="fade-up">
                                    <div class="single-project text-center mt-30">
                                        <div class="project-image">
                                            <h2>Caoselheiro</h2>
                                            <a href="https://ecoverse-caoselheiro.vercel.app/" rel="noreferrer" target="_blank"><img src={ Caoselheiro } alt="Blind" /></a>                                                                                      
                                            <p>Esse foi um desafio de um processo seletivo.</p>
                                        </div>
                                    </div>
                                </div> 
                            </div>              
                        </div> 
                    </section>       
                <Footer />
                <Scroll />   
            </div>
        } 
    </>	    
  );
}

AOS.init({
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false, 
    debounceDelay: 50, 
    throttleDelay: 99,   
  
    offset: 120, 
    delay: 0, 
    duration: 1000, 
    easing: 'ease', 
    once: true, 
    mirror: false, 
    anchorPlacement: 'top-bottom', 
});
