import { useState } from "react"
import { Link as ScrollLink } from "react-scroll";
import About from "./About";
import ProjectsList from "./ProjectsList";
import Email from "./Email";

const HomePage = () => {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div className="homepage-section">

            <div className="header">
                <img
                    className="dropdown"
                    onClick={handleClick}
                    src={toggle ? "/images/X.png" : "/images/3 lines dropdown.png"}
                    alt="menu-icon" />
            </div>


            {toggle &&

                <div className="dropdown-content">

                    <ScrollLink
                        activeClass="active"
                        to="aboutId"
                        smooth={true}
                        duration={500}
                    >
                        <img className="nav" src="/images/ABOUT.png" />
                    </ScrollLink>

                    <ScrollLink
                        activeClass="active"
                        to="projectsListId"
                        smooth={true}
                        duration={500}
                    >
                        <img className="nav" src="/images/PROJECTS.png" />
                    </ScrollLink>

                    <ScrollLink
                        activeClass="active"
                        to="emailId"
                        smooth={true}
                        duration={500}
                    >
                        <img className="nav" src="/images/Envelope.png" />
                    </ScrollLink>
                </div>
            }

            <div className="footer">
                <img src="/images/mariel.png" />
                <img src="/images/trujillo.png" />
            </div>


            <About />
            <ProjectsList />
            <Email />


        </div>
    )
}


export default HomePage;