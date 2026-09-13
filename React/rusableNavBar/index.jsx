import React from 'react';
import { createRoot } from 'react-dom/client';

export function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <li className="nav-item">
                    <a href="#" >Dashboard</a>
                </li>
                <li className="nav-item">
                    <a href="#">Widgets</a>
                </li>
                <li className="nav-item">
                    <button aria-expanded="false">Apps</button>
                    <ul className="sub-menu" aria-label="Apps">
                        <li><a href="#">Calendar</a></li>
                        <li> <a href="#">Chat</a></li>
                        <li> <a href="#">Email</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export function Footer(){
    return(
        <footer className="footer">
            <ul>
                <li><a href="#">Fitness Dashboard</a></li>
                <li><a href="#">Watch Videos</a></li>
            </ul>
            <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
            <ul>
                <li><a href="#">Discord</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            <p>© 2024 Fitness Dashboard. All rights reserved.</p>
        </footer>
    )
}

createRoot(document.getElementById('root')).render(
    <>
        <Navbar />
        <Footer />
    </>
);