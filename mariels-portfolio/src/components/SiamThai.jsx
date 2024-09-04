import { useNavigate } from "react-router-dom";

const SiamThai = () => {
    const navigate = useNavigate();

    // Tailwind CSS class names
    const mainContainer = "mx-32 my-34 mt-60";
    const contentRow = "flex gap-40";
    const descriptionContainer = "flex-1 ml-32";
    const projectDescription = "font-helvetica text-2xl";
    const projectTitle = "font-helvetica text-4xl font-semibold mb-5";
    const colorsContainer = "inline-flex gap-3 mt-5";
    const imagesContainer = "flex flex-col gap-40 mt-40 items-center";
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
                        <h1 className={projectTitle}>Siam Thai Station Mural</h1>
                        <p className={projectDescription}>
                            Proposed black and white line art mural for a Thai restaurant.
                            The theme here is community expressed through businesses and activities around the city
                            mixed with Thailand culture and its emblems to represent the restaurant's - and really the
                            Asian roots and influence in my town. I created many of the drawings with a splash of imagination
                            and play!
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className={projectTitle}>Project Details</h1>
                        <p className={projectDescription}>
                            <strong>Brief:</strong> Create a community-inspired mural for Thai restaurant, Siam Station
                        </p>
                        <p className={projectDescription}>
                            <strong>Tools:</strong> Paper, Pencil, Procreate, Illustrator, Photoshop
                        </p>

                        <div className={colorsContainer}>
                            <span className={`${circleStyle} ${circleBlack}`}></span>
                            <span className={`${circleStyle} ${circleWhite}`}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={imagesContainer}>
                <img className={imageStyle} src="/images/siam station/6 Siam Thai Mural Vector.png" alt="Siam Thai Mural Vector" />
                <img className={imageStyle} src="/images/siam station/7 resto mock up.png" alt="resto mock up" />
                <img className={imageStyle} src="/images/siam station/8 Mural Process.png" alt="Mural Process" />
            </div>

            <img
                className={goToNextProject}
                onClick={() => navigate('/laSpots')}
                src="/images/siam station/next.png"
                alt="next project"
            />
        </>
    );
}

export default SiamThai;
