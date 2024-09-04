import { useState } from "react";

const ArrowText = ({ text, imageURL }) => {
    const [isHovered, setIsHovered] = useState(false);

    const arrowDropdown = "absolute left-1/2 -translate-x-1/2";
    const imageClass = "absolute bottom-14 left-1/2 -translate-x-1/2 flex-shrink-0";

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src='/images/triangle 8_ opacity (mariel).png' 
                className={arrowDropdown} 
                alt="Arrow Icon" 
            />
            {text}


            {isHovered && imageURL && 
            
                <img
                    src={imageURL}
                    className={`${imageClass} `}
                    alt="Hovered Image"
                />
            }
        </div>
    );
};

export default ArrowText;
