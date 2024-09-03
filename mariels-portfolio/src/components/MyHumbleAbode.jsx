import { useNavigate } from "react-router-dom";

const MyHumbleAbode = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="main-container" >
                <div className="content-row" >
                    <div className="description">
                        <h1 className="project-title">My Humble Abode</h1>
                        <p className="project-description">A compilation of some of my early drawings. I made it a point to
                            simply draw what was around me and ended up with many line works of my small studio apartment at the time.
                            Beginnings are very important; exploring how to observe and transfer what I see using pencil onto
                            the page was and still is an incredibly important and ongoing process for me. Hence, why I include
                            these simple, minimal pieces here.
                        </p>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h1 className="project-title">Project Details</h1>
                        <p className="project-description"><strong>Brief:</strong> Sketchbook Time -  draw what is around you. </p>
                        <p className="project-description"><strong>Tools:</strong> Paper, Pencil, Sketchbook, Procreate</p>


                        <div className="cirlces-container">
                            <span className="circle" style={{ backgroundColor: 'black' }}></span>
                            <span className="circle" style={{ backgroundColor: 'white', border: '1px solid black' }}></span>
                        </div>
                    </div>
                </div>
            </div>

           <div className="images-container">
                <img className="project-image" src="/images/my humble abode/6 bayridge.png" alt="bayridge" />

                <div style={{ display: 'inline-flex' }}>
                    <img className="project-image2" src="/images/my humble abode/7 entrance copy 2.png" alt="entrance" />
                    <img className="project-image2" src="/images/my humble abode/8 bedroom set up.png" alt="bedroom set up" />
                </div>

                <img className="project-image" src="/images/my humble abode/9 study corner.png" alt="study corner" />
                <img className="project-image" src="/images/my humble abode/10 kitchen.png" alt="kitchen" />
            </div>

            <img className="nextProject" onClick={() => navigate('/hyggeSeries')} src="/images/my humble abode/11 next.png" />
        </>
    )

}

export default MyHumbleAbode;