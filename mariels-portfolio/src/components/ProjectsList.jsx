import { useNavigate } from 'react-router-dom';

const ProjectsList = () => {
    const navigate = useNavigate();


    const images = [
        { image: "/images/projects/1 local coffes shops image.png", title: "South Bay, CA Local Coffee Shops Map", path: "/localCoffeeShops", marginLeft: '-2rem' },
        { image: "/images/projects/2 offset illustrationo.png", title: "Offset Coffee Merch Illustration", path: "/offsetCoffee" },
        { image: "/images/projects/4 lets get tgether image Frame.png", title: "Hygge Series", path: "/hyggeSeries" },
        { image: "/images/projects/6 siam image.png", title: "Siam Thai Station Mural", path: "/siamThai" },
        { image: "/images/projects/3 humble abode image.png", title: "My Humble Abode", path: "/myHumbleAbode" },
        { image: "/images/projects/5 spaces image.png", title: "S P A C E S (coffee shop interiors)", path: "/spaces" },
        { image: "/images/projects/7 LA spots image.png", title: "LA Spots", path: "/laSpots", titleMarginLeft: '2rem' }
    ];

    return (
        <div id="projectsListId">
            <h1 className="title">PROJECTS</h1>

            <div className="projects-container">
                <div className="projects-column">
                    {images.slice(0, 4).map((img, i) => (
                        <div className="image" key={i} >
                            <img
                                style={{ marginLeft: img.marginLeft }}
                                onClick={() => navigate(img.path)}
                                src={img.image}
                                alt={img.title}
                            />
                            <h2 className="image-title">{img.title}</h2>
                        </div>
                    ))}
                </div>

                <div className="projects-column">
                    {images.slice(4).map((img, i) => (
                        <div className="image" key={i}>
                            <img
                                onClick={() => navigate(img.path)}
                                src={img.image}

                                alt={img.title}
                            />
                            <h2 className="image-title" style={{ marginLeft: img.titleMarginLeft }}>{img.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectsList;
