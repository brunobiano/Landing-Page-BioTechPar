import * as C from './style';

import picture from './assets/pic.jpg';

export const AboutUs = () => {
    return (
        <C.Container>
            <h3><img src={picture} alt="" width={25}/>&nbsp; Quem Somos</h3>
            <p>
                A BioTechPar é uma empresa de representação comercial atuante na área de biotecnologia fundada em 2023 por Evandro Silva,
                biólogo com especialização em Gestão de Negócios e mais de uma década de experiência em vendas consultivas de equipamentos e 
                insumos para pesquisa e diagnóstico. Com técnica voltada para visitas comerciais estratégicas, apresentações teóricas e práticas,
                além de treinamentos de produtos direcionados ao segmento de pesquisa em ciências da vida, clínicas e indústria farmacêutica,
                desenvolveu inúmeras oportunidades junto a universidades, hospitais e laboratórios.
            </p>
        </C.Container>
    );
}