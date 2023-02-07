import '../Style/Header.modules.scss';
import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";

import { BsFillSunFill, BsMoonFill } from "react-icons/bs"; 

import { Link } from "react-scroll";
import { ThemeContext } from '../../../Common/Context/ThemeContext';

export function HeaderProject() {

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
				<section className="toggleArea">
					<BsFillSunFill className='sun' />
						<input type="checkbox" id="switch" class="toggle-control" />
						<label onClick={context.toggleThemeMode} for="switch"></label>
					<BsMoonFill className='moon' />
				</section>  

				<nav className="desktop">
					<ul>
						<li><Link activeClass="select" spy={true} to="Home"><NavLink to="/">Inicio</NavLink></Link></li>
						<li><Link activeClass="select" spy={true} to="Project"><NavLink to="">&lt;Projetos /&gt;</NavLink></Link></li>	
						<li><Link activeClass="select" spy={true} to="Contact"><NavLink to="">Contato</NavLink></Link></li>
					</ul>
				</nav>
					
				<section className="mobile">
					<nav className="navbar">
						<ul className={`nav-menu ${isActive ? "active" : "nav-menu"}`}>
							<li className="nav-item">
								<Link activeClass="select-mobile" spy={true} to="Home"><NavLink to="/">Inicio</NavLink></Link>
							</li>					
							<li className="nav-item">
								<Link activeClass="select-mobile" spy={true} to="Project"><NavLink to="">&lt;Projetos /&gt;</NavLink></Link>
							</li>
							<li className="nav-item">
								<Link activeClass="select-mobile" spy={true} to="Contact"><NavLink to="">Contato</NavLink></Link>
							</li>
						</ul>
					
						<button onClick={handleClick}>
							<article className={`hamburger ${isActive ? "active" : "hamburger"}`}>
								<span className="bar"></span>
								<span className="bar"></span>
								<span className="bar"></span>
							</article>     
						</button>                                       
					</nav>
				</section>	
			</header>
		</>
	);
}