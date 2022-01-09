import React from 'react'
import './Header.css'

const Header = () =>{
    return(
        <>
            <div className='encabezado'>
                <h1>MERCADO YA</h1>
            </div>
            <nav className='navegador'>
                <a className='link' href="">PRODUCTOS</a>
                <a className='link' href="">QUIENES SOMOS</a>
                <a className='link' href="">CONTACTO</a>
            </nav>
        </>
    );
}

export default Header();