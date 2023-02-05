import './scss/CoursesHome.modules.scss';
import { NavLink } from "react-router-dom";

export function CoursesHome() {
    return (
        <>
            <section id='Courses' class="courses-zone" data-aos="slide-up">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="section-title text-center">
                            <h2 class="title">Formação Acadêmica</h2>
                            <hr /> 
                            <div class="work-more text-center mt-50">
                                <NavLink to="/Courses"><button className='main-btn'>Veja Mais</button></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
        </>
    );
}