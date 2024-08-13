import Email from "./Email";
import ProjectsList from "./ProjectsList";
import About from "./About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import { scroller } from "react-scroll";


const HomePage = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.state?.scrollTo) {
            scroller.scrollTo(location.state.scrollTo, {
                duration: 500,
                smooth: true,
            });
        }
    }, [location]);

    return (
        <div>
        
            <div className="footer">
                <img src="/images/mariel.png" />
                <img src="/images/trujillo.png" />
            </div>

            <About />
            <ProjectsList />
            <Email />
        </div>

    )
}

export default HomePage;