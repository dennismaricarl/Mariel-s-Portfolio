import { useNavigate } from "react-router-dom";

const MyHumbleAbode = () => {
    const navigate = useNavigate();

    // Tailwind CSS class names
    const mainContainer = `
    mx-8 my-16 mt-24
    md:mx-16 md:my-24 md:mt-40
    lg:mx-32 lg:my-34 lg:mt-60
`;
    const contentRow = "flex gap-40";
    const descriptionContainer = "flex-1 ml-32";
    const projectDescription = "font-helvetica text-base sm:text-lg md:text-lg lg:text-xl";
    const projectTitle = "font-helvetica text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4 lg:mb-6";
    const colorsContainer = "inline-flex gap-3 mt-5";
    const imagesContainer = "flex flex-col gap-36 mt-20 items-center";
    const imageSize2 = "w-72 h-auto";
    const imageSize1 = "w-5/12 h-auto";
    const goToNextProject = "absolute right-0 p-24 cursor-pointer hover:opacity-50 transition-opacity duration-300";
    const circleStyle = "w-8 h-8 rounded-full";
    const circleBlack = "bg-black";
    const circleWhite = "bg-white border border-black";

    return (
        <>
            <div className={mainContainer}>
                <div className={contentRow}>
                    <div className={descriptionContainer}>
                        <h1 className={projectTitle}>My Humble Abode</h1>
                        <p className={projectDescription}>
                            A compilation of some of my early drawings. I made it a point to
                            simply draw what was around me and ended up with many line works of my small studio apartment at the time.
                            Beginnings are very important; exploring how to observe and transfer what I see using pencil onto
                            the page was and still is an incredibly important and ongoing process for me. Hence, why I include
                            these simple, minimal pieces here.
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className={projectTitle}>Project Details</h1>
                        <p className={projectDescription}>
                            <strong>Brief:</strong> Sketchbook Time - draw what is around you.
                        </p>
                        <p className={projectDescription}>
                            <strong>Tools:</strong> Paper, Pencil, Sketchbook, Procreate
                        </p>

                        <div className={colorsContainer}>
                            <span className={`${circleStyle} ${circleBlack}`}></span>
                            <span className={`${circleStyle} ${circleWhite}`}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={imagesContainer}>
                <img className={imageSize1} src="/images/my humble abode/6 bayridge.png" alt="bayridge" />

                <div className="inline-flex items-center justify-center">
                    <img className={imageSize1} src="/images/my humble abode/7 entrance copy 2.png" alt="entrance" />
                    <img className={imageSize1} src="/images/my humble abode/8 bedroom set up.png" alt="bedroom setup" />
                </div>

                <img className={imageSize1} src="/images/my humble abode/9 study corner.png" alt="study corner" />
                <img className={imageSize1} src="/images/my humble abode/10 kitchen.png" alt="kitchen" />
            </div>

            <img
                className={goToNextProject}
                onClick={() => navigate('/hyggeSeries')}
                src="/images/my humble abode/11 next.png"
                alt="Next Project"
            />
        </>
    );
}

export default MyHumbleAbode;
