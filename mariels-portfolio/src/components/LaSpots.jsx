import { useNavigate } from "react-router-dom";

const LaSpots = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="main-container" >
                <div className="content-row" >
                    <div className="description">
                        <h1 className="project-title">LA Spots</h1>
                        <p className="project-description">From the tip of San Pedro all the way up to Malibu, to the undying
                            land of Disney in Anaheim, and a few other points of interest, here are some of the most well-loved spots
                            in Los Angeles. This project was inspired by a way to give Turo guests a small visual reference of
                            recommendations for where to go to enjoy SoCal around LA county. Turo is a rideshare app of which I used to be a host for!
                        </p>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h1 className="project-title">Project Details</h1>
                        <p className="project-description"><strong>Brief:</strong>create a reference card map & brochure for Turo guests</p>
                        <p className="project-description"><strong>Tools:</strong> Paper, Pencil, Adobe Illustrator, Photoshop</p>


                        <div className="cirlces-container">
                            <span className="circle" style={{ backgroundColor: 'black' }}></span>
                            <span className="circle" style={{ backgroundColor: 'white', border: '1px solid black' }}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="images-container">
                <img className="project-image" src="/images/la spots/6 map_.png" alt="map" />
                <img className="project-image" src="/images/la spots/7 vectors.png" alt="vectors" />

                <div style={{ display: 'inline-flex' }}>
                    <img className="project-image2" src="/images/la spots/brocure 1.png" alt="brochure 1" />
                    <img className="project-image2" src="/images/la spots/brochure 2.png" alt="brochure 2" />
                </div>

                <div style={{ display: 'inline-flex' }}>
                    <img src="/images/la spots/front mock.png" alt="front mock" />
                    <img src="/images/la spots/back mock.png" alt="back mock" />
                </div>

                <img className="project-image" src="/images/la spots/8 magazine.png" alt="magazine" />
            </div>

            <img className="nextProject" onClick={() => navigate('/siamThai')} src="/images/la spots/next.png" />
        </>
    )

}

export default LaSpots;