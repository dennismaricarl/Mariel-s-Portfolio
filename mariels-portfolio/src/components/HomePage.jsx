import NavBar from "./NavBar";


const HomePage = () => {
    return (
        <div>
            <NavBar isHomePage={true} />

            <div className="footer">
                <img src="/images/mariel.png" />
                <img src="/images/trujillo.png" />
            </div>
        </div>

    )
}

export default HomePage;