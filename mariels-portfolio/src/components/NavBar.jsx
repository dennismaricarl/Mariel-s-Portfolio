import React from "react";
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
        <div className="navBar">
            <h1>3 lines here</h1>

            <Link
                activeClass="active"
                to="aboutId"
                smooth={true}
                duration={500}
            > <h1>ABOUT</h1>
            </Link>

            <Link>
            <h1>PROJECTS</h1>
            </Link>
           
        </div>
    )
}

export default NavBar; 