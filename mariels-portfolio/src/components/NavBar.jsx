import { useState } from "react"
import { Link } from 'react-scroll'

const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div className="navbar">

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

                    <Link>
                        <img className="nav" src="/images/PROJECTS.png" />
                    </Link>

                    <img className="nav" src="/images/Envelope.png" />
                </div>
            }

        </div>
    )
}


export default NavBar;