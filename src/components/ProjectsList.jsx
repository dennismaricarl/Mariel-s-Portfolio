import { useNavigate } from 'react-router-dom';

const ProjectsList = () => {
    const navigate = useNavigate();


    const images = [
        { image: "/images/projects/1 local coffes shops image.png", title: "South Bay, CA Local Coffee Shops Map", path: "/localCoffeeShops", marginLeft: '-1rem' },
        { image: "/images/projects/2 offset illustrationo.png", title: "Offset Coffee Merch Illustration", path: "/offsetCoffee" },
        { image: "/images/projects/4 lets get tgether image Frame.png", title: "Hygge Series", path: "/hyggeSeries" },
        { image: "/images/projects/6 siam image.png", title: "Siam Thai Station Mural", path: "/siamThai" },
        { image: "/images/projects/3 humble abode image.png", title: "My Humble Abode", path: "/myHumbleAbode", paddingTop:'6rem' },
        { image: "/images/projects/5 spaces image.png", title: "S P A C E S (coffee shop interiors)", path: "/spaces" },
        { image: "/images/projects/7 LA spots image.png", title: "LA Spots", path: "/laSpots", titleMarginLeft: '2rem' }
    ];


    const mainTitle = "text-4xl lg:text-7xl text-center pb-10 pt-20 lg:pb-20 font-Helvetica font-extrabold"
    const projectsContainer = "flex justify-center items-stretch gap-x-10 ml-80 mr-80"
    const projectColumn = "gap-y-10 flex flex-col justify-between flex-grow lg:gap-y-20"
    const image = "w-[10rem] lg:w-[92%] h-auto cursor-pointer hover:scale-110 "
    const imageTitle = "text-[15px] mt-3 lg:text-2xl font-Helvetica font-extrabold lg:mt-10"



    return (
        <div id="projectsListId">
            <p className={mainTitle}>PROJECTS</p>

            <div className={projectsContainer}>
                <div className={projectColumn}>
                    {images.slice(0, 4).map((img, i) => (
                        <div className={image} key={i} >
                            <img
                                style={{ marginLeft: img.marginLeft }}
                                onClick={() => navigate(img.path)}
                                src={img.image}
                                alt={img.title}
                            />
                            <p className={imageTitle}>{img.title}</p>
                        </div>
                    ))}
                </div>

                <div className={projectColumn}>
                    {images.slice(4).map((img, i) => (
                        <div className={image} key={i}>
                            <img
                                style={{paddingTop:img.paddingTop}}
                                onClick={() => navigate(img.path)}
                                src={img.image}

                                alt={img.title}
                            />
                            <p className={imageTitle} style={{ marginLeft: img.titleMarginLeft }}>{img.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsList;
