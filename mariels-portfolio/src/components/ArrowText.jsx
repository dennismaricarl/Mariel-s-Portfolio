import { useState } from "react";
const ArrowText = ({ text, imageURL, size, left}) => {

    const [isHovered, setIsHovered] = useState(false)

    return (
        <span
            style={{ position: 'relative', display: 'inline-block' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src='/images/triangle 8_ opacity (mariel).png' className='arrow-dropdown'
            />
            {text}
            {isHovered && imageURL && 
                <img
                    src={imageURL}
                    className="imageURL"
                    style={{width: size}}
                />
            
            }
        </span>
    );
};

export default ArrowText;
