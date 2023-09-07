import * as C from './style';

import director from './assets/director.jpg';
import associate from './assets/associate.jpg';
import linkedin from '../../assets/icons/lk.png'

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
                    <p>Fundador e CEO responsável pela Diretoria <br/> Executiva e Comercial</p>
                    <a href="https://www.linkedin.com/in/evandrodasilva/" target='_blank'><img src={linkedin} alt="" width='50px'/></a>
                </C.Member>

                <C.Member>
                    <img src={associate} alt="" className='teamPhoto'/>
                    <h4>Karoline Milani</h4>
                    <p>Sócia e Diretora Administrativa, Financeira e Jurídica</p><br />
                    <a href="https://www.linkedin.com/company/biotechpar-representa%C3%A7%C3%A3o-e-consultoria/about/" target='_blank'><img src={linkedin} alt="" width='50px' className='teste'/></a>
                </C.Member>
            </C.Members>
        </C.Container>
    )
}

