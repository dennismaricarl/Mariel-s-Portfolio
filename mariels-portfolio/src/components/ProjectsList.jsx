const ProjectsList = () => {

    const images = [
        { image: "/images/projects/1 local coffes shops image.png", title: "South Bay, CA Local Coffee Shops Map" },
        { image: "/images/projects/2 offset illustrationo.png", title: "Offset Coffee Merch Illustration" },
        { image: "/images/projects/4 lets get tgether image Frame.png", title: "Hygge Series" },
        { image: "/images/projects/6 siam image.png", title: "Siam Thai Station Mural" },
        { image2: "/images/projects/3 humble abode image.png", title2: "My Humble Abode" },
        { image2: "/images/projects/5 spaces image.png", title2: "S P A C E S (coffee shop interiors)" },
        { image2: "/images/projects/7 LA spots image.png", title2: "LA Spots" }

    ]

    return (

        <div id="projectsListId" >
            <h1 style={{ textAlign: 'center' }}>Projects</h1>


            <div style={{ display: 'flex' }}>
                <div style={{ flex: 1 }}>
                    {images.map((img, i) => (
                        <div key={i} >
                            <img src={img.image} />
                            <h2>{img.title}</h2>
                        </div>
                    ))}
                </div>

                <div style={{ flex: 1 }}>
                    {images.map((img, i) => (
                        <div key={i}>
                            <img src={img.image2} />
                            <h2>{img.title2}</h2>
                        </div>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default ProjectsList; 