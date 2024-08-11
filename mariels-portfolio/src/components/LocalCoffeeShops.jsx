import { useNavigate } from "react-router-dom";
import BackToHome from "./BackToHome";


const LocalCoffeeShops = () => {

    const navigate = useNavigate();

    return (
        <>
            <BackToHome />
            <div className="main-container" >
                <div className="content-row">
                    <div className="description">
                        <h1>South Bay, CA Local Coffee Shops</h1>
                        <p style={{ fontSize: '20px' }}>I wanted to personally explore and showcase the local coffee shops in
                            my area through this doodle-like illustrated map :) It begun as an idea
                            that turned into hours of researching, sketching, and finally composing a
                            hand-drawn and then digitized map to represent a little South Bay,
                            Cali culture! I also created a quick and easy key to encourage interaction
                            with the drawing. It was very special and fun when viewers and local
                            business owners are able to recognize or want to explore the coffee spots
                            they see on the map. It was a satisfying experience to initiate conversations
                            through visual art!
                        </p>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h1>Project Details</h1>
                        <p style={{ fontSize: '20px' }}><strong>Brief:</strong> Passion-Project -showcase local coffee shops in your community.</p>
                        <p style={{ fontSize: '20px' }}><strong>Tools:</strong> Paper, Pen, Procreate, Adobe Illustrator</p>

                        <div className="cirlces-container">
                            <span className="circle" style={{ backgroundColor: '#de8c3e' }}></span>
                            <span className="circle" style={{ backgroundColor: 'burlywood' }}></span>
                            <span className="circle" style={{ backgroundColor: 'antiqueWhite' }}></span>
                            <span className="circle" style={{ backgroundColor: 'green' }}></span>
                            <span className="circle" style={{ backgroundColor: 'gray' }}></span>
                            <span className="circle" style={{ backgroundColor: 'black' }}></span>
                        </div>
                    </div>
                </div>

                <div className="images-container">
                    <img src="/images/coffee shops/6 MAP illustration.png" />

                    <div style={{ display: "inline-flex" }}>
                        <img src="/images/coffee shops/7 keys.png" />
                        <img src="/images/coffee shops/8 coffee design.png" />
                    </div>
                    <img src="/images/coffee shops/9 typography.png" />
                </div>


                <img className="nextProject" onClick={() => navigate('/offsetCoffee')} src="/images/coffee shops/10 next.png" />


            </div>
        </>

    )
}

export default LocalCoffeeShops; 