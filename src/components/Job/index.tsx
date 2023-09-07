import * as C from './style';

export const Services = () => {
    return(
        <C.Container>
            <C.Title><h1>Serviços</h1></C.Title>
            <C.Body>
                <p>
                Nossos serviços englobam análises de diagnóstico em NGS
                (Sequenciamento de Nova Geração) como :
                </p>
                <ul>
                    <li>Montagem e anotação do bibliotecas genômicas;</li>
                    <li>Metagenômica;</li>
                    <li>Proteômica;</li>
                    <li>Multiômica;</li>
                    <li>Epigenômica;</li>
                    <li>Transcriptoma;</li>
                    <li>Barcoding Ambiental;</li>
                    <li>Serviços customizados com desenvolvimento de ferramentas e painéis;</li>
                    <li>Podemos realizar o trabalho local (em armazenamento local) ou como um modelo SaaS (Software as Service);</li>
                    <li>Também desenvolvemos um software de visualização de variantes
                        exclusivo, o <strong>D-Krypt™</strong>. Com esse software é
                        possível visualizar, <br /> interpretar, relatar variantes de interesse,
                        fazer comparações entre amostras, dentre outras funções;
                    </li>
                    <li>Outro fator importante diz respeito a nossa equipe <strong>que é 100% brasileira</strong>.
                        Fornecemos suporte técnico em tempo integral <br /> para atender às suas
                        necessidades.
                    </li>
                </ul>
            </C.Body>
        </C.Container>
    );
}

// procurar na internet um jeito de listar serviços que fique bonito