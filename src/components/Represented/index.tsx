import * as C from './style';

import Dna from './assets/dnaGtx.png'

export const RepEnterprises = () => {
    return(
        <C.Container>
            <C.Title>
                <h1>Empresas Representadas</h1>
            </C.Title>
            <C.Body>
                <img src={Dna} alt="" />
                <p>
                    A DNA GTx Bioinformatics é uma empresa de bioinformática
                    e biotecnologia que fornece soluções inovadoras e 
                    personalizadas para desafios biológicos, em todos os
                    organismos. Sua visão está centrada na abordagem de
                    questões-chave nas esferas da saúde, agricultura e 
                    ambiente e a missão é melhorar a qualidade de vida e 
                    promover o desenvolvimento sustentável.
                    Com uma abordagem humanizada, a empresa aproveita as 
                    capacidades da genômica e da bioinformática e desenvolve 
                    um portfólio projetado para atender às necessidades 
                    dos clientes englobando os seguintes serviços:
                </p>
            </C.Body>
        </C.Container>
    );
}