import React from 'react'
import './NavBar.css'
const NavBar = () =>{
    return(
        <>
            <div className='encabezado'>
                <h1>
                   <a className='titulo' href="">AMERCADO YA</a>
                </h1>
            </div>
            <div className='subEncabezado'>
      
                <nav className='navegador'>
                    <a className='link' href="">INICIO</a>
                    <a className='link' href="">PRODUCTOS</a>
                    <a className='link' href="">QUIENES SOMOS</a>
                    <a className='link' href="">CONTACTO</a>
                </nav>
            </div>
        </>
    );
}

export default NavBar