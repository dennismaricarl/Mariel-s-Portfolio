import { useNavigate } from "react-router-dom";

const HyggeSeries = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="main-container" >
                <div className="content-row" >
                    <div className="description">
                        <h1 className="project-title">Hygge Series</h1>
                        <p className="project-description">The inspiration behind these illustrations is the philosophy and
                            lifestyle of hygge("hoo-ga"), characteristic of the Danish culture, in which one takes the time to slow down
                            and enjoy the simple pleasures of life. To me, hygge is spending time with the people I love and
                            enjoying hours soaking in the summer sun.
                        </p>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h1>Project Details</h1>
                        <p className="project-description"><strong>Brief:</strong> Passion Project - draw your hygge experiences. </p>
                        <p className="project-description"><strong>Tools:</strong> Paper, Pencil, Procreate, Illustrator, Photoshop</p>


                        <div className="cirlces-container">
                            <span className="circle" style={{ backgroundColor: 'black' }}></span>
                            <span className="circle" style={{ backgroundColor: 'white', border: '1px solid black' }}></span>
                            <span className="circle" style={{ backgroundColor: 'white', border: '1px solid black' }}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="images-container" >
                <img style={{ marginTop: '-12%' }} src="/images/hygge series/6 lets get together.png" alt="let's get together" />
                <img src="/images/hygge series/7 mock mural.png" alt="mock mural" />
                <img src="/images/hygge series/8 celebrate.png" alt="celebrate" />
                <img src="/images/hygge series/9 lets get coffee.png" alt="let's get coffee" />
                <img src="/images/hygge series/10 sunkissed.png" alt="sunkissed" />
            </div>

            <img className="nextProject" onClick={() => navigate('/spaces')} src="/images/hygge series/next.png" alt="hygge series - next arrow"/>
        </>
    )

}

export default HyggeSeries;