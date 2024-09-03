import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BackToHome from "./BackToHome"


const NavBar = () => {

    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        window.scrollTo(0,0)
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
                <div>
                    <img
                        className={toggle ? "x-icon" : "lines-dropdown"
                        }
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