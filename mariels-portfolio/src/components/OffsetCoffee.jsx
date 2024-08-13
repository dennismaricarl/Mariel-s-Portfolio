import { useNavigate } from "react-router-dom";

const LocalCoffeeShops = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="main-container" >
                <div className="content-row" >
                    <div className="description">
                        <h1>Offset Coffee Merch Design</h1>
                        <p style={{ fontSize: '20px' }}>Offset reached out to collaborate on a
                            tumblr design that showcased both of their shop locations at the time.
                            The idea was to create a map. I was given free reign and so I set out learn
                            more about their vibe, which included vintage car shows and that classic
                            California feeling! The design was later printed on T-shirts as well... rad move.
                        </p>
                    </div>

                    <div style={{ flex: 1 }}>
                        <h1>Project Details</h1>
                        <p style={{ fontSize: '20px' }}><strong>Brief:</strong> Illustrate a map that represents both coffee shop locations. Do it in your style!</p>
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
            </div>

            <div className="images-container">
                <img src="/images/offset/6 illustration.png" alt="offset illustration" />

                <div>
                    <img src="/images/offset/7 mug sun view.png" alt="mug sun view" />
                    <img src="/images/offset/7 mug front view.png" alt="mug front view" />
                    <img src="/images/offset/7 mug side view.png" alt="mug side view" />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'inline-flex' }}>
                        <img src="/images/offset/8 shirt front.png" alt="shirt front" />
                        <img src="/images/offset/8 shirt back.png" alt="shirt back" />
                    </div>
                    <p style={{ fontFamily: 'serif', fontSize: '30px', textAlign: 'right', marginTop: '-2px' }}>photo credits to @kyle.braaten</p>
                </div>

            </div>

            <img className="nextProject" onClick={() => navigate('/myHumbleAbode')} style={{ marginTop: '3rem' }} src="/images/offset/nexxt.png" />
        </>
    )

}

export default LocalCoffeeShops;