import { useNavigate } from "react-router-dom";
import BackToHome from "./BackToHome";

const Spaces = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="main-container" >
                <div className="content-row" >
                    <div className="description">
                        <h1>S P A C E S (coffee shop interiors)</h1>
                        <p style={{ fontSize: '20px' }}>There is always something enthralling
                            about being in a well designed space. Like many folks all over the world, I admire
                            the interior of beautiful coffee shops, along with the smells and sounds of people going
                            through their day, working, reading, catching up with a friend, or simply stopping by for a pastry
                            and a nice cup of warm coffee or tea. I mixed my drawings with real images of
                            textures from the shop to give that meaningful touch.

                        </p>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h1>Project Details</h1>
                        <p style={{ fontSize: '20px' }}><strong>Brief:</strong> Sketchbook Time - draw beautiful interiors you enjoy </p>
                        <p style={{ fontSize: '20px' }}><strong>Tools:</strong> Paper, Pencil, Procreatep</p>


                        <div className="cirlces-container">
                            <span className="circle" style={{ backgroundColor: 'black' }}></span>
                            <span className="circle" style={{ backgroundColor: 'orange' }}></span>
                            <span className="circle" style={{ backgroundColor: 'blue' }} ></span>
                            <span className="circle" style={{ backgroundColor: 'black' }}></span>
                            <span className="circle" style={{ backgroundColor: 'black' }}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="images-container">
                <img src="/images/spaces/6 nook.png" alt="nook" />
                <img src="/images/spaces/6 nook sketch.png" alt="nook sketch" />
                <img src="/images/spaces/7 coffee parlor.png" alt="coffee parlor" />
                <img src="/images/spaces/7 coffee parlor sketch.png" alt="coffee parlor sketch" />
                <img src="/images/spaces/8 avatar.png" alt="avatar" />
                <img src="/images/spaces/8 avatar sketch.png" alt="avatar sketch" />
                <img src="/images/spaces/9 black ring.png" alt="black ring" />
                <img src="/images/spaces/10 black ring sketch.png" alt="black ring sketch" />
            </div>

            <img className="nextProject" onClick={() => navigate('/siamThai')} src="/images/spaces/next.png" />
        </>
    )

}

export default Spaces;