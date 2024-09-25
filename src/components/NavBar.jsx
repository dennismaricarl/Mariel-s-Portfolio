import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BackToHome from "./BackToHome"


const NavBar = () => {

    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        window.scrollTo(0, 0)
        setToggle(!toggle)
    }

    const handleNavigateToHome = (section) => {
        navigate("/", { state: { scrollTo: section } });
        setToggle(false)
    };



    return (
        <div>

            <div className="fixed space-x-48 lg:space-x-60 top-0 left-0 lg:w-full z-[1000] bg-white flex p-[3rem] lg:pl-[6rem] lg:pr-[6rem] justify-between box-border">

                <BackToHome />
                <div>
                    <img
                        className={toggle ? "w-[1.5rem] lg:w-[4rem] hover:scale-110" : "w-[2.5rem] lg:w-[5rem] hover:scale-110"}

                        onClick={handleClick}
                        src={toggle ? "/images/X.png" : "/images/3 lines dropdown.png"}
                        alt="menu-icon" />
                </div>
            </div>


            {toggle &&

                <div className="flex flex-col gap-4 items-end pr-[3rem] lg:pr-[5rem] mt-[9rem] lg:mt-[13rem]">
              
                    <img className="hover:opacity-10 w-32 lg:w-auto"
                        src="/images/ABOUT.png"
                        onClick={() => handleNavigateToHome("aboutId")}
                    />

                    <img className="hover:opacity-10 w-40 lg:w-auto"
                        src="/images/PROJECTS.png"
                        onClick={() => handleNavigateToHome("projectsListId")}
                    />

                    <img className="hover:opacity-10 w-32 lg:w-auto"
                        src="/images/Envelope.png"
                        onClick={() => handleNavigateToHome("emailId")}
                    />


                </div>
            }

        </div>
    )
}


export default NavBar;