import { useState } from "react"
import {Link} from 'react-scroll'

const HomePage = () => {

    const [toggle, setToggle] = useState(false)

    const handleClick = () => {
        setToggle(!toggle)
    }

    return (
        <div id="homePageId" className="section">

            {toggle ?
                <>
                    <div className="header">
                        <img className="dropdown" onClick={handleClick} src="/images/X.png" />
                    </div>

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

                    <div className="footer">
                        <img src="/images/mariel.png" />
                        <img src="/images/trujillo.png" />
                    </div>
                </>

                :

                <>
                    <div className="header">
                        <img className="dropdown" onClick={handleClick} src="/images/3 lines dropdown.png" />
                    </div>

                    <div className="footer">
                        <img src="/images/mariel.png" />
                        <img src="/images/trujillo.png" />
                    </div>
                </>
            }


        </div>
    )
}

export default HomePage;