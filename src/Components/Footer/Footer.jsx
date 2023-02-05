import './scss/Footer.modules.scss';

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
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <div class="section-title text-center pb-25">
                                        <h2 class="title">Entre em contato</h2>
                                        <hr />
                                    </div> 
                                </div>
                            </div> 
                            <div class="row justify-content-center">
                                <div class="box box2" data-aos="fade-up-right">
                                    <div class="contact-box text-center mt-30">
                                        <div class="contact-icon">
                                            <SlLocationPin className='Location' />
                                        </div>
                                        <div class="contact-content">
                                            <h6 class="contact-title">Endereço</h6>
                                            <p>Rua Maria Tereza , Jardim Novo Horizonte, Jandira-SP, Brasil</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box box2" data-aos="fade-up">
                                    <div class="contact-box text-center mt-30">
                                        <div class="contact-icon">
                                            <BsPhone className='Phone' />
                                        </div>
                                        <div class="contact-content">
                                            <h6 class="contact-title">Telefone</h6>
                                            <p>+55 (11) 94388-4494</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="box box2" data-aos="fade-up">
                                    <div class="contact-box text-center mt-30">
                                        <div class="contact-icon">
                                            <TfiEmail className='Email' />
                                        </div>
                                        <div class="contact-content">
                                            <h6 class="contact-title">E-mail</h6>
                                            <p>bruno.costa.c06@gmail.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            
                <footer id="footer" class="footer-zone" data-aos="zoom-in">                           
                    <div className='imgBackground4'></div>  
                    <div class="footer-widget pt-30 pb-40">
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-lg-8">
                                    <div class="footer-content text-center">
                                        <p class="mt-">Entre em contato <br/>
                                        Estarei a disposição caso tenha alguma dúvida e deseje saber mais!</p>
                                        <ul>
                                            <li><a target="_blank" rel="noreferrer" href="https://github.com/ibrunoc/"><ImGithub className='GitHub'/></a></li>
                                            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/brunocostac/"><BsLinkedin className='Linkedin' /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-copyright pb-20">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="copyright-text text-center pt-20">
                                        <p>Bruno C. || Copyright © 2023. Todos os direitos reservados</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>                                
                </footer>
            </section>        
        </>
    );
}
