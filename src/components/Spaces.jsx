import { useNavigate } from "react-router-dom";

const Spaces = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mx-8 my-16 mt-24 md:mx-16 md:my-24 md:mt-40 lg:mx-32 lg:my-34 lg:mt-60">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
                    <div className="flex-1 lg:ml-32">
                        <h1 className="font-helvetica text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">
                            S P A C E S (coffee shop interiors)
                        </h1>
                        <p className="font-helvetica text-base sm:text-lg md:text-lg lg:text-xl">
                            There is always something enthralling
                            about being in a well designed space. Like many folks all over the world, I admire
                            the interior of beautiful coffee shops, along with the smells and sounds of people going
                            through their day, working, reading, catching up with a friend, or simply stopping by for a pastry
                            and a nice cup of warm coffee or tea. I mixed my drawings with real images of
                            textures from the shop to give that meaningful touch.
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className="font-helvetica text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">
                            Project Details
                        </h1>
                        <p className="font-helvetica text-base sm:text-lg md:text-lg lg:text-xl">
                            <strong>Brief:</strong> Sketchbook Time - draw beautiful interiors you enjoy
                        </p>
                        <p className="font-helvetica text-base sm:text-lg md:text-lg lg:text-xl">
                            <strong>Tools:</strong> Paper, Pencil, Procreate
                        </p>

                        <div className="inline-flex gap-3 mt-5">
                            <span className="w-8 h-8 bg-black rounded-full"></span>
                            <span className="w-8 h-8 bg-orange-500 rounded-full"></span>
                            <span className="w-8 h-8 bg-blue-500 rounded-full"></span>
                            <span className="w-8 h-8 bg-black rounded-full"></span>
                            <span className="w-8 h-8 bg-black rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-40 mt-20 items-center">
                <img className="w-5/12 h-auto" src="/images/spaces/6 nook.png" alt="nook" />
                <img className="w-5/12 h-auto" src="/images/spaces/6 nook sketch.png" alt="nook sketch" />
                <img className="w-5/12 h-auto" src="/images/spaces/7 coffee parlor.png" alt="coffee parlor" />
                <img className="w-5/12 h-auto" src="/images/spaces/7 coffee parlor sketch.png" alt="coffee parlor sketch" />
                <img className="w-5/12 h-auto" src="/images/spaces/8 avatar.png" alt="avatar" />
                <img className="w-5/12 h-auto" src="/images/spaces/8 avatar sketch.png" alt="avatar sketch" />
                <img className="w-5/12 h-auto" src="/images/spaces/9 black ring.png" alt="black ring" />
                <img className="w-5/12 h-auto" src="/images/spaces/10 black ring sketch.png" alt="black ring sketch" />
            </div>

            <img
                className="absolute right-0 p-24 cursor-pointer hover:opacity-50 transition-opacity duration-300"
                onClick={() => navigate('/siamThai')}
                src="/images/spaces/next.png"
                alt="next project"
            />
        </>
    );
}

export default Spaces;
