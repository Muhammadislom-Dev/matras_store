import './Header.scss'

import save from '../../assests/img/save.png'
import arrow from '../../assests/img/Arrow.png'


const Header = () =>{
return(
<div className="header">
    <div className="container">
        <div className="row align-items-center g-0">
            <div className="col-xl-5 col-lg-6 col-md-12">
                <div 
                data-aos="fade-right"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2500"
                className="py-5 py-lg-0">
                    <h3 className="header__name  fw-bold">
                        Kechalari sokin dam oling
                    </h3>
                    <button href="pages/course-filter-list.html" className="header__btn">Katerogiyalar <img
                            className='mx-2' src={arrow} alt="" />
                    </button>
                </div>
            </div>
            <div  data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2500" 
                className="pt-5 mt-5 col-xl-7 col-lg-6 col-md-10 text-lg-end text-center">
                <div id="carouselExampleIndicators" className="header__page carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators mb-4" >
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                            className="active header__toogle" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div className="header__list carousel-inner">
                        <div className="carousel-item active">
                            <img src={save} className="header__img img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={save} className="header__img img-fluid" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={save} className="header__img img-fluid" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Header