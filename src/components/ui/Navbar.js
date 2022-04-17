import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../../resources/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';


export const Navbar = () => {

    const dispatch = useDispatch();
    const { user } = useSelector(state => state.auth);
    const [active, setActive] = useState(false);
    const [subMenusActive, setSubMenus] = useState({
        subMenu1: false,
        subMenu2: false,
        subMenu3: false,
        subMenu4: false
    });
    const { subMenu1, subMenu2, subMenu3, subMenu4 } = subMenusActive;
    
    return (
        <>
            <div
                onClick={e => setActive(!active)}
                className={`phoneNav ${active && 'active'}`}>

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
                        {user.name}
                    </p>
                </div>
                <div className="navbar__group-links">
                    <div className="group">
                        <div className='link'>

                            <p className="main-link" onClick={() => setSubMenus({
                                ...subMenusActive,
                                subMenu1: !subMenu1
                            })}>
                                <svg className='main-link__svg'>
                                    <use href="/sprite.svg#icon-shopping-cart"></use>
                                </svg>
                                Pedidos
                            </p>
                            <div className={`submenu  ${subMenusActive.subMenu1 ? 'active' : ''}`}>
                                <Link to="/pedidos" >Hacer Pedido</Link>
                                <Link to="/pedidos/historial" >Historial</Link>

                                <div className='link' onClick={() => setSubMenus({
                                    ...subMenusActive,
                                    subMenu4: !subMenu4
                                })}>
                                    <p className="main-link">
                                        Administrar Menu
                                    </p>
                                    <div className={`submenu  ${subMenusActive.subMenu4 ? 'active' : ''}`}>
                                        <Link to="/pedidos/categorias" >Categorias</Link>
                                        <Link to="/pedidos/menu" >Menu</Link>
                                    </div>
                                </div>

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
                                <Link to="/inventario/categorias" >Categorias</Link>
                                <Link to="/productos" >Catalogo de Productos</Link>
                                <Link to="/inventario" >Stock</Link>
                            </div>
                        </div>

                        <div className='link' onClick={() => setSubMenus({
                                ...subMenusActive,
                                subMenu3: !subMenu3
                            })} >
                            <p className="main-link" >
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
                    <p onClick={() => dispatch(startLogout())}>
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
