import './Style/Error.modules.scss';
import './Style/Shape.modules.scss';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Loading from '../../Components/Loading/Loading';

import { AiFillHtml5  } from "react-icons/ai"; 
import { FaCss3Alt, FaReact, FaSass, FaJava, FaPython, FaBootstrap  } from "react-icons/fa"; 
import { SiPhp, SiJavascript, SiTypescript, SiAdobephotoshop  } from "react-icons/si"; 

import AOS from 'aos';
import 'aos/dist/aos.css'; 
import AnimatedCursor from "react-animated-cursor";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

export function Error() {
  
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
            <MouseParallaxContainer>
              <section class="error-404">           
                <MouseParallaxChild factorX={0.04} factorY={0.1}>
                    <AiFillHtml5 class="erro-shape erro-icon-one" />
                    <FaCss3Alt class="erro-shape erro-icon-two" />
                    <SiJavascript class="erro-shape erro-icon-three" />
                    <FaPython class="erro-shape erro-icon-four" />
                    <FaJava class="erro-shape erro-icon-five" />
                    <SiTypescript class="erro-shape erro-icon-six" />
                    <FaBootstrap class="erro-shape erro-icon-seven" />
                    <FaReact class="erro-shape erro-icon-eight" />
                    <SiPhp class="erro-shape erro-icon-nine" />
                    <SiAdobephotoshop class="erro-shape erro-icon-ten" />
                    <FaSass class="erro-shape erro-icon-eleven" />
                </MouseParallaxChild>

                <div class="container-erro"> 
                  <h2 class="text-404">404</h2>   
                    <div className='text-erro'>
                        <p>Ué? Parece que você se perdeu...</p>
                        <p>Volte para a página inicial!</p>
                        <Link to="/"><button>Inicio</button></Link>
                    </div>
                </div>
              </section>	           
            </MouseParallaxContainer>   
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