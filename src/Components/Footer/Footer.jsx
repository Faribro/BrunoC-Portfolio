import './Style/Footer.modules.scss';

import { TfiEmail } from "react-icons/tfi"; 
import { BsPhone, BsLinkedin } from "react-icons/bs"; 
import { ImGithub } from "react-icons/im"; 
import { SlLocationPin } from "react-icons/sl"; 

export function Footer() { 
    return (
        <>
            <section id="Contact">                    
                <div class="contact-zone" data-aos="fade-up"> 
                    <div class="container">
                        <div class="section-title">
                            <h2 class="title">Entre em contato</h2>
                            <hr />
                        </div> 

                        <div class="boxesInfo">
                            <div class="boxContainer" data-aos="fade-up-right">
                                <div class="contact-box">
                                    <div class="contact-info">
                                        <SlLocationPin className='Location' />                                      
                                        <h6 class="contact-title">Endereço</h6>
                                        <p>Rua Maria Tereza , Jardim Novo Horizonte, Jandira-SP, Brasil</p>
                                    </div>
                                </div>
                            </div>
                            <div class="boxContainer" data-aos="fade-up">
                                <div class="contact-box">
                                    <div class="contact-info">
                                        <BsPhone className='Phone' />
                                        <h6 class="contact-title">Telefone</h6>
                                        <p>+55 (11) 94388-4494</p>
                                    </div>
                                </div>
                            </div>
                            <div class="boxContainer" data-aos="fade-up">
                                <div class="contact-box">
                                    <div class="contact-info">
                                        <TfiEmail className='Email' />
                                        <h6 class="contact-title">E-mail</h6>
                                        <p>bruno.costa.c06@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                <footer id="footer" class="footer-zone" data-aos="zoom-in">                            
                    <div class="footer-widget">
                        <div class="footer-content">
                            <p>Entre em contato <br/>
                            Estarei a disposição caso tenha alguma dúvida e deseje saber mais!</p>
                            <ul>
                                <li><a target="_blank" rel="noreferrer" href="https://github.com/ibrunoc/"><ImGithub className='GitHub'/></a></li>
                                <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brunocostac/"><BsLinkedin className='Linkedin' /></a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="footer-copyright">
                        <div class="copyright-text text-center pt-20">
                            <p>Bruno C. Todos os direitos reservados || Copyright © 2023.</p>
                        </div>
                    </div>                                
                </footer>
            </section>        
        </>
    );
}
