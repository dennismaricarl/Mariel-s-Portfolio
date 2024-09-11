import ArrowText from './ArrowText';

const About = () => {
    return (
        <>
            <div id="aboutId" className="flex flex-col pt-12 pl-10 pr-10 items-center justify-center gap-10 lg:flex-row lg:pl-40 lg:pr-40">
                <img
                    className="w-[20rem] h-[20rem] lg:w-[40rem] lg:h-[40rem]"
                    src="/images/countour of self.png"
                    alt="Contour of Self"
                />

                <p className="font-helvetica font-thin text-lg ml-10 mr-10 pt-8 lg:text-4xl lg:leading-loose">
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
    );
}

export default About;
