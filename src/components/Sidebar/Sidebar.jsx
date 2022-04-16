import './Sidebar.scss'

// //Images
// import call from "../../assets/img/Call.png";
// import bed from "../../assets/img/bed.png";
// import close from '../../assets/img/close.png';
import call from '../../assests/img/Call.png'
import bed from '../../assests/img/bed.png'
import { useState } from 'react';

const Sidebar = () =>{

const [modal, setModal] = useState(false)

const openModal = (e) =>{
e.preventDefault()
setModal(!modal)
}

const matras = (event)=>{
event.preventDefault()

setModal(!modal)

event.target[0].value = null;
event.target[1].value = null;

console.log(event.target[0].value)
}


return(
<>
    <div className="navbar navbar-expand-lg navbar-light">
        <div className="container">
            <div className="navbar__page mt-2">
                <a href="#" className="navbar__linkss">
                    <img src={bed} alt="" className="navbar__pic px-2" />
                    Matrassue
                </a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar__box collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2  px-4  mb-lg-0">
                    <li className="navbar__item">
                        <a className="navbar__link" aria-current="page" href="#">Katalog</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">Aksiya</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">Biz haqimizda</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">Manzilimiz</a>
                    </li>
                    <li className="navbar__item">
                        <a className="navbar__link" href="#">Aloqa</a>
                    </li>
                </ul>
                <span className="navbar-text px-3">
                    <a href="/" className="navbar__links text-decoration-none mx-3 align-items-center">
                        <img className="" src={call} />+998 99 123 45 67</a>
                    <button type="button" class="navbar__btn mx-4 m-2" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">
                        Buyurtma berish
                    </button>
                </span>
            </div>
        </div>
    </div>

    {/* <dialog open={modal} className='header__dialog'>
        <div className="header__list">
            <button className="header__button">
                <img src={close} alt="" className="sidebar__pic" />
            </button>
            <h2 className='sidebar__names'>Buyurtma qilish</h2>
            <form className='sidebar__form'>
                <input type="text" placeholder='Ismingizni yozing' />

                <div className="header__item">
                    <button className='sidebar__btns'>+998</button>
                    <input type="number" placeholder='Raqamingizni yozing' />
                </div>
            </form>
        </div>
    </dialog> */}

    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="navbar__pages modal-dialog">
            <div className=" modal-content">
                <div className="sidebar__titles">
                    <button type="button" className="navbar__close btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
                </div>
                <div className="modal-header header__modal">
                    <h2 className="sidebar__names mx-4 px-3">Buyurtma qilish</h2>
                </div>
                <div className="modal-body">
                    <form className='navbar__form'>
                        <input className='navbar__surname' type="text" placeholder='Ismingizni yozing' />
                        <div className='navbar__list'>
                            <button className="navbar__btns">+998</button>
                            <input className='navbar__number' type="number" placeholder='Raqamingizni yozing' />
                        </div>

                        <h3 className='navbar__product'>Mahsulotlarni toifasini tanlang</h3>
                        <select class="navbar__select form-select form-select-lg mb-2" aria-label=".form-select-lg example">
                            <option selected>..</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <h3 className='navbar__product'>Miqdorni tanlang</h3>

                        <div className="sidebar__lists mt-2">
                            <button className="sidebar__plus">-</button>
                            <div className="sidebar__box"><p className='sidebar__number'>1</p></div>
                            <button className="sidebar__plus">+</button>
                        </div>
                        <button type="button" className='sidebar__button'>
                           Yuborish
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </div>
</>
)
}

export default Sidebar