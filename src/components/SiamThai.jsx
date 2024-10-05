import { useNavigate } from "react-router-dom";

const SiamThai = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className="mt-40 lg:mx-32 lg:my-34 lg:mt-60">
                <div className="flex flex-col gap-10 m-10 lg:flex-row lg:gap-16 lg:ml-32">
                    <div className="flex-1">
                        <h1 className="font-helvetica text-xl lg:text-4xl font-semibold mb-4 lg:mb-6">Siam Thai Station Mural</h1>
                        <p className="font-helvetica lg:text-xl">
                            Proposed black and white line art mural for a Thai restaurant.
                            The theme here is community expressed through businesses and activities around the city
                            mixed with Thailand culture and its emblems to represent the restaurant's - and really the
                            Asian roots and influence in my town. I created many of the drawings with a splash of imagination
                            and play!
                        </p>
                    </div>

                    <div className="flex-1">
                        <h1 className="font-helvetica text-xl  lg:text-4xl font-semibold mb-4 lg:mb-6">Project Details</h1>
                        <p className="font-helvetica lg:text-xl">
                            <strong>Brief:</strong> Create a community-inspired mural for Thai restaurant, Siam Station
                        </p>
                        <p className="font-helvetica lg:text-xl">
                            <strong>Tools:</strong> Paper, Pencil, Procreate, Illustrator, Photoshop
                        </p>

                        <div className="inline-flex gap-3 mt-5">
                            <span className="w-8 h-8 bg-black rounded-full"></span>
                            <span className="w-8 h-8 bg-white border border-black rounded-full"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gap-16 flex flex-col lg:gap-36 mt-20 items-center">
                <img className="w-6/12 h-auto" src="/images/siam station/6 Siam Thai Mural Vector.png" alt="Siam Thai Mural Vector" />
                <img className="w-6/12 h-auto" src="/images/siam station/7 resto mock up.png" alt="resto mock up" />
                <img className="w-6/12 h-auto" src="/images/siam station/8 Mural Process.png" alt="Mural Process" />
            </div>

            <img
                className="absolute right-0 p-24 cursor-pointer hover:opacity-50 transition-opacity duration-300"
                onClick={() => navigate('/laSpots')}
                src="/images/siam station/next.png"
                alt="next project"
            />
        </>
    );
}

export default SiamThai;
