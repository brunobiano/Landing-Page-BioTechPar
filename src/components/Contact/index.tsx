import * as C from './style';

import location from './assets/map.png';
import phone from './assets/phone.png';
import email from './assets/mail.png';
import whatsapp from './assets/whatsapp.png';

export const ContactUs = () => {
    return (
        <C.Container>
            <C.LeftSide>
                <div className='teste'><h1>Entre em Contato</h1></div>
                <C.OurContacts className='top-left'>
                    <C.Title>
                        <img src={location} alt="" width={20}/>
                        <h4>Nosso Endereço</h4>
                    </C.Title>
                    <C.Body>
                        <p>R. Alfeu Tavares, 212 - Rudge Ramos, <br />
                            São Bernardo do Campo - SP, <br />
                            09641-000
                        </p>
                    </C.Body>
                </C.OurContacts>
                <C.OurContacts className='top-right'>
                    <C.Title>
                        <img src={phone} alt="" width={30}/>
                        <h4>Nosso Telefone</h4>
                    </C.Title>
                    <C.Body>
                        <p>(16) 9 9288 1987</p>
                    </C.Body>
                </C.OurContacts>
                <C.OurContacts className='bottom-left'>
                    <C.Title>
                        <img src={email} alt="" width={30}/>
                        <h4>Nosso E-mail</h4>
                    </C.Title>
                    <C.Body>
                        <p>evandro@biotechpar.com.br</p>
                    </C.Body>
                </C.OurContacts>
                <C.OurContacts className='bottom-right'>
                    <C.Title>
                        <img src={whatsapp} alt="" width={30}/>
                        <h4>Nosso Whatsapp</h4>
                    </C.Title>
                    <C.Body>
                        <p>(16) 9 9288 1987</p>
                    </C.Body>
                </C.OurContacts>
            </C.LeftSide>
            <C.RightSide>
                <C.Inputs>
                    <input type="text" className='top-left' placeholder='Nome'/>
                    <input type="text" className='top-right' placeholder='TeleFone'/>
                    <input type="text" className='bottom-left' placeholder='E-mail'/>
                    <select className='bottom-right' name='empresas'>
                        <option value='' disabled selected>Escolha uma opção</option>
                        <option value="opcao1">Universidade</option>
                        <option value="opcao2">Laboratório Particular</option>
                        <option value="opcao3">Hospital</option>
                        <option value="opcao4">Empresa</option>
                        <option value="opcao5">Outro</option>
                    </select>
                    <textarea placeholder='Assunto'></textarea>
                    <button>Enviar</button>
                </C.Inputs>
            </C.RightSide>
        </C.Container>
    );
} //<input type="text" className='bottom-right' placeholder='Empresa'/>