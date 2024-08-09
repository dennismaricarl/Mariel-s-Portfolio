import { useState } from "react"
import { Link } from 'react-scroll'
import About from "./About";
import ProjectsList from "./ProjectsList";
import Email from "./Email";

const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div>

            <div className="header">
                <img
                    className="dropdown"
                    onClick={handleClick}
                    src={toggle ? "/images/X.png" : "/images/3 lines dropdown.png"}
                    alt="menu-icon" />
            </div>


            {toggle &&

                <div className="dropdown-content">

                    <Link
                        activeClass="active"
                        to="aboutId"
                        smooth={true}
                        duration={500}
                    >
                        <img className="nav" src="/images/ABOUT.png" />
                    </Link>

                    <Link
                        activeClass="active"
                        to="projectsListId"
                        smooth={true}
                        duration={500}

                    >
                        <img className="nav" src="/images/PROJECTS.png" />
                    </Link>

                    <Link
                        activeClass="active"
                        to="emailId"
                        smooth={true}
                        duration={500}

                    >
                        <img className="nav" src="/images/Envelope.png" />
                    </Link>
                </div>
            }

            <About />
            <ProjectsList />
            <Email />

        </div>
    )
}


export default NavBar;