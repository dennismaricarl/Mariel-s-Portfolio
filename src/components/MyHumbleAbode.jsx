import { useNavigate } from "react-router-dom";

const MyHumbleAbode = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mt-40 lg:mx-32 lg:my-34 lg:mt-60">
                <div className="flex flex-col gap-10 m-10 lg:flex-row lg:gap-16 lg:ml-32">
                    <div className="flex-1">
                        <h1 className="font-helvetica text-xl lg:text-3xl font-semibold mb-4 lg:mb-6">My Humble Abode</h1>
                        <p className="font-helvetica lg:text-xl">
                            A compilation of some of my early drawings. I made it a point to
                            simply draw what was around me and ended up with many line works of my small studio apartment at the time.
                            Beginnings are very important; exploring how to observe and transfer what I see using pencil onto
                            the page was and still is an incredibly important and ongoing process for me. Hence, why I include
                            these simple, minimal pieces here.
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className="font-helvetica text-xl lg:text-3xl font-semibold mb-4 lg:mb-6">Project Details</h1>
                        <p className="font-helvetica text-base lg:text-xl">
                            <strong>Brief:</strong> Sketchbook Time - draw what is around you.
                        </p>
                        <p className="font-helvetica text-base lg:text-xl">
                            <strong>Tools:</strong> Paper, Pencil, Sketchbook, Procreate
                        </p>

                        <div className="inline-flex gap-3 mt-5">
                            <span className="w-8 h-8 bg-black rounded-full"></span>
                            <span className="w-8 h-8 bg-white border border-black rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gap-12 flex flex-col lg:gap-36 mt-20 items-center">
                <img className="w-5/12 h-auto" src="/images/my humble abode/6 bayridge.png" alt="bayridge" />

                <div className="inline-flex items-center justify-center gap-10">
                    <img className="w-5/12 h-auto" src="/images/my humble abode/7 entrance copy 2.png" alt="entrance" />
                    <img className="w-3/12 h-auto" src="/images/my humble abode/8 bedroom set up.png" alt="bedroom setup" />
                </div>

                <img className="w-5/12 h-auto" src="/images/my humble abode/9 study corner.png" alt="study corner" />
                <img className="w-5/12 h-auto" src="/images/my humble abode/10 kitchen.png" alt="kitchen" />
            </div>

            <img
                className="absolute right-0 p-24 cursor-pointer hover:opacity-50 transition-opacity duration-300"
                onClick={() => navigate('/hyggeSeries')}
                src="/images/my humble abode/11 next.png"
                alt="Next Project"
            />
        </>
    );
}

export default MyHumbleAbode;
