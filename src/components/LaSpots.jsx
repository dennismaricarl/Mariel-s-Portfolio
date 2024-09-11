import { useNavigate } from "react-router-dom";

const LaSpots = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mx-32 my-34 mt-60">
                <div className="flex gap-40">
                    <div className="flex-1 ml-32 ">
                        <h1 className="font-helvetica text-4xl font-semibold mb-5">LA Spots</h1>
                        <p className="font-helvetica text-2xl">
                            From the tip of San Pedro all the way up to Malibu, to the undying
                            land of Disney in Anaheim, and a few other points of interest, here are some of the most well-loved spots
                            in Los Angeles. This project was inspired by a way to give Turo guests a small visual reference of
                            recommendations for where to go to enjoy SoCal around LA county. Turo is a rideshare app of which I used to be a host for!
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className="font-helvetica text-4xl font-semibold mb-5">Project Details</h1>
                        <p className="font-helvetica text-2xl">
                            <strong>Brief:</strong> Create a reference card map & brochure for Turo guests
                        </p>
                        <p className="font-helvetica text-2xl">
                            <strong>Tools:</strong> Paper, Pencil, Adobe Illustrator, Photoshop
                        </p>

                        <div className="inline-flex gap-3 mt-5">
                            <span className="w-8 h-8 rounded-full bg-black"></span>
                            <span className="w-8 h-8 rounded-full bg-white border border-black"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-40 mt-40 items-center justify-center">
                <img className="w-5/12 h-auto" src="/images/la spots/6 map_.png" alt="map" />
                <img className="w-5/12 h-auto" src="/images/la spots/7 vectors.png" alt="vectors" />

                <div className="inline-flex gap-4">
                    <img className="w-96 h-96" src="/images/la spots/brocure 1.png" alt="brochure 1" />
                    <img className="w-96 h-96" src="/images/la spots/brochure 2.png" alt="brochure 2" />
                </div>

                <div className="inline-flex gap-4">
                    <img src="/images/la spots/front mock.png" alt="front mock" />
                    <img src="/images/la spots/back mock.png" alt="back mock" />
                </div>

                <img className="w-5/12 h-auto" src="/images/la spots/8 magazine.png" alt="magazine" />
            </div>

            <img
                className="absolute right-0 p-24 cursor-pointer hover:opacity-50 transition-opacity duration-300 mt-12"
                onClick={() => navigate('/siamThai')}
                src="/images/la spots/next.png"
                alt="next project"
            />
        </>
    );
}

export default LaSpots;
