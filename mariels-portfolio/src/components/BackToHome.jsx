import { useNavigate } from "react-router-dom";



const BackToHome = () => {
    const navigate = useNavigate()

    return(

        <div className="backToHome" onClick={() => navigate('/') || window.scroll(0,0)}
        style={{ 
            width: '80px',
            height: '80px',
            backgroundColor: 'black',
            borderRadius: '50%',
           }}>
        </div>
    )
}

export default BackToHome;