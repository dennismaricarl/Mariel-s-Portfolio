import { useNavigate } from "react-router-dom";


const BackToHome = () => {
    const navigate = useNavigate()

    return(

        <div className="backToHome" onClick={() => navigate('/')}style={{ 
            width: '80px',
            height: '80px',
            backgroundColor: 'black',
            borderRadius: '50%',
            margin: '4rem 5rem'}}>
        </div>

    
      
    )
}

export default BackToHome;