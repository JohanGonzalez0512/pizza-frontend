import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react';
import logo from '../../resources/logo.png'


export const Navbar = () => {
    const [active, setActive] = useState(false);
    const [subMenusActive, setSubMenus] = useState({
        subMenu1: false,
        subMenu2: false
    });
    const { subMenu1, subMenu2 } =subMenusActive;
   
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
                    {/* <UserSVG/> */}

                    <p className="name">
                        {/* {(user.name) && user.name} */}
                        Johan Gonzalez
                    </p>
                </div>
                <div className="navbar__group-links">
                    <div className="group">
                        <div className='link' onClick={() => setSubMenus({
                            ...subMenusActive,
                            subMenu1: !subMenu1
                        })}>

                            <p className="main-link">Pedidos</p>
                            <div className={`submenu  ${subMenusActive.subMenu1 ? 'active' : ''}`}>
                                <Link to="/" > submenu1</Link>
                                <Link to="/" > submenu2</Link>
                                <Link to="/"> submenu3</Link>

                            </div>
                        </div>

                        <div className='link' onClick={() => setSubMenus({
                            ...subMenusActive,
                            subMenu2: !subMenu2
                        })}>
                            <p className="main-link">Inventario</p>
                            <div className={`submenu  ${subMenusActive.subMenu2 ? 'active' : ''}`}>
                                <Link to="/" >submenu1</Link>
                                <Link to="/" >submenu2</Link>

                            </div>
                        </div>
                        <div className="link">
                            <Link to="/" className="main-link" >Contabilidad</Link>

                        </div>
                    </div>
                </div>
                <div className="navbar__logout">
                    <p>Cerrar sesión</p>
                </div>
            </nav>
        </>
    );
};
