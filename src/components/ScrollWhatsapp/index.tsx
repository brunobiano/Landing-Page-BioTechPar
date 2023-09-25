import * as C from './style';

import whatsIcon from '../../assets/icons/whatsapp2.png'

export const ScrollImage = () => {    
    return(
        <C.Container>
            <a href="https://wa.me/5541992881987" target='_blank' rel='noreferrer'><img src={whatsIcon} alt="" /></a>
        </C.Container>
    );
}