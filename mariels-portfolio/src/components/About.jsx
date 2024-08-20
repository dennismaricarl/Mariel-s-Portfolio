import ArrowText from './ArrowText';

const About = () => {
    return (
        <>
            <div id="aboutId" className="about-section">
            
                    <img className="contour-image" src="/images/countour of self.png" />
           
                    <p className="about-paragraph">
                        <ArrowText text='mariel' imageURL='/images/origami bird.png' /> is a <ArrowText text='growing' imageURL='/images/growing - bigger copy.png' size="300px" /> graphic designer
                        and illustrator who loves being <ArrowText text='home' imageURL='/images/loves home.png' /> with family, reading her bible,
                        nurturing plants, <ArrowText text='swimming' imageURL='/images/loves swimming.png' left="20%" /> with goggles, <ArrowText text='equanimity' imageURL='/images/equilibrium textbox.png' left="28%" />, and
                        appreciates really really nice people.
                    </p>
               
            </div>
        </>
    )
}

export default About; 