import * as C from './style';

import whatsIcon from '../../../assets/icons/Pictogrammers-Material-Whatsapp.512.png';
import whatsIcon2 from '../../../assets/icons/whatsapp2.png';
import phoneIcon from '../../../assets/icons/phone.png';
import mailIcon from '../../../assets/icons/mail.png';
import linkedinIcon from '../../../assets/icons/lk2.png';

export const TopMenu = () => {
    return (
        <C.Container>
            <C.LinkMenu>
            <a className='phoneHidden' href="https://wa.me/5541992881987" target='_blank' rel='noreferrer'><img src={whatsIcon} alt="" width='12px'/>+55 (41) 99288-1987</a>
            <a href="mailto:evandro@biotechpar.com.br"><img src={mailIcon} alt="" width='12px' className='mailIcon'/>evandro@biotechpar.com.br</a>
            <a className='phonePos' href="https://wa.me/5541992881987"><img src={whatsIcon2} alt="" width='24px'/></a>
            <a href="https://www.linkedin.com/company/biotechpar-representa%C3%A7%C3%A3o-e-consultoria/about/" target='_blank' rel='noreferrer'><img src={linkedinIcon} alt="" width='24px'/></a>
            </C.LinkMenu>
        </C.Container>
    );
}

/*testando sem o tel 

            <a style={{backgroundColor: 'red'}} className='phoneHidden' href="https://wa.me/5541992881987" target='_blank' rel='noreferrer'><img src={phoneIcon} alt="" width='12px'/>+55 (41) 99288-1987</a>*/