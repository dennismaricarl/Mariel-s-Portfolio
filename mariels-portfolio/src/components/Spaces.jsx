import { useNavigate } from "react-router-dom";

const Spaces = () => {
    const navigate = useNavigate();

    // Tailwind CSS class names
    const mainContainer = "mx-32 my-34 mt-60";
    const contentRow = "flex gap-40";
    const descriptionContainer = "flex-1 ml-32";
    const projectDescription = "font-helvetica text-2xl";
    const projectTitle = "font-helvetica text-4xl font-semibold mb-5";
    const colorsContainer = "inline-flex gap-3 mt-5";
    const imagesContainer = "flex flex-col gap-y-40 mt-20 items-center";
    const imageStyle = "w-5/12 h-auto";
    const goToNextProject = "absolute right-0 p-24 cursor-pointer hover:opacity-50 transition-opacity duration-300";
    const circleStyle = "w-8 h-8 rounded-full";
    const circleBlack = "bg-black";
    const circleOrange = "bg-orange-500";
    const circleBlue = "bg-blue-500";

    return (
        <>
            <div className={mainContainer}>
                <div className={contentRow}>
                    <div className={descriptionContainer}>
                        <h1 className={projectTitle}>S P A C E S (coffee shop interiors)</h1>
                        <p className={projectDescription}>
                            There is always something enthralling
                            about being in a well designed space. Like many folks all over the world, I admire
                            the interior of beautiful coffee shops, along with the smells and sounds of people going
                            through their day, working, reading, catching up with a friend, or simply stopping by for a pastry
                            and a nice cup of warm coffee or tea. I mixed my drawings with real images of
                            textures from the shop to give that meaningful touch.
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className={projectTitle}>Project Details</h1>
                        <p className={projectDescription}>
                            <strong>Brief:</strong> Sketchbook Time - draw beautiful interiors you enjoy
                        </p>
                        <p className={projectDescription}>
                            <strong>Tools:</strong> Paper, Pencil, Procreate
                        </p>

                        <div className={colorsContainer}>
                            <span className={`${circleStyle} ${circleBlack}`}></span>
                            <span className={`${circleStyle} ${circleOrange}`}></span>
                            <span className={`${circleStyle} ${circleBlue}`}></span>
                            <span className={`${circleStyle} ${circleBlack}`}></span>
                            <span className={`${circleStyle} ${circleBlack}`}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={imagesContainer}>
                <img className={imageStyle} src="/images/spaces/6 nook.png" alt="nook" />
                <img className={imageStyle} src="/images/spaces/6 nook sketch.png" alt="nook sketch" />
                <img className={imageStyle} src="/images/spaces/7 coffee parlor.png" alt="coffee parlor" />
                <img className={imageStyle} src="/images/spaces/7 coffee parlor sketch.png" alt="coffee parlor sketch" />
                <img className={imageStyle} src="/images/spaces/8 avatar.png" alt="avatar" />
                <img className={imageStyle} src="/images/spaces/8 avatar sketch.png" alt="avatar sketch" />
                <img className={imageStyle} src="/images/spaces/9 black ring.png" alt="black ring" />
                <img className={imageStyle} src="/images/spaces/10 black ring sketch.png" alt="black ring sketch" />
            </div>

            <img
                className={goToNextProject}
                onClick={() => navigate('/siamThai')}
                src="/images/spaces/next.png"
                alt="next project"
            />
        </>
    );
}

export default Spaces;
