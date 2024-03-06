import React from "react";

const Header = () => {
    return (
        <nav className="#03a9f4 light-blue">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo right">
                    Logo
                </a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li>
                        <a
                            href="https://github.com/Faviun/react-shop"
                            target="_blank"
                            rel="noreferrer"
                        >
                            React
                        </a>
                    </li>
                    \
                </ul>
            </div>
        </nav>
    );
};

export default Header;
