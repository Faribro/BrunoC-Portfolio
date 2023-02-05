import './scss/Skills.modules.scss';
import { useState } from 'react';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export function Skills() {

    function menuHamburgerr() {
        const hamburgerr = document.querySelector(".hamburgerr");    
        hamburgerr.classList.toggle("active");
    }

    function menuHamburgerr2() {
        const hamburgerr = document.querySelector(".hamburgerr2");    
        hamburgerr.classList.toggle("active");
    }

    function menuHamburgerr3() {
        const hamburgerr = document.querySelector(".hamburgerr3");    
        hamburgerr.classList.toggle("active");
    }

    const percentage = 90;
    const percentage2 = 80;
    const percentage3 = 50;
    const percentage4 = 60;
    const percentage5 = 45;
    const percentage6 = 35;    
    const percentage7 = 25;

    const [showFront,setFront]=useState(false);
    const [showBack, setBack]=useState(false);
    const [showO, setO]=useState(false);

    return (
        <>
           <section id='Skills' class="skills-zone pt-100 pb-0">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-8">
                        <div class="section-title">
                            <h2 class="title">Skills</h2>
                            <hr />
                        </div> 
                    </div>
                </div>   

                <div class="skills">
                    <div id="frontEnd" className='frontEnd'>                        
                        <button className="frontTeste" onClick={()=>setFront(!showFront)} >   
                            <div onClick={menuHamburgerr} >                           					
                                    <div class="hamburgerr">
                                        <span class="barr"></span>
                                        <span class="barr"></span>
                                    </div>   
                                <h1>Front-End</h1>		  
                            </div> 
                        </button>   

                        {
                        showFront?
                            <div className='CircularContainer'>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>HTML</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage2} text={`${percentage2}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>CSS</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage3} text={`${percentage3}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>SaSS</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage4} text={`${percentage4}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>JavaScript</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>JQuery</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>React.JS</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage6} text={`${percentage6}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>Next.JS</h1>
                                    </div>
                                    <div className='circular'>
                                        <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                        <h1>BootStrap</h1>
                                    </div>
                            </div>
                        :null
                        }      
                    </div>
                </div>                     

                <div class="skills">
                    <div id="backEnd" className='backEnd'>
                        <button className="frontTeste" onClick={()=>setBack(!showBack)}>
                            <div onClick={menuHamburgerr2} >                             					
                                    <div class="hamburgerr2">
                                        <span class="barr2"></span>
                                        <span class="barr2"></span>
                                    </div>   
                                <h1>Back-End</h1>		
                            </div> 
                        </button>  

                        {
                        showBack?
                            <div className='CircularContainer2'>
                                <div className='circular'>
                                    <CircularProgressbar value={percentage3} text={`${percentage3}%`} counterClockwise styles={buildStyles({ text: "Impact", textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>PHP</h1>
                                </div>
                                <div className='circular'>
                                    <CircularProgressbar value={percentage6} text={`${percentage6}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>Python</h1>
                                </div>
                                <div className='circular'>
                                    <CircularProgressbar value={percentage6} text={`${percentage6}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>Node.Js</h1>
                                </div>   
                                <div className='circular'>
                                    <CircularProgressbar value={percentage7} text={`${percentage7}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>React Native</h1>
                                </div>   
                                <div className='circular'>
                                    <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>TypeScript</h1>
                                </div>
                                <div className='circular'>
                                    <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>Java</h1>
                                </div>  
                                <div className='circular'>
                                    <CircularProgressbar value={percentage6} text={`${percentage6}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>C#</h1>
                                </div>                          
                            </div> 
                        :null
                        }         
                    </div>
                </div> 

                <div class="skills">
                    <div id="outros" className='outros'>
                        <button className="frontTeste" onClick={()=>setO(!showO)}>     
                            <div onClick={menuHamburgerr3}>   
                                <div class="hamburgerr3">
                                        <span class="barr3"></span>
                                        <span class="barr3"></span>
                                    </div>                                
                                <h1>Designer, Animação, Desenho e Hardware</h1>	                             					
                                    
                            </div>                        
                        </button> 

                        {
                        showO?
                            <div className='CircularContainer3'>
                                <div className='circular'>
                                    <CircularProgressbar value={percentage2} text={`${percentage2}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>PhotoShop</h1>
                                </div>
                                <div className='circular'>
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>Paint Tool Sai</h1>
                                </div>
                                <div className='circular'>
                                    <CircularProgressbar value={percentage2} text={`${percentage2}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>Figma</h1>
                                </div>
                                <div className='circular'>
                                    <CircularProgressbar value={percentage4} text={`${percentage4}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>Cinema 4D</h1>
                                </div>
                                <div className='circular'>
                                    <CircularProgressbar value={percentage6} text={`${percentage6}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>3Ds Max</h1>
                                </div>
                                <div className='circular'>
                                    <CircularProgressbar value={percentage5} text={`${percentage5}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>After Effects</h1>
                                </div>
                                <div className='circular'>
                                    <CircularProgressbar value={percentage} text={`${percentage}%`} counterClockwise styles={buildStyles({textColor: "var(--body-color)", pathColor: "var(--subtitle-color)", trailColor: "rgba(150,150,150,0.3)"})} />
                                    <h1>Montagem de PC</h1>
                                </div>
                            </div>  
                        :null
                        }      
                    </div>
                </div>
            </div> 
            </section>
        </>
    );
}  