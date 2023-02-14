import React from 'react'
import logo from '../../img/logo.jpg'
import Banner from './Banner'
import CartWidget from './CartWidget'



const NavBar = () => {

const options = [
  {id:0, title:'Nosotros'},
  {id:1, title:'Productos'},
  {id:2, title:'Contacto'}
]

  return (
      <header>
        <nav className='navBarMod navbar navbar-expand-lg bg-light'>
          <div className='container-fluid'>
            <img className='navBarMod__logo' src={logo} alt="" />
            <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='flex-row-reverse collapse navbar-collapse' id='navbarNavAltMarkup'>
              <div className='navBarMod__a navbar-nav'>
                {options.map( item =>(<a key={item.id} className='nav-link' href="./Banner.jsx">{item.title}</a> ))}
                <CartWidget />
              </div>
            </div>
          </div>
        </nav>

        <div className='contenedor'>
          <div className='conenedor__texto'> 
              <h1>TIENDA KOALA</h1>
              <h2>Carteras y Accesorios</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, explicabo praesentium vel eligendi ratione sint nobis tenetur quos sequi, expedita atque aut quasi dicta temporibus sed neque dolorum? Exercitationem, beatae?</p>
          </div>
          <Banner />
        </div>
      </header>
  )
}

export default NavBar
