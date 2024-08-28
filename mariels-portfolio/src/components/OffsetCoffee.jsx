import { useNavigate } from "react-router-dom";

const OffsetCoffee = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="main-container" >
                <div className="content-row" >
                    <div className="description">
                        <h1 className="project-title">Offset Coffee Merch Design</h1>
                        <p className="project-description">Offset reached out to collaborate on a
                            tumblr design that showcased both of their shop locations at the time.
                            The idea was to create a map. I was given free reign and so I set out learn
                            more about their vibe, which included vintage car shows and that classic
                            California feeling! The design was later printed on T-shirts as well... rad move.
                        </p>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h1 className="project-title">Project Details</h1>
                        <p className="project-description"><strong>Brief:</strong> Illustrate a map that represents both coffee shop locations. Do it in your style!</p>
                        <p className="project-description"><strong>Tools:</strong> Paper, Pen, Procreate, Adobe Illustrator</p>


                        <div className="cirlces-container">

                            <span className="circle" style={{ backgroundColor: '#f3ca7b' }}></span>
                            <span className="circle" style={{ backgroundColor: '#548c9d' }}></span>
                            <span className="circle" style={{ backgroundColor: '#ceaa7c' }}></span>
                            <span className="circle" style={{ backgroundColor: '#a06a2f' }}></span>
                            <span className="circle" style={{ backgroundColor: '#92be9c' }}></span>
                            <span className="circle" style={{ backgroundColor: '#fff5eb' }}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="images-container">
                <img className="project-image" src="/images/offset/6 illustration.png" alt="offset illustration" />


                <div style={{ display: 'flex', gap: '10rem' }}>
                    <img className="project-image" src="/images/offset/7 mug sun view.png" alt="mug sun view" />
                    <img className="project-image" src="/images/offset/7 mug front view.png" alt="mug front view" />
                    <img className="project-image" src="/images/offset/7 mug side view.png" alt="mug side view" />
                </div>


                <div style={{ display: 'flex', justifyContent:'center'}}>
                    <img className="project-image2" src="/images/offset/8 shirt front.png" alt="Shirt front" />
                    <img className="project-image2" src="/images/offset/8 shirt back.png" alt="Shirt back" />
                </div>

                <p style={{ fontFamily: 'serif', fontSize: '25px', marginTop: '-10rem', marginLeft:'45rem' }}>photo credits to @kyle.braaten</p>


            </div>

            <img className="nextProject" onClick={() => navigate('/myHumbleAbode')} style={{ marginTop: '3rem' }} src="/images/offset/nexxt.png" />
        </>
    )

}

export default OffsetCoffee;