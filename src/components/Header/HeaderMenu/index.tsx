import * as C from './styles';

export const MenuList = () => {    
    return (
        <C.Container>
            <nav>
                <C.Ul>
                    <li className='line'><a href='#'><b>HOME</b></a></li>
                    <li className='line'><a href='#ourMission'><b>SOBRE NÓS</b></a></li>
                    <li className='line'><a href='#team'><b>EQUIPE</b></a></li>
                    <li className='line'><a href='#about'><b>EMPRESAS REPRESENTADAS</b></a></li>
                    <li className='line'><a href='#job'><b>SERVIÇOS</b></a></li>
                    <li className='line'><a href='#contact'><b>CONTATO</b></a></li>
                </C.Ul>
            </nav>
        </C.Container>
    )
};