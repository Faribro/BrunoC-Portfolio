import './Style/Header.modules.scss';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

import { BsFillSunFill, BsMoonFill } from "react-icons/bs"; 

import { Link } from "react-scroll";
import { ThemeContext } from '../../Common/Context/ThemeContext';

export function Header() {

	const context = useContext(ThemeContext);		
	
	const [isActive, setIsActive] = useState(false);
	  
	const handleClick = () => {
		setIsActive(!isActive);
	};

	const [scroll, setScroll] = useState(0);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
	
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	
	const handleScroll = () => {
	setScroll(window.pageYOffset);
	};

	return (
	<>
		<header className={`navigation ${scroll < 10 ? "" : "sticky"}`}>  
			<div class="toggleArea">
				<BsFillSunFill className='sun' />
					<input type="checkbox" id="switch" class="toggle-control" />
					<label onClick={context.toggleThemeMode} for="switch"></label>
				<BsMoonFill className='moon' />
			</div>  

			<nav class="desktop">
				<ul>
					<li><Link activeClass="select" spy={true} smooth={true} to="Home"><NavLink to="">Inicio</NavLink></Link></li>
					<li><Link activeClass="select" spy={true} smooth={true} to="About"><NavLink to="">Sobre</NavLink></Link></li>
					<li><Link activeClass="select" spy={true} smooth={true} to="Skills"><NavLink to="">Skills</NavLink></Link></li>
					<li><Link activeClass="select" spy={true} smooth={true} to="Courses"><NavLink to="">Formação</NavLink></Link></li>
					<li><Link activeClass="select" spy={true} smooth={true} to="Project"><NavLink to="">&lt;Projetos /&gt;</NavLink></Link></li>					
					<li><Link activeClass="select" spy={true} smooth={true} to="Service"><NavLink to="">Serviços</NavLink></Link></li>
					<li><Link activeClass="select" spy={true} smooth={true} to="Contact"><NavLink to="">Contato</NavLink></Link></li>
				</ul>
			</nav>
				
			<div class="mobile">
				<nav class="navbar">
					<ul className={`nav-menu ${isActive ? "active" : "nav-menu"}`}>
						<li class="nav-item">
							<Link activeClass="select-mobile" smooth spy to="Home"><NavLink to="">Inicio</NavLink></Link>
						</li>
						<li class="nav-item">
							<Link activeClass="select-mobile" smooth spy to="About"><NavLink to="">Sobre</NavLink></Link>
						</li>					
						<li class="nav-item">
							<Link activeClass="select-mobile" smooth spy to="Skills"><NavLink to="/">Skills</NavLink></Link>
						</li>
						<li class="nav-item">
							<Link activeClass="select-mobile" smooth spy to="Courses"><NavLink to="">Formação</NavLink></Link>
						</li>					
						<li class="nav-item">
							<Link activeClass="select-mobile" smooth spy to="Project"><NavLink to="">&lt;Projetos /&gt;</NavLink></Link>
						</li>
						<li class="nav-item">
							<Link activeClass="select-mobile" smooth spy to="Service"><NavLink to="">Serviços</NavLink></Link>
						</li>
						<li class="nav-item">
							<Link activeClass="select-mobile" smooth spy to="Contact"><NavLink to="">Contato</NavLink></Link>
						</li>
					</ul>
				
					<button onClick={handleClick}>
						<div className={`hamburger ${isActive ? "active" : "hamburger"}`}>
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