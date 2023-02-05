import './scss/Error.modules.scss';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import Loading from '../../Components/Loading/Loading';

import { AiFillHtml5  } from "react-icons/ai"; 
import { FaCss3Alt, FaReact, FaSass  } from "react-icons/fa"; 
import { SiPhp, SiJavascript  } from "react-icons/si"; 

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
            <MouseParallaxContainer>
              <section class="wrapper">            
                <MouseParallaxChild factorX={0.1} factorY={0.1}>
                    <AiFillHtml5 class="erro-shape erroIcon-one" data-depth="0.10" />
                    <FaCss3Alt class="erro-shape erroIcon-two" data-depth="0.30" />
                    <SiJavascript class="erro-shape erroIcon-three" data-depth="0.40" />
                    <FaCss3Alt class="erro-shape erroIcon-four" data-depth="0.60" />
                    <AiFillHtml5 class="erro-shape erroIcon-five" data-depth="0.20" />
                    <FaReact class="erro-shape erroIcon-six" data-depth="0.15" />
                    <SiPhp class="erro-shape erroIcon-seven" data-depth="0.50" />
                    <FaReact class="erro-shape erroIcon-eight" data-depth="0.40" />
                    <SiPhp class="erro-shape erroIcon-nine" data-depth="0.20" />
                    <SiJavascript class="erro-shape erroIcon-ten" data-depth="0.30" />
                    <FaSass class="erro-shape erroIcon-onze" data-depth="0.50" />
                </MouseParallaxChild>
                <div class="container"> 
                  <p class="p404">404</p>   
                  <div class="text">
                    <article>
                        <p>Ué? Parece que você se perdeu...</p>
                        <p>Volte para a página inicial!</p>
                        <Link to="/">
                          <button>Inicio</button>
                        </Link>
                    </article>
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