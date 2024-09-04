import { useNavigate } from "react-router-dom";

const LocalCoffeeShops = () => {

    const navigate = useNavigate();

    //style defintions
    const mainContainer = `
    mx-8 my-16 mt-24
    md:mx-16 md:my-24 md:mt-40
    lg:mx-32 lg:my-34 lg:mt-60
`;
    const contentRow = "flex flex-col lg:flex-row gap-8 lg:gap-16";
    const descriptionContainer = "flex-1 ml-32"
    const projectDescription = "font-helvetica text-base sm:text-lg md:text-lg lg:text-xl";
    const projectTitle = "font-helvetica text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold mb-4 lg:mb-6";
    const colorsContainer = "inline-flex gap-2 sm:gap-3 mt-4 lg:mt-5";
    const imagesContainer = "flex flex-col gap-36 mt-10 items-center"
    const imageSize2 = "w-72 h-auto"
    const imageSize1 = "w-5/12 h-auto"
    const goToNextProject = "absolute right-0 p-24 cursor-pointer hover:opacity-50 transition-opacity duration-300"


    return (
        <>
            <div className={mainContainer} >
                <div className={contentRow}>
                    <div className={descriptionContainer}>
                        <p className={projectTitle}>South Bay, CA Local Coffee Shops</p>
                        <p className={projectDescription}>I wanted to personally explore and showcase the local coffee shops in
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

                    <div style={{ flex: 1 }}>
                        <h1 className={projectTitle}>Project Details</h1>
                        <p className={projectDescription}><strong>Brief:</strong> Passion-Project -showcase local coffee shops in your community.</p>
                        <p className={projectDescription}><strong>Tools:</strong> Paper, Pen, Procreate, Adobe Illustrator</p>

                        <div className={colorsContainer}>

                            <div className="w-8 h-8 bg-[#c28d4a] rounded-full"></div>
                            <div className="w-8 h-8 bg-[#bea489] rounded-full"></div>
                            <div className="w-8 h-8 bg-[#fff5eb] rounded-full"></div>
                            <div className="w-8 h-8 bg-[#b1cfb4] rounded-full"></div>
                            <div className="w-8 h-8 bg-[#4b4e5d] rounded-full"></div>
                            <div className="w-8 h-8 bg-[#000000] rounded-full"></div>
                        </div>
                    </div>
                </div>

                <div className={imagesContainer}>
                    <img className={imageSize1} src="/images/coffee shops/6 MAP illustration.png" />

                    <div className="inline-flex items-center justify-center">
                        <img className={imageSize2} src="/images/coffee shops/7 keys.png" />
                        <img className={imageSize2} src="/images/coffee shops/8 coffee design.png" />
                    </div>
                    <img className={imageSize1} src="/images/coffee shops/9 typography.png" />
                </div>


                <img
                    className={goToNextProject}
                    src="/images/coffee shops/10 next.png"
                    alt="Next Project"
                    onClick={() => navigate('/offsetCoffee')}
                />


            </div>
        </>

    )
}

export default LocalCoffeeShops; 