import * as C from './style';

import target from './assets/alvo.png';
import vision from './assets/visão.png';
import values from './assets/valores.png';

export const AboutUsTraits = () => {
    return (
        <C.Container>
            <p>
                <img src={target} alt="" className='rotate-effect'/>
                <strong>Missão: </strong>
                Resolver desafios enfrentados pelas representadas por meio
                de atendimento personalizado com excelência e atenção <br/>
                principalmente na intermediação da comunicação entre
                fornecedores e clientes.
            </p>
            <p>
                <img src={vision} alt="" className='rotate-effect'/>
                <strong>&nbsp; Visão: </strong>
                Ser a principal referência no setor de Biotecnologia
                como representante das maiores e mais renomadas empresas <br />
                deste segmento.
            </p>
            <p>
                <img src={values} alt="" className='rotate-effect'/>
                <strong>Valores: </strong>
                Integridade, inovação, transparência, ética, comprometimento,
                responsabilidade, proatividade e principalmente <br /> respeito 
                às normas e às pessoas.
            </p>
        </C.Container>
    );
};

/**
 terei que consertar o problema com o uso de &nbsp, quando for fazer
 a responsividade eu trabalho melhor o uso do css
 */