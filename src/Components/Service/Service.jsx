import './Style/Service.modules.scss';

import { BsCodeSlash, BsPencil, BsFillSkipStartFill } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import { HiOutlineDevicePhoneMobile, HiOutlinePhoto } from "react-icons/hi2";
import { IoGameControllerOutline } from "react-icons/io5";
import { VscDebugStart } from "react-icons/vsc";

export function Service() {
    return (
        <>
            <section id="Service" class="service-zone" data-aos="fade-up">
                    <div class="section-title">
                        <h2 class="title">Serviços</h2>
                        <hr />
                    </div> 
                        
                    <div class="service-info">
                        <div class="service-container">
                            <div class="service">
                                <div class="service-icon">
                                    <BsCodeSlash className='iconService' />                                
                                    <h4 class="service-title">Desenvolvedor Web</h4>                                                                                                                                                                                                                                                                              
                                    <p>Dev. Full-Stack, mas estou focado no Front-End.</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-container">
                            <div class="service">
                                <div class="service-icon">
                                    <HiOutlinePhoto className='iconService' />                                
                                    <h4 class="service-title">Design</h4>                                                                                                                                                                                                                                                                              
                                    <p>Sei criar Design no geral, aplicativos, icones, web, artes, etc...</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-container">
                            <div class="service">
                                <div class="service-icon">
                                    <HiOutlineDevicePhoneMobile className='iconService' />
                                    <h4 class="service-title">Desenvolvedor Mobile</h4>                                                                                                                                                                                                                                                       
                                    <p>Estou aprendendo Desenvolvimento Mobile com React Native.</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-container">
                            <div class="service">
                                <div class="service-icon">                                    
                                    <IoGameControllerOutline className='iconService' />
                                    <h4 class="service-title">Desenvolvedor de Games</h4>                                                                                                                                                  
                                    <p>Criar com Games com Unity, Unreal e GamerMarker.</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-container">
                            <div class="service">
                                <div class="service-icon">
                                    <BsFillSkipStartFill className='iconService' />
                                    <h4 class="service-title">Animação</h4>                                                                                                                      
                                    <p>Criar animações com Cinema 4D e 3Ds Max.</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-container">
                            <div class="service">
                                <div class="service-icon">
                                    <BsPencil className='iconService'/>
                                    <h4 class="service-title">Desenhos</h4>                                                                                                                                                                                
                                    <p>Sei criar desenho com PaintToolSai e Illustrator.</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-container">
                            <div class="service">
                                <div class="service-icon">
                                    <VscDebugStart className='iconService'/>
                                    <h4 class="service-title">Edição</h4>                                                                                                                                                                                                    
                                    <p>Editar vídeos com After Effects e Camtasia Studio.</p>
                                </div>
                            </div>
                        </div>
                        <div class="service-container">
                            <div class="service">
                                <div class="service-icon">
                                    <MdComputer className='iconService'/>
                                    <h4 class="service-title">Montagem de Computador</h4>                                                                                                                                                                                                                      
                                    <p>Montagem e Desmontagem de um PC do Zero.</p>
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </>
    );
}