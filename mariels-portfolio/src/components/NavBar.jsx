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

            <div className="fixed top-0 left-0 w-full z-[1000] bg-white flex p-[3rem] pl-[6rem] pr-[6rem] justify-between box-border">

                <BackToHome />
                <div>
                    <img
                        className={toggle ? "w-[4rem]" : "w-[5rem]"}

                        onClick={handleClick}
                        src={toggle ? "/images/X.png" : "/images/3 lines dropdown.png"}
                        alt="menu-icon" />
                </div>
            </div>


            {toggle &&

                <div className="flex flex-col gap-4 items-end pr-[3%] mt-[13rem]">
              
                    <img className="w-[14rem] h-[5rem] sm:w-[10rem] sm:h-[4rem] md:w-[18rem] md:h-[6rem] lg:w-[28rem] lg:h-[10rem] hover:opacity-10"
                        src="/images/ABOUT.png"
                        onClick={() => handleNavigateToHome("aboutId")}
                    />

                    <img className="w-[14rem] h-[5rem] sm:w-[10rem] sm:h-[4rem] md:w-[18rem] md:h-[6rem] lg:w-[28rem] lg:h-[10rem] hover:opacity-10"
                        src="/images/PROJECTS.png"
                        onClick={() => handleNavigateToHome("projectsListId")}
                    />

                    <img className="w-[14rem] h-[5rem] sm:w-[10rem] sm:h-[4rem] md:w-[18rem] md:h-[6rem] lg:w-[28rem] lg:h-[10rem] hover:opacity-10"
                        src="/images/Envelope.png"
                        onClick={() => handleNavigateToHome("emailId")}
                    />


                </div>
            }

        </div>
    )
}


export default NavBar;