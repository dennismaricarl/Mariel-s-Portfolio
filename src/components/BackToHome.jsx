import { useNavigate } from "react-router-dom";


const BackToHome = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
        window.scrollTo(0,0)
    }

    return (

        <div className="cursor-pointer w-16 h-16 rounded-full bg-black hover:scale-105"
            onClick={handleClick}>

        </div>
    )
}

export default BackToHome;