import { useNavigate } from "react-router-dom";

const OffsetCoffee = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="md:mx-16 md:my-24 md:mt-40">
                <div className="flex gap-40">
                    <div className="flex-1 ml-32">
                        <h1 className="font-helvetica text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4 lg:mb-6">Offset Coffee Merch Design</h1>
                        <p className="font-helvetica text-base sm:text-lg md:text-lg lg:text-xl">
                            Offset reached out to collaborate on a tumblr design that showcased both of their shop locations at the time.
                            The idea was to create a map. I was given free reign and so I set out to learn more about their vibe, which included
                            vintage car shows and that classic California feeling! The design was later printed on T-shirts as well... rad move.
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className="font-helvetica text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4 lg:mb-6">Project Details</h1>
                        <p className="font-helvetica text-base sm:text-lg md:text-lg lg:text-xl">
                            <strong>Brief:</strong> Illustrate a map that represents both coffee shop locations. Do it in your style!
                        </p>
                        <p className="font-helvetica text-base sm:text-lg md:text-lg lg:text-xl">
                            <strong>Tools:</strong> Paper, Pen, Procreate, Adobe Illustrator
                        </p>

                        <div className="inline-flex gap-3 mt-5">
                            <span className="w-8 h-8 rounded-full bg-[#f3ca7b]"></span>
                            <span className="w-8 h-8 rounded-full bg-[#548c9d]"></span>
                            <span className="w-8 h-8 rounded-full bg-[#ceaa7c]"></span>
                            <span className="w-8 h-8 rounded-full bg-[#a06a2f]"></span>
                            <span className="w-8 h-8 rounded-full bg-[#92be9c]"></span>
                            <span className="w-8 h-8 rounded-full bg-[#fff5eb] border border-black"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-36 mt-20 items-center">
                <img className="w-5/12 h-auto" src="/images/offset/6 illustration.png" alt="offset illustration" />

                <div className="flex gap-40">
                    <img className="w-60 h-96" src="/images/offset/7 mug sun view.png" alt="mug sun view" />
                    <img className="w-60 h-96" src="/images/offset/7 mug front view.png" alt="mug front view" />
                    <img className="w-64 h-96" src="/images/offset/7 mug side view.png" alt="mug side view" />
                </div>

                <div className="inline-flex">
                    <img className="w-96" src="/images/offset/8 shirt front.png" alt="Shirt front" />
                    <img className="w-96" src="/images/offset/8 shirt back.png" alt="Shirt back" />
                </div>

                <p className="mt-[-9rem] ml-[34rem]">photo credits to @kyle.braaten</p>
            </div>

            <img
                className="absolute right-0 p-24 cursor-pointer hover:opacity-50 transition-opacity duration-300 mt-12"
                onClick={() => navigate('/myHumbleAbode')}
                src="/images/offset/nexxt.png"
                alt="Next project"
            />
        </>
    );
};

export default OffsetCoffee;
