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
        <div className="flex flex-col items-center justify-center ">

            <div className="flex flex-col justify-end h-screen pb-4">
                <div className="flex justify-center gap-20 mb-10">
                    <img className="w-[30rem]" src="/images/mariel.png" alt="Mariel" />
                    <img className="w-[30rem]" src="/images/trujillo.png" alt="Trujillo" />
                </div>
            </div>

            <About />
            <ProjectsList/>
            <Email />

        </div>

    )
}

export default HomePage;