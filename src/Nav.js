import './Nav.css'

import React, { useEffect, useState } from 'react'

function Nav() {
    const [show, setshow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.screenY > 100) {
                setshow(true);
            } else setshow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [setshow])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
                className="nav__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
                alt="Netflix Logo"
            />

            <img
                className="nav__avatar"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
