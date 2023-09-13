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
                de atendimento personalizado com excelência e atenção
                principalmente <br/> na intermediação da comunicação entre
                fornecedores e clientes.
            </p>
            <p>
                <img src={vision} alt="" className='rotate-effect'/>
                <strong>Visão: </strong> &nbsp;
                Ser a principal referência no setor de biotecnologia
                como <br/> representante das maiores e mais renomadas
                <br/> empresas deste segmento.
            </p>
            <p>
                <img src={values} alt="" className='rotate-effect'/>
                <strong>Valores: </strong> &nbsp;
                Integridade, inovação, transparência, ética, comprometimento,
                responsabilidade, proatividade e principalmente respeito às
                <br/> normas e às pessoas.
            </p>
        </C.Container>
    );
};