import { useNavigate } from "react-router-dom";

const LocalCoffeeShops = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="main-container" >
                <div className="content-row">
                    <div className="description">
                        <h1 className="project-title">South Bay, CA Local Coffee Shops</h1>
                        <p className="project-description">I wanted to personally explore and showcase the local coffee shops in
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
                        <h1 className="project-title">Project Details</h1>
                        <p className="project-description"><strong>Brief:</strong> Passion-Project -showcase local coffee shops in your community.</p>
                        <p className="project-description"><strong>Tools:</strong> Paper, Pen, Procreate, Adobe Illustrator</p>

                        <div className="cirlces-container">
 
                            <span className="circle" style={{ backgroundColor: '#c28d4a' }}></span>
                            <span className="circle" style={{ backgroundColor: '#bea489' }}></span>
                            <span className="circle" style={{ backgroundColor: '#fff5eb' }}></span>
                            <span className="circle" style={{ backgroundColor: '#b1cfb4' }}></span>
                            <span className="circle" style={{ backgroundColor: '#4b4e5d' }}></span>
                            <span className="circle" style={{ backgroundColor: '#000000' }}></span>
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