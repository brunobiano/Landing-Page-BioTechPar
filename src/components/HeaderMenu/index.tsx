import * as C from './styles';

export const MenuList = () => {
    return (
        <C.Container>
            <nav>
                <C.Ul>
                    <li><a href=''>Home</a></li>
                    <li><a href=''>Equipe</a></li>
                    <li><a href=''>Empresas Representadas</a></li>
                    <li><a href=''>Serviços</a></li>
                    <li><a href=''>Contato</a></li>
                </C.Ul>
            </nav>
        </C.Container>
    )
};