import * as C from './style';

import Duax from './assets/Duax.jpg'

export const RepEnterprises = () => {
    return(
        <C.Container>
            <C.Title>
                <h1>Empresas Representadas</h1>
            </C.Title>
            <C.Body>
                <img src={Duax} alt="" />
                <p>
                Empresa altamente qualificada e especializada em serviços de NGS (Sequenciamento de Nova Geração), seguido pela parte de bioinformática incluindo análises genômicas e softwares de análise personalizadas para dados biológicos, incluindo as áreas de saúde, agricultura e meio ambiente.
                </p>
            </C.Body>
        </C.Container>
    );
}