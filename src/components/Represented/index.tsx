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
            </C.Body>
        </C.Container>
    );
}