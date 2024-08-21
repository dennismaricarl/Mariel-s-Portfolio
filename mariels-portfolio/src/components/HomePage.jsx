import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import About from "./About";
import ProjectsList from "./ProjectsList";
import Email from "./Email";


const HomePage = () => {

    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            scroller.scrollTo(location.state.scrollTo, {
                duration: 800,
                smooth: true,
                offset: -300
            });
        }
    }, [location]);

    return (
        <div className="homepage-container">

            <div className="full-name-container">
                <div className="full-name">
                    <img src="/images/mariel.png" alt="Mariel" />
                    <img src="/images/trujillo.png" alt="Trujillo" />
                </div>
            </div>

            <About />
            <ProjectsList />
            <Email />

        </div>

    )
}

export default HomePage;