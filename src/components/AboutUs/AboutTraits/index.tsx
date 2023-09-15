import * as C from './style';

import target from './assets/alvo.png';
import vision from './assets/visão.png';
import values from './assets/valores.png';

export const AboutUsTraits = () => {
    return (
        <C.Container>
            <p>
                <img src={target} alt="" className='rotate-effect'/>
                <strong>Missão: </strong> &nbsp;
                Resolver desafios enfrentados pelas representadas por meio
                de atendimento personalizado com excelência e atenção <br/> &nbsp;
                principalmente na intermediação da comunicação entre
                fornecedores e clientes.
            </p>
            <p>
                <img src={vision} alt="" className='rotate-effect'/>
                <strong>&nbsp; &nbsp; Visão: </strong> &nbsp; &nbsp;
                Ser a principal referência no setor de biotecnologia
                como representante das maiores e mais renomadas empresas <br /> &nbsp; &nbsp;
                deste segmento.
            </p>
            <p>
                <img src={values} alt="" className='rotate-effect'/>
                <strong>Valores: </strong> &nbsp;
                Integridade, inovação, transparência, ética, comprometimento,
                responsabilidade, proatividade e principalmente respeito <br/> &nbsp;
                às normas e às pessoas.
            </p>
        </C.Container>
    );
};

/**
 terei que consertar o problema com o uso de &nbsp, quando for fazer
 a responsividade eu trabalho melhor o uso do css
 */