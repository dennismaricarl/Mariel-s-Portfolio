import ArrowText from './ArrowText';

const About = () => {
    return (
        <>
            <div id="aboutId" className="sections" style={{ marginTop: '50%' }}>
                <img className="contour-image" src="/images/countour of self.png" />

                <p className="about-right">
                    <ArrowText text='mariel' imageURL='/images/origami bird.png' /> is a <ArrowText text='growing' imageURL='/images/growing - bigger copy.png' size="300px" /> graphic designer
                    and illustrator who loves being <ArrowText text='home' imageURL='/images/loves home.png' /> with family, reading her bible,
                    nurturing plants, <ArrowText text='swimming' imageURL='/images/loves swimming.png' left="20%" /> with goggles, <ArrowText text='equanimity' imageURL='/images/origami bird.png' left="20%"  />, and
                    appreciates really really nice people.
                </p>
            </div>
        </>
    )
}

export default About; 