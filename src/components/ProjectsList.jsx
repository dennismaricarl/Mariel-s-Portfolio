import { useNavigate } from 'react-router-dom';

const ProjectsList = () => {
    const navigate = useNavigate();


    const images = [
        { image: "/images/projects/1 local coffes shops image.png", title: "South Bay, CA Local Coffee Shops Map", path: "/localCoffeeShops", marginLeft: '-1rem' },
        { image: "/images/projects/2 offset illustrationo.png", title: "Offset Coffee Merch Illustration", path: "/offsetCoffee"},
        { image: "/images/projects/4 lets get tgether image Frame.png", title: "Hygge Series", path: "/hyggeSeries"},
        { image: "/images/projects/6 siam image.png", title: "Siam Thai Station Mural", path: "/siamThai" },
        { image: "/images/projects/3 humble abode image.png", title: "My Humble Abode", path: "/myHumbleAbode", paddingTop:'6rem' },
        { image: "/images/projects/5 spaces image.png", title: "S P A C E S (coffee shop interiors)", path: "/spaces" },
        { image: "/images/projects/7 LA spots image.png", title: "LA Spots", path: "/laSpots", titleMarginLeft: '2rem' }
    ];


   

    const imageTitle = "text-[15px] mt-3 lg:text-2xl font-Helvetica font-extrabold lg:mt-10"



    return (
        <div id="projectsListId">
            <p className="text-4xl lg:text-7xl text-center lg:pb-10 pt-20 font-Helvetica font-extrabold">PROJECTS</p>

            <div className="ml-5 lg:flex lg:gap-x-10 lg:ml-80 lg:mr-80">
                <div className="lg:flex lg:flex-col justify-between">
                    {images.slice(0, 4).map((img, i) => (
                        <div className="w-[10rem] lg:w-[92%] h-auto cursor-pointer hover:scale-110 mt-10 lg:mt-4" key={i} >
                            <img
                                style={{ marginLeft: img.marginLeft, marginTop:img.marginTop }}
                                onClick={() => navigate(img.path)}
                                src={img.image}
                                alt={img.title}
                            />
                            <p className={imageTitle}>{img.title}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-[-6rem] lg:flex lg:flex-col lg:gap-y-20 lg:mt-0 ">
                    {images.slice(4).map((img, i) => (
                        <div className="w-[10rem] lg:w-[92%] h-auto cursor-pointer hover:scale-110 mt-10" key={i}>
                            <img
                                style={{paddingTop:img.paddingTop, marginTop:img.marginTop}}
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
