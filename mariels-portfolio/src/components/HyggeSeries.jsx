import { useNavigate } from "react-router-dom";

const HyggeSeries = () => {
    const navigate = useNavigate();

    // styles definition
    const mainContainer = "mx-32 my-34 mt-60";
    const contentRow = "flex gap-40";
    const descriptionContainer = "flex-1 ml-32";
    const projectDescription = "font-helvetica text-2xl";
    const projectTitle = "font-helvetica text-4xl font-semibold mb-5";
    const colorsContainer = "inline-flex gap-3 mt-5";
    const imagesContainer = "flex flex-col gap-y-40 mt-60 items-center";
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
                        <h1 className={projectTitle}>Hygge Series</h1>
                        <p className={projectDescription}>
                            The inspiration behind these illustrations is the philosophy and
                            lifestyle of hygge("hoo-ga"), characteristic of the Danish culture, in which one takes the time to slow down
                            and enjoy the simple pleasures of life. To me, hygge is spending time with the people I love and
                            enjoying hours soaking in the summer sun.
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className={projectTitle}>Project Details</h1>
                        <p className={projectDescription}>
                            <strong>Brief:</strong> Passion Project - draw your hygge experiences.
                        </p>
                        <p className={projectDescription}>
                            <strong>Tools:</strong> Paper, Pencil, Procreate, Illustrator, Photoshop
                        </p>

                        <div className={colorsContainer}>
                            <span className={`${circleStyle} ${circleBlack}`}></span>
                            <span className={`${circleStyle} ${circleWhite}`}></span>
                            <span className={`${circleStyle} ${circleWhite}`}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={imagesContainer}>
                <img className={`${imageStyle} mt-[-12%]`} src="/images/hygge series/6 lets get together.png" alt="let's get together" />
                <img className={imageStyle} src="/images/hygge series/7 mock mural.png" alt="mock mural" />
                <img className={imageStyle} src="/images/hygge series/8 celebrate.png" alt="celebrate" />
                <img className={imageStyle} src="/images/hygge series/9 lets get coffee.png" alt="let's get coffee" />
                <img className={imageStyle} src="/images/hygge series/10 sunkissed.png" alt="sunkissed" />
            </div>

            <img
                className={goToNextProject}
                onClick={() => navigate('/spaces')}
                src="/images/hygge series/next.png"
                alt="hygge series - next arrow"
            />
        </>
    );
}

export default HyggeSeries;
