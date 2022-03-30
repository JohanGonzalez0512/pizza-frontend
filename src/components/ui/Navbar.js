import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../../resources/logo.png'


export const Navbar = () => {
    const [active, setActive] = useState(false);
    const [subMenusActive, setSubMenus] = useState({
        subMenu1: false,
        subMenu2: false,
        subMenu3: false
    });
    const { subMenu1, subMenu2, subMenu3 } = subMenusActive;

    return (
        <>
            <div
                onClick={e => setActive(!active)}
                className={`phoneNav ${active && 'active'}`}>
                {/* Aqui poner un svg */}

            </div>
            <nav className={`navbar ${active && 'active'}`}>
                <Link to="/" className="navbar__logo">
                    <img src={logo} alt="logo" />
                </Link>

                <div className="navbar__user">
                   

                    <p className="name">
                        {/* {(user.name) && user.name} */}
                        <svg className='navbar__user__svg'>
                            <use href="/sprite.svg#icon-user-circle-o"></use>
                        </svg>
                        Johan Gonzalez
                    </p>
                </div>
                <div className="navbar__group-links">
                    <div className="group">
                        <div className='link' onClick={() => setSubMenus({
                            ...subMenusActive,
                            subMenu1: !subMenu1
                        })}>

                            <p className="main-link">
                                <svg className='main-link__svg'>
                                    <use href="/sprite.svg#icon-shopping-cart"></use>
                                </svg>
                                Pedidos
                            </p>
                            <div className={`submenu  ${subMenusActive.subMenu1 ? 'active' : ''}`}>
                                <Link to="/pedidos" >Hacer Pedido</Link>
                                <Link to="/pedidos/historial" >Historial</Link>
                                <Link to="/"> Administrar menu</Link>

                            </div>
                        </div>

                        <div className='link' onClick={() => setSubMenus({
                            ...subMenusActive,
                            subMenu2: !subMenu2
                        })}>
                            <p className="main-link">
                                <svg className='main-link__svg'>
                                    <use href="/sprite.svg#icon-dropbox"></use>
                                </svg>
                                Inventario
                            </p>
                            <div className={`submenu  ${subMenusActive.subMenu2 ? 'active' : ''}`}>
                                <Link to="/inventario" >Catalogo de Productos</Link>
                                <Link to="/inventario/categorias" >Categorias</Link>
                            </div>
                        </div>

                        <div className='link' onClick={() => setSubMenus({
                            ...subMenusActive,
                            subMenu3: !subMenu3
                        })}>
                            <p className="main-link">
                                <svg className='main-link__svg'>
                                    <use href="/sprite.svg#icon-calculator"></use>
                                </svg>
                                Contabilidad
                            </p>
                            <div className={`submenu  ${subMenusActive.subMenu3 ? 'active' : ''}`}>
                                <Link to="/contabilidad/reporte" >Generar Reporte</Link>
                                <Link to="/contabilidad/gastos" >Gastos</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar__logout">
                    <p>
                        <svg className='navbar__logout__svg'>
                            <use href="/sprite.svg#icon-sign-out"></use>
                        </svg>
                        Cerrar sesión
                    </p>
                </div>
            </nav>
        </>
    );
};
