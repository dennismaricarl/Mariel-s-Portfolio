import {useNavigate} from 'react-router-dom';

const ProjectsList = () => {
    const navigate = useNavigate()

    const images = [
        { image: "/images/projects/1 local coffes shops image.png", title: "South Bay, CA Local Coffee Shops Map", path:"/localCoffeeShops"},
        { image: "/images/projects/2 offset illustrationo.png", title: "Offset Coffee Merch Illustration", path:"/offsetCoffee"},
        { image: "/images/projects/4 lets get tgether image Frame.png", title: "Hygge Series", path:"/hyggeSeries"},
        { image: "/images/projects/6 siam image.png", title: "Siam Thai Station Mural", path:"/siamThai"},
        { image2: "/images/projects/3 humble abode image.png", title2: "My Humble Abode", path:"/myHumbleAbode"},
        { image2: "/images/projects/5 spaces image.png", title2: "S P A C E S (coffee shop interiors)", path:"/spaces"},
        { image2: "/images/projects/7 LA spots image.png", title2: "LA Spots", path:"/laSpots"}

    ]

    return (
        <div id="projectsListId" >
            <h1 style={{ textAlign: 'center', fontSize: '80px' }}>PROJECTS</h1>


            <div style={{ display: 'flex', justifyContent: 'center', gap:'10px' }}>
                <div>
                    {images.map((img, i) => (
                        <div className="image" key={i} >
                            <img onClick={()=> navigate(`${img.path}`)}style={{ paddingBottom: '23px' }} src={img.image} />
                            <h2>{img.title}</h2>
                        </div>
                    ))}
                </div>

                <div  style={{ marginTop: '-6rem' }} >
                    {images.map((img, i) => (
                        <div className="image" key={i}>
                            <img onClick={()=> navigate(`${img.path}`)} src={img.image2} />
                            <h2>{img.title2}</h2>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default ProjectsList; 