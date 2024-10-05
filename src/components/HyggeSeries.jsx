import { useNavigate } from "react-router-dom";

const HyggeSeries = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mt-40 lg:mx-32 lg:my-34 lg:mt-60">
                <div className="flex flex-col gap-10 m-10 lg:flex-row lg:gap-16 lg:ml-32">
                    <div className="flex-1">
                        <h1 className="font-helvetica text-xl lg:text-3xl font-semibold mb-4 lg:mb-5">Hygge Series</h1>
                        <p className="font-helvetica lg:text-xl">
                            The inspiration behind these illustrations is the philosophy and lifestyle of hygge ("hoo-ga"), characteristic of the Danish culture, in which one takes the time to slow down and enjoy the simple pleasures of life. To me, hygge is spending time with the people I love and enjoying hours soaking in the summer sun.
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className="font-helvetica text-xl lg:text-4xl font-semibold mb-4 lg:mb-5">Project Details</h1>
                        <p className="font-helvetica lg:text-2xl"><strong>Brief:</strong> Passion Project - draw your hygge experiences.</p>
                        <p className="font-helvetica lg:text-2xl"><strong>Tools:</strong> Paper, Pencil, Procreate, Illustrator, Photoshop</p>

                        <div className="inline-flex gap-2 sm:gap-3 mt-4 lg:mt-5">
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                            <div className="w-8 h-8 bg-white border border-black rounded-full"></div>
                            <div className="w-8 h-8 bg-white border border-black rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gap-12 flex flex-col lg:gap-36 mt-10 items-center">
                <img className="w-6/12 h-auto lg:mt-[-5rem]" src="/images/hygge series/6 lets get together.png" alt="let's get together" />
                <img className="w-6/12 h-auto" src="/images/hygge series/7 mock mural.png" alt="mock mural" />
                <img className="w-6/12 h-auto" src="/images/hygge series/8 celebrate.png" alt="celebrate" />
                <img className="w-6/12 h-auto" src="/images/hygge series/9 lets get coffee.png" alt="let's get coffee" />
                <img className="w-6/12 h-auto" src="/images/hygge series/10 sunkissed.png" alt="sunkissed" />
            </div>

            <img
                className="absolute right-0 p-24 cursor-pointer hover:opacity-50 transition-opacity duration-300"
                onClick={() => navigate('/spaces')}
                src="/images/hygge series/next.png"
                alt="hygge series - next arrow"
            />
        </>
    );
}

export default HyggeSeries;
