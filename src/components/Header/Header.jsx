import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
   return (
      <header className="header">
         <div className="container">
            <div className="header__inner">
               <div className="logo">
                  <Link to="/">
                     <img style={{width: 120, height: 70}} src="https://nishman.ru/wp-content/uploads/2020/11/Nishman_Logo.png" alt="logo" />
                  </Link>
               </div>
               <nav className="nav">
                  <Link className='nav__link' to="/">главная</Link>
                  <Link className='nav__link' to="/about">о нас</Link>
                  <Link className='nav__link' to="/contacts">контакты</Link>
                  <Link className='nav__link' to="/cart">корзина</Link>  
                  <Link className='nav__link' to="/add">AddProduct</Link> 
                  <Link className='nav__link' to="/list">ProductList</Link> 
                                
               </nav>
            </div>
         </div>
              </header>
   );
};

export default Header;