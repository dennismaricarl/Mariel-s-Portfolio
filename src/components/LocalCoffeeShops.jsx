import { useNavigate } from "react-router-dom";

const LocalCoffeeShops = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mt-40 lg:mx-32 lg:my-34 lg:mt-60">
                <div className="flex flex-col gap-10 m-10 lg:flex-row lg:gap-16 lg:ml-32">
                          
                    <div className="flex-1">
                        <p className="font-helvetica text-xl lg:text-3xl font-semibold mb-4 lg:mb-6">South Bay, CA Local Coffee Shops</p>
                        <p className="font-helvetica lg:text-xl">
                            I wanted to personally explore and showcase the local coffee shops in
                            my area through this doodle-like illustrated map :) It begun as an idea
                            that turned into hours of researching, sketching, and finally composing a
                            hand-drawn and then digitized map to represent a little South Bay,
                            Cali culture! I also created a quick and easy key to encourage interaction
                            with the drawing. It was very special and fun when viewers and local
                            business owners are able to recognize or want to explore the coffee spots
                            they see on the map. It was a satisfying experience to initiate conversations
                            through visual art!
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className="font-helvetica text-xl lg:text-3xl font-semibold mb-4 lg:mb-6">Project Details</h1>
                        <p className="font-helvetica text-base lg:text-xl">
                            <strong>Brief:</strong> Passion-Project - showcase local coffee shops in your community.
                        </p>
                        <p className="font-helvetica text-base lg:text-xl">
                            <strong>Tools:</strong> Paper, Pen, Procreate, Adobe Illustrator
                        </p>

                        <div className="inline-flex gap-2 sm:gap-3 mt-4 lg:mt-5">
                            <div className="w-8 h-8 bg-[#c28d4a] rounded-full"></div>
                            <div className="w-8 h-8 bg-[#bea489] rounded-full"></div>
                            <div className="w-8 h-8 bg-[#fff5eb] rounded-full"></div>
                            <div className="w-8 h-8 bg-[#b1cfb4] rounded-full"></div>
                            <div className="w-8 h-8 bg-[#4b4e5d] rounded-full"></div>
                            <div className="w-8 h-8 bg-black rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-36 mt-10 items-center">
                    <img className="lg:w-5/12 lg:h-auto" src="/images/coffee shops/6 MAP illustration.png" alt="Map illustration" />

                    <div className="inline-flex items-center justify-center gap-8">
                        <img className="w-40 lg:w-72 lg:h-auto" src="/images/coffee shops/7 keys.png" alt="Keys" />
                        <img className="w-40 lg:w-72 lg:h-auto" src="/images/coffee shops/8 coffee design.png" alt="Coffee design" />
                    </div>

                    <img className="lg:w-5/12 lg:h-auto" src="/images/coffee shops/9 typography.png" alt="Typography" />
                </div>

                <img
                    className="absolute right-0 p-24 cursor-pointer hover:opacity-50 transition-opacity duration-300 mt-12"
                    src="/images/coffee shops/10 next.png"
                    alt="Next Project"
                    onClick={() => navigate('/offsetCoffee')}
                />
            </div>
        </>
    );
};

export default LocalCoffeeShops;
