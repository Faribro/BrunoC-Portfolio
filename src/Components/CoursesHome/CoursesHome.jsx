import './Style/CoursesHome.modules.scss';
import { NavLink } from "react-router-dom";

export function CoursesHome() {
    return (
        <>
            <section id='Courses' class="courses-zone" data-aos="slide-up">
                <div class="container">
                    <div class="section-title">
                        <h2 class="title">Formação Acadêmica</h2>
                        <hr /> 
                        <NavLink to="/Courses"><button className='main-btn'>Veja Mais</button></NavLink>                            
                    </div>
                </div>
            </section>  
        </>
    );
}