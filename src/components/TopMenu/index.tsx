import * as C from './style';

import whatsIcon from '../../assets/icons/Pictogrammers-Material-Whatsapp.512.png';
import whatsIcon2 from '../../assets/icons/whatsapp2.png';
import phoneIcon from '../../assets/icons/phone.png';
import mailIcon from '../../assets/icons/mail.png';
import linkedinIcon from '../../assets/icons/lk.png';

export const TopMenu = () => {
    return (
        <C.Container>
            <C.LinkMenu>
            <a href="https://wa.me/5516992914326" target='_blank'><img src={whatsIcon} alt="" width='12px'/>+55 (16) 99291-4326</a>
            <a href=""><img src={phoneIcon} alt="" width='12px'/>+55 (16) 99291-4326</a>
            <a href=""><img src={mailIcon} alt="" width='12px'/>brunobiano@hotmail.com</a>
            <a href=""><img src={whatsIcon2} alt="" width='12px'/></a>
            <a href="https://www.linkedin.com/company/biotechpar-representa%C3%A7%C3%A3o-e-consultoria/about/" target='_blank'><img src={linkedinIcon} alt="" width='12px'/></a>
            </C.LinkMenu>
        </C.Container>
    );
}