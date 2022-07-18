import React from 'react';
import { Link } from 'react-router-dom';
import img1 from "../../../recource/WhatsApp_Image_2022-07-16_at_9.56.47_PM-removebg-preview.png"
const Navbar = () => {
    return (
        <div class="navbar bg-primary text-accent">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>ABOUT</li>
                        <li tabindex="0">
                            <a class="justify-between" href="/">
                                SERVICES
                                <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                        </li>
                        <li><a href="/">Item 3</a></li>
                    </ul>
                </div>
                <img src={img1} className="w-24" alt="" />
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0">
                    <li><a href="/">ABOUT</a></li>
                    <li tabindex="0">
                        <a href="/">
                            SERVICES
                        </a>
                    </li>
                    <li><Link to="/">LAWYERS</Link></li>
                    <li><Link to="/">PRACTICE</Link></li>
                    <li><Link to="/News">NEWS</Link></li>
                </ul>
            </div>
            <div class="navbar-end">
                <a class="btn btn-secondary" href="/">Get started</a>
            </div>
        </div>
    );
};

export default Navbar;