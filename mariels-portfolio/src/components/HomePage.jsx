import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import About from "./About";
import ProjectsList from "./ProjectsList";
import Email from "./Email";


const HomePage = () => {

    const location = useLocation();   

   console.log(location.pathname)

    useEffect(() => {
        if (location.state?.scrollTo) {
            scroller.scrollTo(location.state.scrollTo, {
                duration: 800,
                smooth: true,
                offset: -100
            });
        }
    }, [location]);


    return (
        <div className="flex flex-col items-center justify-center ml-80 mr-80">

            <div className="flex flex-col justify-end h-screen">
                <div className="flex items-center gap-[10%] pb-[3%]">
                <img className="w-full max-w-[16rem] sm:max-w-[20rem] md:max-w-[24rem] lg:max-w-[32rem] object-cover"  src="/images/mariel.png" alt="Mariel" />
                    <img className="w-full max-w-[20rem] sm:max-w-[25rem] md:max-w-[30rem] lg:max-w-[40rem] object-cover" src="/images/trujillo.png" alt="Trujillo" />
                </div>
            </div>

            <About />
            <ProjectsList />
            <Email />

        </div>

    )
}

export default HomePage;