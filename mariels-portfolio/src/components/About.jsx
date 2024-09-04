import ArrowText from './ArrowText';

const About = () => {
    return (
        <>
            <div id="aboutId" className="flex gap-[3rem] pt-[10rem]">
                <img
                    className="flex-shrink-0 w-full max-w-[200px] sm:max-w-[250px] md:max-w-[350px] lg:max-w-[450px] object-cover"
                    src="/images/countour of self.png"
                    alt="Contour of Self"
                />

                <p className="font-helvetica font-thin text-[1.25rem] sm:text-[1.4rem] md:text-[1.75rem] lg:text-[2rem] leading-relaxed">
                    <ArrowText
                        text='mariel'
                        imageURL='/images/origami bird.png'


                    /> is
                    a <ArrowText
                        text='growing'
                        imageURL='/images/growing - bigger copy.png'

                    /> graphic designer
                    and illustrator who loves being <ArrowText
                        text='home'
                        imageURL='/images/loves home.png'


                    /> with family,
                    reading her bible, nurturing plants, <ArrowText
                        text='swimming'
                        imageURL='/images/loves swimming.png'

                    /> with goggles,
                    <ArrowText
                        text='equanimity'
                        imageURL='/images/equilibrium textbox.png'

                    />, and appreciates really really nice people.
                </p>
            </div>
        </>
    )
}

export default About;
