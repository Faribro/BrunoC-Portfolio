import './scss/ProjectHome.modules.scss';
import { NavLink } from "react-router-dom";

import Blind from '../../Pages/Projects/Image/blind.png';
import Governo from '../../Pages/Projects/Image/governo.png';
import Hotel from '../../Pages/Projects/Image/hotel.png';
import Instagram from '../../Pages/Projects/Image/Instagram.png';
import Pizzaria from '../../Pages/Projects/Image/pizzaria.png';
import Placeup from '../../Pages/Projects/Image/placeup.png';
import Pokedex from '../../Pages/Projects/Image/pokedex.png';
import Todolist from '../../Pages/Projects/Image/todolist.png';
import Caoselheiro from '../../Pages/Projects/Image/caoselheiro.png';

import 'aos/dist/aos.css'; 

export function ProjectHome() {

    return (
        <>     
            <section id="Project" class="projects-Home pt-100 pb-80">
                <div class="container container-projectHome">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <div class="section-title text-center pb-25">
                                <h2 class="title-project">Projetos</h2>
                                <hr />
                                <p>Alguns dos projetos feito por mim, em grupo e individual.</p>
                            </div> 
                        </div>
                    </div> 
                    <div class="row classProject">                                
                        <div class="w50 box2">                                    
                        <h2>Animal Space</h2>
                            <div class="single-projectHome text-center mt-30">
                                <div class="projectHome-image">
                                    <a href="https://animal-space.vercel.app/" rel="noreferrer" target="_blank"><img src={Hotel} alt="hotel" /></a>
                                </div>
                                <div class="work-overlay">
                                    <div class="work-content">
                                        <a class="work-title" href="https://github.com/ibrunoc/Animal-Space" rel="noreferrer" target="_blank">Link do Projeto</a>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        <div class="w50 box2">                                    
                            <h2>Governo de SP</h2>
                            <div class="single-projectHome text-center mt-30">
                                <div class="projectHome-image">
                                    <a href="https://governo-de-sp.vercel.app/" rel="noreferrer" target="_blank"><img src={Governo} alt="governo" /></a>
                                </div> 
                                <div class="work-overlay">
                                    <div class="work-content">
                                        <a class="work-title" href="https://github.com/ibrunoc/Governo-de-SP" rel="noreferrer" target="_blank">Link do Projeto</a>
                                    </div>
                                </div>                   
                            </div> 
                        </div>
                        <div class="w50 box2">                                    
                            <h2>Água na Boca</h2>
                            <div class="single-projectHome text-center mt-30">
                                <div class="projectHome-image">
                                    <a href="https://agua-na-boca.vercel.app/" rel="noreferrer" target="_blank"><img src={Pizzaria} alt="pizzaria" /></a>
                                </div>
                                <div class="work-overlay">
                                    <div class="work-content">
                                        <a class="work-title" rel="noreferrer" href="https://github.com/ibrunoc/Agua-Na-Boca" target="_blank">Link do Projeto</a>
                                    </div>
                                </div>   
                            </div> 
                        </div>    
                        <div className='VamoLa'>
                            <div class="PlaceUP text-center">                                                                                    
                            <h2>PlaceUP</h2> 
                                <div class="single-project2">
                                    <div class="projectHome-image">
                                        <a href="https://place-up.vercel.app/" rel="noreferrer" target="_blank"><img src={Placeup} alt="instagram" /></a>
                                    </div>
                                    <div class="work-overlay">
                                        <div class="work-content">
                                            <a class="work-title" rel="noreferrer" href="https://github.com/Place-UP" target="_blank">Link do Projeto</a>
                                        </div>
                                    </div>  
                                </div>
                            </div>  
                            <div className='Goku'>
                                <div class="Instagram">                                            
                                    <h2>Clone do Instagram</h2>
                                    <div class="single-project2">
                                        <div class="projectHome-image">
                                            <a href="https://clone-instagram-bc.vercel.app/" rel="noreferrer" target="_blank"><img src={Instagram} alt="instagram" /></a>
                                        </div>
                                        <div class="work-overlay">
                                            <div class="work-content">
                                                <a class="work-title" href="https://github.com/ibrunoc/Clone_Instagram" rel="noreferrer" target="_blank">Link do Projeto</a>
                                            </div>
                                        </div>  
                                    </div> 
                                </div>          
                                <div class="Pokedex">
                                    <h2>Pokedex</h2>
                                    <div class="single-project2">
                                        <div class="projectHome-image">
                                            <a href="https://pokedex-ihyperbr.vercel.app/" rel="noreferrer" target="_blank"><img src={Pokedex} alt="Pokedex" /></a>
                                        </div>
                                        <div class="work-overlay">
                                            <div class="work-content">
                                                <a class="work-title" href="https://github.com/ibrunoc/Pokedex" rel="noreferrer" target="_blank">Link do Projeto</a>
                                            </div>
                                        </div>  
                                    </div>  
                                </div>   
                            </div>                                    
                        </div>                               
                        <div class="w50 box2">                                    
                            <h2>To Do List</h2>
                            <div class="single-projectHome text-center mt-30">
                                <div class="projectHome-image">
                                    <a href="https://to-do-list-seven-mu.vercel.app/" rel="noreferrer" target="_blank"><img src={ Todolist } alt="Todolist" /></a>
                                </div>
                                <div class="work-overlay">
                                    <div class="work-content">
                                        <a class="work-title" rel="noreferrer" href="https://github.com/ibrunoc/ToDoList" target="_blank">Link do Projeto</a>
                                    </div>
                                </div>  
                            </div>
                        </div> 
                        <div class="w50 box2">                                    
                            <h2>Blind Vision</h2>
                            <div class="single-projectHome text-center mt-30">
                                <div class="projectHome-image">
                                    <a href="https://blind-vision.vercel.app/" rel="noreferrer" target="_blank"><img src={ Blind } alt="Blind" /></a>
                                </div>
                                <div class="work-overlay">
                                    <div class="work-content">
                                        <a class="work-title" href="https://github.com/ibrunoc/Blind-Vision" rel="noreferrer" target="_blank">Link do Projeto</a>
                                    </div>
                                </div> 
                            </div>
                        </div> 
                        <div class="w50 box2">                                    
                            <h2>Caoselheiro</h2>
                            <div class="single-projectHome text-center mt-30">
                                <div class="projectHome-image">
                                    <a href="https://ecoverse-caoselheiro.vercel.app/" rel="noreferrer" target="_blank"><img src={ Caoselheiro } alt="Blind" /></a>
                                </div>
                                <div class="work-overlay">
                                    <div class="work-content">
                                        <a class="work-title" href="https://github.com/ibrunoc/ecoverse-caoselheiro" rel="noreferrer" target="_blank">Link do Projeto</a>
                                    </div>
                                </div> 
                            </div>
                        </div> 
                    </div> 
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="projectHome-more text-center mt-50">
                                <NavLink to="/Projects"><button class="main-btn">Mais Projetos</button></NavLink>
                            </div> 
                        </div>
                    </div> 
                </div> 
            </section>                    
        </>
    );
}