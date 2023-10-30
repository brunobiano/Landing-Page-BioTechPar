import * as C from './style';

import director from './assets/img.jpg';
import associate from './assets/img2.jpg';
import linkedin from '../../assets/icons/lk2.png'

export const TeamMembers = () => {
    return(
        <C.Container>
            <C.Title>
                <h1>Equipe</h1>
            </C.Title>
            <C.Members>
                <C.Member>
                    <img src={director} alt="" className='teamPhoto'/>
                    <h4>Evandro Silva</h4>
                    <p>Fundador e Diretor Comercial <br/><br /></p>
                    <a href="https://www.linkedin.com/in/evandrodasilva/" target='_blank' rel='noreferrer'><img className='phoneImg' src={linkedin} alt="" width='50px'/></a>
                </C.Member>

                <C.Member>
                    <img src={associate} alt="" className='teamPhoto' />
                    <h4>Karoline Milani</h4>
                    <p>Sócia e Diretora Administrativa, Financeira e Jurídica</p><br />
                </C.Member>
            </C.Members>
        </C.Container>
    )
}

// retirado (possivel recolocação)
// <a href="https://www.linkedin.com/company/biotechpar-representa%C3%A7%C3%A3o-e-consultoria/about/" target='_blank'><img src={linkedin} alt="" width='50px' className='teste'/></a>

