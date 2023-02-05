import './scss/Courses.modules.scss';
import { useState, useEffect } from 'react';

import Loading from '../../Components/Loading/Loading';
import { HeaderCourse } from '../../Components/HeaderCourse/HeaderCourse';
import { Footer } from '../../Components/Footer/Footer';
import { Scroll } from '../../Components/ScrollTop/Scroll';

import Estacio from './Image/Estacio-Logo.jpg';
import Proa from './Image/Proa-Logo.jpg';
import DankiCode from './Image/DankiCode-Logo.jpg';
import Udemy from './Image/Udemy-Logo.jpg';
import Microlins from './Image/Microlins-Logo.jpg';

import { IoIosSchool } from 'react-icons/io';
import { RiComputerFill } from 'react-icons/ri';

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import AnimatedCursor from "react-animated-cursor";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export function Courses() {
    
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
                    <HeaderCourse /> 
                    <section id='Courses' className="courses-zone">
                        <div class="container">
                            <div class="title">
                                <h2>Formação Acadêmica</h2>            
                                <hr />
                            </div>
                            
                            <VerticalTimeline lineColor='var(--subtitle-color)'>
                                <VerticalTimelineElement contentStyle={{ background: 'var(--bg-color)', border: '2px solid var(--body-color)' }}  contentArrowStyle={{ borderRight: '9px solid  var(--body-color)' }}
                                    iconStyle={{ background: 'var(--body-color)', color: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--subtitle-color)', borderRadius: '0px' }}
                                    date="2012 - Atual"
                                    icon={ <RiComputerFill size={70} /> } >
                                    <h3>Deste que eu ganhei meu primeiro PC, eu sempre tive curiosidade sobre Tecnologia e pesquisava sobre, e pesquisando e praticando.</h3>
                                    <h3>Aprendi sobre Rede, Internet, um pouco sobre Ciber Segurança, Informática, PhotoShop, Desenhos com PaintToolSai, Desenho 2D e 3D, Edição de Vídeos, Animação com Cinema 4D, um pouco de Modelagem 3D.</h3>  
                                    <h3>Criação de Thumbnail, Montagem de PC, e diversas outras coisas... De tudo um pouco sobre tecnologia.</h3>  
                                </VerticalTimelineElement>

                                <VerticalTimelineElement contentStyle={{ background: 'var(--bg-color)', border: '2px solid var(--body-color)' }}  contentArrowStyle={{ borderRight: '9px solid  var(--body-color)' }}
                                    iconStyle={{ background: 'var(--body-color)', color: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--subtitle-color)', borderRadius: '0px' }}
                                    date="07/2018"
                                    icon={ <MicrolinsIco /> } >
                                    <h3>Meu primeiro curso e contato com a programação.</h3>   
                                    <h2 class="titleCourse">Microlins</h2>             
                                    <hr />                  
                                    <img class="logo-institute" alt='Microlins' src={ Microlins } />    
                                </VerticalTimelineElement>

                                <VerticalTimelineElement contentStyle={{ background: 'var(--bg-color)', border: '2px solid var(--body-color)' }}  contentArrowStyle={{ borderRight: '9px solid  var(--body-color)' }} 
                                    iconStyle={{ background: 'var(--body-color)', color: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--subtitle-color)', borderRadius: '0px' }}
                                    date="12/2019"
                                    icon={ <IoIosSchool size={70} /> } >
                                    <h3>Finalizei o Ensino Médio!</h3> 
                                </VerticalTimelineElement>

                                <VerticalTimelineElement contentStyle={{ background: 'var(--bg-color)', border: '2px solid var(--body-color)' }}  contentArrowStyle={{ borderRight: '9px solid  var(--body-color)' }}
                                    iconStyle={{ background: 'var(--body-color)', color: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--subtitle-color)', borderRadius: '0px' }}                               
                                    date="07/2018 - 02/2020"
                                    icon={ <MicrolinsIco /> } >
                                    <h3>Na Microlins eu escolhi programação de games e acabei fazendo estes cursos, o que não tem nada haver com programação de games.</h3> 
                                    <h3 class="course pt-20">"Programação de Games"</h3>         
                                    <div class="info-course text-center">                                                        
                                        <p>Informática</p>
                                        <p>Microsoft Office (Excel, Word, PowerPoint, etc...)</p>
                                        <p>Pacote Adobe ( PhotoShop, AfterEffects, Illustrator )</p>
                                        <p>Animação com 3Ds Max</p>
                                        <p>Lógica de Programação</p>
                                        <p>Programação C# em sistemas</p>
                                        <p>Banco de Dados</p>
                                    </div>
                                    <button className='main-btn' ><a href='https://www.microlins.com.br/cursos' rel="noreferrer" target="_blank">SITE</a></button>
                                </VerticalTimelineElement>
                                
                                <VerticalTimelineElement contentStyle={{ background: 'var(--bg-color)', border: '2px solid var(--body-color)' }}  contentArrowStyle={{ borderRight: '9px solid  var(--body-color)' }}
                                    iconStyle={{ background: 'var(--body-color)', color: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--subtitle-color)', borderRadius: '0px' }}                               
                                    date="02/2020"
                                    icon={ <DankiIco /> } >
                                    <h3>Terminando a Microlins, fiquei um pouco desanimado por ser um curso desatualizado e não ser do que eu queria.</h3>
                                    <h3>E por anúncio no Youtube eu conheci a Danki Code!</h3>
                                    <h2 class="titleCourse">Danki Code</h2>             
                                    <hr />                                          
                                    <img class="logo-institute" alt='Danki Code' src={ DankiCode }  />        
                                </VerticalTimelineElement>
                                
                                <VerticalTimelineElement contentStyle={{ background: 'var(--bg-color)', border: '2px solid var(--body-color)' }}  contentArrowStyle={{ borderRight: '9px solid  var(--body-color)' }}
                                    iconStyle={{ background: 'var(--body-color)', color: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--subtitle-color)', borderRadius: '0px' }}                                
                                    date="02/2020 - Atual"
                                    icon={ <DankiIco /> } >
                                    <h3>Na Danki Code aprendi realmente programação de games e me interessei por outras áreas de programação
                                        e comprei o pacote Full-Stack Master, onde aprendi Desenvolvimento Web e estou aprendendo mobile.</h3>
                                    <h3 class="course pt-20">Full-Stack Master</h3>
                                    <div class="info-course text-center">                                                        
                                        <p>Desenvolvedor Full-Stack</p>
                                        <p>Desenvolvimento Mobile</p>
                                        <p>Desenvolvimento de Games 2D e 3D</p>
                                        <p>PHP</p>
                                        <p>JavaScript</p>
                                        <p>Python</p>                                            
                                        <p>NodeJS</p>                                                                                     
                                        <p>FireBase</p>
                                        <p>Inglês para Programadores</p>
                                        <p>WordPress</p>                                                                                
                                        <p>Banco de Dados</p>
                                        <p>Lógica de Programação</p>
                                        <p>Produtividade para Programadores</p>
                                        <p>Agência de Web</p>
                                        <p>Infraestrutura Web</p>
                                        <p>Design de Web, Aplicativos</p>
                                        <p>Marketing Digital</p>
                                    </div>
                                    <button className='main-btn'><a href='https://cursos.dankicode.com/cursos' rel="noreferrer" target="_blank">SITE</a></button>       
                                </VerticalTimelineElement>
                            
                                <VerticalTimelineElement contentStyle={{ background: 'var(--bg-color)', border: '2px solid var(--body-color)' }}  contentArrowStyle={{ borderRight: '9px solid  var(--body-color)' }}
                                    iconStyle={{ background: 'var(--body-color)', color: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--subtitle-color)', borderRadius: '0px' }}                                
                                    date="05/2021"
                                    icon={ <ProaIco /> }>
                                    <h3>E na busca do meu primeiro emprego, eu conheci o Proa. Uma plataforma que ajudava e dava suporte para o mercado de trabalho na área de programação.</h3>
                                    <h2 class="titleCourse">Instituto PROA</h2>      
                                    <hr />                                                                                                                                                               
                                    <img class="logo-institute" alt='Proa' src={ Proa } />   
                                </VerticalTimelineElement>
                                
                                <VerticalTimelineElement contentStyle={{ background: 'var(--bg-color)', border: '2px solid var(--body-color)' }}  contentArrowStyle={{ borderRight: '9px solid  var(--body-color)' }}
                                    iconStyle={{ background: 'var(--body-color)', color: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--subtitle-color)', borderRadius: '0px' }}                                
                                    date="01/2022"
                                    icon={ <ProaIco /> }>
                                        <h3>Participei de um processo seletivo com 5 etapas em 05/2021 e não passei, fiz novamente em 12/2021 e dessa vez passei.</h3>
                                        <h3>O Proa não foi o curso que mais me ensinou, mas foi o mais importante. Em 6 meses eu realmente entendi como funcionava o mercado de programação, fiz amizades na área, tive um suporte de verdade
                                            e aumentei minha Networking.</h3>
                                        <h3 class="course pt-20">Programador Web Java</h3>              
                                        <div class="info-course">                                                        
                                            <p>HTML5</p>
                                            <p>CSS3</p>
                                            <p>JavaScript</p>
                                            <p>JAVA</p>
                                            <p>ReactJS</p>                                                    
                                            <p>Banco de Dados</p>
                                            <p>Lógica de Programação</p>                                            
                                            <p>Metodologia Ágil ( Scrum, Kanban)</p> 
                                            <p>UI/UX Design</p>
                                        </div>        
                                        <button className='main-btn'><a href='https://www.proa.org.br/proprofissao/' rel="noreferrer" target="_blank">SITE</a></button>                                  
                                </VerticalTimelineElement>
                                
                                <VerticalTimelineElement contentStyle={{ background: 'var(--bg-color)', border: '2px solid var(--body-color)' }}  contentArrowStyle={{ borderRight: '9px solid  var(--body-color)' }}
                                    iconStyle={{ background: 'var(--body-color)', color: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--subtitle-color)', borderRadius: '0px' }}                             
                                    date="06/2022 - Atual"
                                    icon={ <UdemyIco /> }>
                                        <h3>Terminando o Proa, eu quis desenvolver o Inglês e continuar na pegada estudando e comprei esses cursos na Udemy:</h3>
                                        <h2 class="titleCourse">Udemy</h2>             
                                        <hr />                                          
                                        <img class="logo-institute" alt='Udemy' src={ Udemy } />   
                                        <h3 class="course pt-20">Cursos Separados</h3>
                                        <div class="info-course text-center"> 
                                            <p>Inglês</p>                                                
                                            <p>JavaScript</p>                                                    
                                            <p>TypeScript</p>
                                            <p>ReactJS</p>                                                    
                                            <p>NextJS</p>                                              
                                            <p>Python</p>
                                        </div>
                                        <button className='main-btn'><a href='https://www.udemy.com/' rel="noreferrer" target="_blank">SITE</a></button>
                                
                                </VerticalTimelineElement>

                                <VerticalTimelineElement contentStyle={{ background: 'var(--bg-color)', border: '2px solid var(--body-color)' }}  contentArrowStyle={{ borderRight: '9px solid  var(--body-color)' }}
                                    iconStyle={{ background: 'var(--body-color)', color: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--subtitle-color)', borderRadius: '0px' }}                                
                                    date="12/2022"
                                    icon={ <EstacioIco /> }>
                                        <h3>E finalmente comecei minha faculdade e escolhi a área que eu amo. Tecnologia!</h3>
                                        <h2 class="titleCourse">Estácio</h2> 
                                        <hr />                                         
                                        <img class="logo-institute" alt='Estacio' src={ Estacio } />                                  
                                </VerticalTimelineElement>

                                <VerticalTimelineElement contentStyle={{ background: 'var(--bg-color)', border: '2px solid var(--body-color)' }}  contentArrowStyle={{ borderRight: '9px solid  var(--body-color)' }}
                                    iconStyle={{ background: 'var(--body-color)', color: 'var(--bg-color)', boxShadow: '0 0 0 4px var(--subtitle-color)', borderRadius: '0px' }}                                
                                    date="12/2022 - 06/2024"
                                    icon={ <EstacioIco /> }>
                                        <h3>Na faculdade nesse bimestre estamos vendo as seguintes matérias:</h3>
                                        <h3 class="course pt-20">Análise e Desenvolvimento de Sistemas</h3>
                                        <div class="info-course">                                                        
                                            <p>Arquitetura de Computadores</p>
                                            <p>Desenv. Web em Html5, Css, Javascript e Php</p>
                                            <p>Introdução à Segurança da Informação</p>
                                            <p>Paradigmas de Linguagens de Programação em Python</p>
                                            <p>Pensamento Computacional</p>
                                        </div>
                                        <button className='main-btn'><a href='https://estacio.br/cursos/graduacao/analise-e-desenvolvimento-de-sistemas' rel="noreferrer" target="_blank">SITE</a></button>
                                </VerticalTimelineElement>
                            </VerticalTimeline>               
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

export function MicrolinsIco() {
    return (
        <>       
            <img className='IconCourse' src={ Microlins } />                                           
        </>	    
    );
}

export function DankiIco() {
    return (
        <>       
            <img className='IconCourse' src={ DankiCode } />                                           
        </>	    
    );
}

export function ProaIco() {
    return (
        <>       
            <img className='IconCourse' src={ Proa } />                                           
        </>	    
    );
}

export function UdemyIco() {
    return (
        <>       
            <img className='IconCourse' src={ Udemy } />                                           
        </>	    
    );
}

export function EstacioIco() {
    return (
        <>       
            <img className='IconCourse' src={ Estacio } />                                           
        </>	    
    );
}