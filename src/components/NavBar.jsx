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
        <div >

            <div className="fixed top-0 left-0 z-[1000] bg-white flex p-[3rem] lg:pl-[6rem] lg:pr-[6rem] w-full justify-between ">

                <BackToHome />

                <img
                    className={toggle ? "w-[1.5rem] lg:w-[4rem] hover:scale-110" : "w-[2.5rem] lg:w-[5rem] hover:scale-110"}

                    onClick={handleClick}
                    src={toggle ? "/images/X.png" : "/images/3 lines dropdown.png"}
                    alt="menu-icon" />
            </div>



            {toggle &&

                <div className="flex flex-col gap-4 items-end pr-[3rem] lg:pr-[5rem] mt-[9rem] lg:mt-[13rem]">


                    <h1 onClick={() => handleNavigateToHome("aboutId")} className="hover:opacity-10 text-9xl font-thin font-serif lg:w-auto">About</h1>
                    <h1 onClick={() => handleNavigateToHome("projectsListId")} className="hover:opacity-10 text-9xl font-serif font-thin lg:w-auto">Projects</h1>

                    <h1 onClick={() => handleNavigateToHome("etsyId")} className="hover:opacity-10 text-9xl font-serif font-thin lg:w-auto">Etsy</h1>

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