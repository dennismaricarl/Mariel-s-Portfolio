import { useNavigate } from "react-router-dom";

const LaSpots = () => {
    const navigate = useNavigate();

    // Tailwind CSS class names
    const mainContainer = "mx-32 my-34 mt-60";
    const contentRow = "flex gap-40";
    const descriptionContainer = "flex-1 ml-32";
    const projectDescription = "font-helvetica text-2xl";
    const projectTitle = "font-helvetica text-4xl font-semibold mb-5";
    const colorsContainer = "inline-flex gap-3 mt-5";
    const imagesContainer = "flex flex-col gap-40 mt-40 items-center justify-center";
    const imageStyle = "w-5/12 h-auto";
    const goToNextProject = "absolute right-0 p-24 cursor-pointer hover:opacity-50 transition-opacity duration-300";
    const circleStyle = "w-8 h-8 rounded-full";
    const circleBlack = "bg-black";
    const circleWhite = "bg-white border border-black";

    return (
        <>
            <div className={mainContainer}>
                <div className={contentRow}>
                    <div className={descriptionContainer}>
                        <h1 className={projectTitle}>LA Spots</h1>
                        <p className={projectDescription}>
                            From the tip of San Pedro all the way up to Malibu, to the undying
                            land of Disney in Anaheim, and a few other points of interest, here are some of the most well-loved spots
                            in Los Angeles. This project was inspired by a way to give Turo guests a small visual reference of
                            recommendations for where to go to enjoy SoCal around LA county. Turo is a rideshare app of which I used to be a host for!
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className={projectTitle}>Project Details</h1>
                        <p className={projectDescription}>
                            <strong>Brief:</strong> Create a reference card map & brochure for Turo guests
                        </p>
                        <p className={projectDescription}>
                            <strong>Tools:</strong> Paper, Pencil, Adobe Illustrator, Photoshop
                        </p>

                        <div className={colorsContainer}>
                            <span className={`${circleStyle} ${circleBlack}`}></span>
                            <span className={`${circleStyle} ${circleWhite}`}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={imagesContainer}>
                <img className={imageStyle} src="/images/la spots/6 map_.png" alt="map" />
                <img className={imageStyle} src="/images/la spots/7 vectors.png" alt="vectors" />

                <div className="inline-flex gap-4">
                    <img  src="/images/la spots/brocure 1.png" alt="brochure 1" />
                    <img  src="/images/la spots/brochure 2.png" alt="brochure 2" />
                </div>

                <div className="inline-flex gap-4">
                    <img   src="/images/la spots/front mock.png" alt="front mock" />
                    <img   src="/images/la spots/back mock.png" alt="back mock" />
                </div>

                <img className={imageStyle} src="/images/la spots/8 magazine.png" alt="magazine" />
            </div>

            <img
                className={goToNextProject}
                onClick={() => navigate('/siamThai')}
                src="/images/la spots/next.png"
                alt="next project"
            />
        </>
    );
}

export default LaSpots;
