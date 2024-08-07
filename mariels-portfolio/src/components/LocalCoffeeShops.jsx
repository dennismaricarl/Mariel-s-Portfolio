

const LocalCoffeeShops = () => {
    return (
        <div className="coffeeShops-container">

            <div style={{ display: 'flex', flexDirection: 'row', gap: '10rem' }}>
                <div style={{ flex: 1, maxWidth: '80%', marginLeft: '80px' }}>
                    <h1>South Bay, CA Local Coffee Shops</h1>
                    <p>I wanted to personally explore and showcase the local coffee shops in
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
                    <p><span style={{ fontWeight: 'bold' }}>Brief:</span> Passion-Project -showcase local coffee shops in your community.</p>
                    <p><span style={{ fontWeight: 'bold' }}>Tools:</span> Paper, Pen, Procreate, Adobe Illustrator</p>

                    <div className="cirlces-container">
                        <div className="circle" style={{ backgroundColor: '#de8c3e' }}></div>
                        <div className="circle" style={{ backgroundColor: 'burlywood' }}></div>
                        <div className="circle" style={{ backgroundColor: 'antiqueWhite' }}></div>
                        <div className="circle" style={{ backgroundColor: 'green' }}></div>
                        <div className="circle" style={{ backgroundColor: 'gray' }}></div>
                        <div className="circle" style={{ backgroundColor: 'black' }}></div>
                    </div>
                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10rem' }}>
                <img src="/images/coffee shops/6 MAP illustration.png" />

                <div style={{ display: "inline-flex" }}>
                    <img src="/images/coffee shops/7 keys.png" />
                    <img src="/images/coffee shops/8 coffee design.png" />
                </div>
                <img src="/images/coffee shops/9 typography.png" />
            </div>

        </div>
    )
}

export default LocalCoffeeShops; 