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

function Error() {
  
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
                <section className="error-404">           
                  <MouseParallaxChild factorX={0.04} factorY={0.1}>
                      <AiFillHtml5 className="erro-shape erro-icon-one" />
                      <FaCss3Alt className="erro-shape erro-icon-two" />
                      <SiJavascript className="erro-shape erro-icon-three" />
                      <FaPython className="erro-shape erro-icon-four" />
                      <FaJava className="erro-shape erro-icon-five" />
                      <SiTypescript className="erro-shape erro-icon-six" />
                      <FaBootstrap className="erro-shape erro-icon-seven" />
                      <FaReact className="erro-shape erro-icon-eight" />
                      <SiPhp className="erro-shape erro-icon-nine" />
                      <SiAdobephotoshop className="erro-shape erro-icon-ten" />
                      <FaSass className="erro-shape erro-icon-eleven" />
                  </MouseParallaxChild>

                  <article className="container-erro"> 
                    <h2 className="text-404">404</h2>   
                      <div className='text-erro'>
                          <p>Ué? Parece que você se perdeu...</p>
                          <p>Volte para a página inicial!</p>
                          <Link to="/"><button>Inicio</button></Link>
                      </div>
                  </article>
                </section>	           
              </MouseParallaxContainer>   
          </div>         
        }         
      </>	    
    );
}

export default Error;

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