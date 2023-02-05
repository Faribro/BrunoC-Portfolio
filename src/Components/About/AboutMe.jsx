import './scss/About.modules.scss';

import { BsFillCalendarDateFill, BsFillEnvelopeFill, BsFillPhoneFill, BsFillMapFill } from 'react-icons/bs';

export function AboutMe() {
    return (
        <>
            <section id="About" class="about-zone pt-100 pb-0" data-aos="fade-up">
                <div class="container">
                    <div class="section-title text-center">
                        <h2 class="title">Sobre mim</h2>
                        <hr />                            
                        <p>Irei falar um pouco sobre mim e meus conhecimentos. <br />
                        Eu sou um Developer Full-Stack, mas atualmente estou focado no Front-End e Designer.</p>
                    </div> 
                    <div class="">
                        <div class="col-lg-6"> 
                            <div class="about-content mt-50">
                                <div className='about'>
                                    <h5 class="about-title" data-aos="fade-up">Olá, tudo bem?</h5>
                                    <br />
                                    <p data-aos="fade-up">Eu me chamo Bruno, tenho 20 anos e atualmente estou morando em Jandira-SP e estou em busca do meu primeiro emprego como desenvolvedor.</p>                                     <br />   
                                    <p data-aos="fade-up">Já finalizei o ensino médio. Fiz curso na Microlins e no Instituto PROA e faço cursos na área de TI na Danki Code e na Udemy, sou programador Full-Stack, mas estou focado no desenvolvimento Front-end, e estou fazendo faculdade de análise e desenvolvimento de sistema na Estácio.</p>                                    <br />    
                                    <p data-aos="fade-up">Tenho conhecimentos em programação web, de games e de aplicativos e na área de design, sei fazer animações e editar vídeos, tenho conhecimento básico na área de banco de dados. </p>                                        <br />    
                                    <p data-aos="fade-up">Sou bastante esforçado e focado, dedicado, criativo, objetivo. Gosto sempre de aprender coisas novas e ampliar meus conhecimentos e principalmente quando o assunto é tecnologia que eu amo. Bom esse foi um “pequeno” resumo sobre mim e meus conhecimentos, muito obrigado!</p>
                                </div>
                                
                                <div className='Teste'>
                                    <ul class="clearfix">
                                        <li>
                                            <div class="single-info d-flex align-items-center" data-aos="fade-up">
                                                <div class="info-icon">
                                                    <BsFillCalendarDateFill className='aboutIcon' />
                                                </div>
                                                <div class="info-text">
                                                    <p><span>Data de nascimento:</span> 06 Abril 2002</p>
                                                </div>
                                            </div> 
                                        </li>
                                        <li>
                                            <div class="single-info d-flex align-items-center" data-aos="fade-up">
                                                <div class="info-icon">
                                                    <BsFillEnvelopeFill className='aboutIcon' />
                                                </div>
                                                <div class="info-text">
                                                    <p><span>E-mail:</span> bruno.costa.c06@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="single-info d-flex align-items-center" data-aos="fade-up">
                                                <div class="info-icon">                                                
                                                    <BsFillPhoneFill className='aboutIcon' />
                                                </div>
                                                <div class="info-text">
                                                    <p><span>Telefone:</span> +55 (11)94388-4494</p>
                                                </div>
                                            </div> 
                                        </li>
                                        <li>
                                            <div class="single-info d-flex align-items-center" data-aos="fade-up">
                                                <div class="info-icon">                                                                             
                                                    <BsFillMapFill className='aboutIcon' />
                                                </div>
                                                <div class="info-text">
                                                    <p><span>Endereço:</span> Jandira-SP</p>
                                                </div>
                                            </div> 
                                        </li>
                                    </ul>
                                </div>                                
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section>
        </>
    );
}