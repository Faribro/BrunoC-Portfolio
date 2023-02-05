import '../Header/scss/Header.modules.scss';
import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import $ from "jquery";

import { BsFillSunFill, BsMoonFill } from "react-icons/bs"; 

import { Link } from "react-scroll";
import { ThemeContext } from '../../Common/Context/ThemeContext';

export function HeaderProject() {

	const context = useContext(ThemeContext);

	function menuHamburger() {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
    
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

	$(window).on('scroll', function(event) {    
        var scroll = $(window).scrollTop();
        if (scroll < 10) {
            $(".navigation").removeClass("sticky");
        } else{
            $(".navigation").addClass("sticky");
        }
    });

  return (
    <>
		<header className='navigation'>  
			<div class="toggleArea">
				<BsFillSunFill className='sun' />
					<input type="checkbox" id="switch" class="toggle-control" />
					<label onClick={context.toggleThemeMode} for="switch"></label>
				<BsMoonFill className='moon' />
            </div>  

			<nav class="desktop">
				<ul>
					<li><Link activeClass="Select" spy={true} smooth={true} to="Home"><NavLink to="/">Inicio</NavLink></Link></li>
					<li><Link activeClass="Select" spy={true} smooth={true} to="Project"><NavLink to="">&lt;Projetos /&gt;</NavLink></Link></li>	
					<li><Link activeClass="Select" spy={true} smooth={true} to="Contact"><NavLink to="">Contato</NavLink></Link></li>
				</ul>
			</nav>
			 
			<div class="mobile">
				<nav class="navbar">
					<ul class="nav-menu">
						<li class="nav-item">
							<Link activeClass="SelectMobile" smooth spy to="Home"><NavLink to="/">Inicio</NavLink></Link>
						</li>					
						<li class="nav-item">
							<Link activeClass="SelectMobile" smooth spy to="Project"><NavLink to="">&lt;Projetos /&gt;</NavLink></Link>
						</li>
						<li class="nav-item">
							<Link activeClass="SelectMobile" smooth spy to="Contact"><NavLink to="">Contato</NavLink></Link>
						</li>
					</ul>
				
						<button onClick={menuHamburger}>
							<div class="hamburger" id="menuHamburger">
								<span class="bar"></span>
								<span class="bar"></span>
								<span class="bar"></span>
							</div>     
						</button>                                       
				</nav>
			</div>	
		</header>
    </>
  );
}