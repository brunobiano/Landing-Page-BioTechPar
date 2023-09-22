import { useState } from 'react';
import * as C from './style';

import whatsIcon from '../../assets/icons/whatsapp2.png'

export const ScrollImage = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseOver = () => {
        setIsHovered(true);
    };

    const handleMouseOut = () => {
        setIsHovered(false);
    }
    
    return(
        <C.Container isHovered={isHovered} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <div className='text'>Como podemos te ajudar?</div>
            <a href="https://wa.me/5541992881987" target='_blank' rel='noreferrer'><img src={whatsIcon} alt="" /></a>
        </C.Container>
    );
}