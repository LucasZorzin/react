import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css';
import guitar1 from '../../img/guitar1.png';
import guitar2 from '../../img/guitar2.png';
import logo from '../../img/puma-black.png';
import i1 from '../../img/1.png';
import i2 from '../../img/2.png';
import i3 from '../../img/3.png';
import Footer from '../Footer/Footer';

const HomePage = () => {
    if (window.matchMedia("(min-width: 992px)").matches) {
        document.addEventListener("mousemove", parallax)
        function parallax(e) {
            this.querySelectorAll('.layer').forEach(layer => {
                const speed = layer.getAttribute('data-speed')
                const x = (window.innerWidth - e.pageX * speed) / 100
                const y = (window.innerHeight - e.pageY * speed) / 100
                layer.style.transform = `translateX(${x}px) translateY(${y}px)`
            })
        }
    }

    return (
        <>
            <section id='parallax' className='home'>
                <img src={guitar1} data-speed="-5" className='layer guitar1' alt='guitar puma music' />
                <img src={guitar2} data-speed="4" className='layer guitar2' alt='guitar puma music' />
                <div className='responsive-home'>
                    <div className='logo'><img src={logo} alt='puma music logo' /></div>
                    <h3>With music, life is better.</h3>
                    <p className='home-description'>Every detail carefully crafted and custom designed.</p>
                    <NavLink to='/react/products' className="col-2 mt-5 home__content-a">
                        <button class="home__content-a-btn home__content-a-btn--animated"><span>SEE ALL PRODUCTS</span></button>
                    </NavLink>
                </div>
            </section>
            <section className='productos pt-5 row productos-responsive'>
                <div className='col-6 img1'>
                    <img src={i1} alt='guitar' />
                </div>
                <div className='col-4 txt1'>
                    <h4>Warmer, Softer on every curve.</h4>
                </div>
            </section>

            <section className='productos pt-5 row'>
                <div className='col-6 txt2'>
                    <h4>The first ever screwless machine head.</h4>
                </div>
                <div className='col-6 img2'>
                    <img src={i2} alt='guitar' />
                </div>
            </section>

            <section className='productos pt-5 pb-5 row'>
                <div className='col-6 img1'>
                    <img src={i3} alt='guitar' />
                </div>
                <div className='col-4 txt1'>
                    <h4>The design we’ve been dreaming of.</h4>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default HomePage