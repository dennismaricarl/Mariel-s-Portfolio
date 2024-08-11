import { useNavigate } from "react-router-dom";
import BackToHome from "./BackToHome";

const SiamThai = () => {

    const navigate = useNavigate();

    return (
        <>
            <BackToHome />
            <div className="main-container" >
                <div className="content-row" >
                    <div className="description">
                        <h1>Siam Thai Station Mural</h1>
                        <p style={{ fontSize: '20px' }}>Proposed black and white line art mural for a Thai restaurant.
                            The theme here is community expressed through businesses and activities around the city
                            mixed with Thailand culture and its emblems to represent the restaurant's - and really the
                            Asian roots and influence in my town. I created many of the drawings with a splash of imagination
                            and play!
                        </p>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h1>Project Details</h1>
                        <p style={{ fontSize: '20px' }}><strong>Brief:</strong>create a community inspired mural for Thai restaurant, Siam Station</p>
                        <p style={{ fontSize: '20px' }}><strong>Tools:</strong> Paper, Pencil, Procreate, Illustrator, Photoshop</p>


                        <div className="cirlces-container">
                            <span className="circle" style={{ backgroundColor: 'black' }}></span>
                            <span className="circle" style={{ backgroundColor: 'white', border: '1px solid black' }}></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="images-container">
                <img src="/images/siam station/6 Siam Thai Mural Vector.png" alt="Siam Thai Mural Vector" />
                <img src="/images/siam station/7 resto mock up.png" alt="resto mock up" />
                <img src="/images/siam station/8 Mural Process.png" alt="Mural Process" />
            </div>

            <img className="nextProject" onClick={() => navigate('/laSpots')} src="/images/siam station/next.png" />
        </>
    )

}

export default SiamThai;