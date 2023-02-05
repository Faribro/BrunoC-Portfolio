import './scss/Curriculum.modules.scss';

import "react-circular-progressbar/dist/styles.css";

export function Curriculum() {
    return (
        <>
            <section id="curriculum" class="curriculum pt-100 pb-80 bg_cover" data-aos="fade-up">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-8 col-lg-9">
                            <div class="curriculum-content text-center">
                                <h2 class="curriculum-title">Meu Currículo</h2>
                                <a class="main-btn" rel="noreferrer" target="_blank" href="https://drive.google.com/file/d/1yN62QAxfL2RHPrZvQx9l3FpdnuzN2ZuK/view?usp=share_link">Baixar CV</a>
                            </div>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    );
}