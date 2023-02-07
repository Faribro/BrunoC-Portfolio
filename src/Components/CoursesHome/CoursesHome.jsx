import './Style/CoursesHome.modules.scss';
import { NavLink } from "react-router-dom";

export function CoursesHome() {
    return (
        <>
            <main id='Courses' className="courses-zone" data-aos="slide-up">
                <section className="container">
                    <article className="section-title">
                        <h2 className="title">Formação Acadêmica</h2>
                        <hr /> 
                        <NavLink to="/Courses"><button className='main-btn'>Veja Mais</button></NavLink>                            
                    </article>
                </section>
            </main>  
        </>
    );
}