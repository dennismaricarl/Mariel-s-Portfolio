import { useState } from "react";

const ArrowText = ({ text, imageURL }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img 
                src='/images/triangle 8_ opacity (mariel).png' 
                className="absolute left-1/2 -translate-x-1/2"
                alt="Arrow Icon" 
            />
            {text}


            {isHovered && imageURL && 
            
                <img
                    src={imageURL}
                    className="absolute bottom-14 left-1/2 -translate-x-1/2 flex-shrink-0"
                    alt="Hovered Image"
                />
            }
        </div>
    );
};

export default ArrowText;
