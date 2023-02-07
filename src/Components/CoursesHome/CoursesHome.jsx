import './Style/CoursesHome.modules.scss';
import { NavLink } from "react-router-dom";

export function CoursesHome() {
    return (
        <>
            <section id='Courses' className="courses-zone" data-aos="slide-up">
                <div className="container">
                    <div className="section-title">
                        <h2 className="title">Formação Acadêmica</h2>
                        <hr /> 
                        <NavLink to="/Courses"><button className='main-btn'>Veja Mais</button></NavLink>                            
                    </div>
                </div>
            </section>  
        </>
    );
}