import { useNavigate } from "react-router-dom";



const BackToHome = () => {
    const navigate = useNavigate()

    return (

        <div className="w-16 h-16 rounded-full bg-black hover:scale-105"
            onClick={() => navigate('/') || window.scroll(0, 0)}>

        </div>
    )
}

export default BackToHome;