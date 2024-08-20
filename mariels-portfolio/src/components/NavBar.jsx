import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BackToHome from "./BackToHome"
import { useLocation } from "react-router-dom";


const NavBar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        setToggle(!toggle)
    }

    const handleNavigateToHome = (section) => {
        navigate("/", { state: { scrollTo: section } });
        setToggle(false)
    };

    return (
        <div>

            <div className="navbar-container">

                <BackToHome />
                <div className="header">
                    <img
                        className="dropdown"
                        onClick={handleClick}
                        src={toggle ? "/images/X.png" : "/images/3 lines dropdown.png"}
                        alt="menu-icon" />
                </div>
            </div>


            {toggle &&

                <div className="dropdown-content">

                    <img className="nav"
                        src="/images/ABOUT.png"
                        onClick={() => handleNavigateToHome("aboutId")}
                    />

                    <img className="nav"
                        src="/images/PROJECTS.png"
                        onClick={() => handleNavigateToHome("projectsListId")}
                    />

                    <img
                        className="nav"
                        src="/images/Envelope.png"
                        onClick={() => handleNavigateToHome("emailId")}
                    />


                </div>
            }

        </div>
    )
}


export default NavBar;