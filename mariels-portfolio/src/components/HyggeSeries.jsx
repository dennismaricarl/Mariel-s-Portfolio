import { useNavigate } from "react-router-dom";
import BackToHome from "./BackToHome";

const HyggeSeries = () => {
    
    const navigate = useNavigate();

    return (
        <>
        <BackToHome/>
        <h1>hygge seriessss </h1>

        <img className="nextProject" onClick={()=> navigate('/')} style={{position:'absolute', right:'0', padding:'5rem'}} src="/images/coffee shops/10 next.png"/>
        </>
    )

}

export default HyggeSeries;