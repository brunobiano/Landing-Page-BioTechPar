import * as C from './style';
import { useState } from 'react';
import bioLogo from '../../assets/1.png'

export const Enterprises = () => {
    const [isRound, setIsRound] = useState(true);

    const toggleShape = () => {
        setIsRound(!isRound);
    }
    
    return(
        <C.Container>
            <C.Enterprises isRound={isRound} onMouseEnter={toggleShape} onMouseLeave={toggleShape}>
                <img src={bioLogo} alt="" placeholder='Imagem ilustrativa' width={125}/>
                <C.Text isRound={isRound}>
                <h4>Jéssica Pinheiro</h4>
                <p>Diretora de Marketing Hubble</p>
                <h6>16 de setembro</h6>
                </C.Text>
            </C.Enterprises>

            <C.Enterprises isRound={isRound} onMouseEnter={toggleShape} onMouseLeave={toggleShape}>
                <img src={bioLogo} alt="" placeholder='Imagem ilustrativa' width={125}/>
                <C.Text isRound={isRound}>
                <h4>Nicolas Pereira</h4>
                <p>Diretor de arte estudio algo</p>
                <h6>17 de setembro</h6>
                </C.Text>
            </C.Enterprises>

            <C.Enterprises isRound={isRound} onMouseEnter={toggleShape} onMouseLeave={toggleShape}>
                <img src={bioLogo} alt="" placeholder='Imagem ilustrativa' width={125}/>
                <C.Text isRound={isRound}>
                <h4>Carla Souza</h4>
                <p>CEO empresa online</p>
                <h6>30 de setembro</h6>
                </C.Text>
            </C.Enterprises>
        </C.Container>
    );
};


// Preciso fazer o efeito de transição das imagens ser em uma de cada vez, olhar chatGPT que fiz