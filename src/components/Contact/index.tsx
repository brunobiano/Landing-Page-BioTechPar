import * as C from './style';
import React, { useState } from 'react';

import phone from './assets/phone.png';
import email from './assets/mail.png';
import whatsapp from './assets/whatsapp.png';

export const ContactUs = () => {
    const [selectedOption, setSelectedOption] = useState<string>("");
    const [isInputVisible, setInputVisible] = useState<boolean>(false);

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        
        if (selectedValue === '') {
            setInputVisible(false);
        } else {
            setInputVisible(true);
        }
        
        setSelectedOption(selectedValue);

    };
    
    return (
        <C.Container>
            <C.LeftSide>
                <div className='contactNumbers'><h1>Entre em Contato</h1></div>
                <C.OurContacts className='top-left'>
                    <C.Title>
                        <img src={phone} alt="" width={30}/>
                        <img src={whatsapp} alt="" width={30}/>
                        <h4>Telefone</h4>
                    </C.Title>
                    <C.Body>
                        <p className='telephoneP'>(41) 9 9288-1987</p>
                    </C.Body>
                </C.OurContacts>
                <C.OurContacts className='bottom-left'>
                    <C.Title>
                        <img src={email} alt="" width={30}/>
                        <h4>E-mail</h4>
                    </C.Title>
                    <C.Body>
                        <p>evandro@biotechpar.com.br</p>
                    </C.Body>
                </C.OurContacts>
            </C.LeftSide>
            <C.RightSide>
                <C.Inputs>
                    <input type="text" className='left1' placeholder='Nome'/>
                    <input type="text" className='right1' placeholder='Telefone'/>
                    <input type="text" className='left2' placeholder='E-mail'/>
                    <select className='right2' name='empresas' value={selectedOption} onChange={handleOptionChange}>
                        <option value='' selected>Escolha uma opção</option>
                        <option value="opcao1">Universidade</option>
                        <option value="opcao2">Laboratório</option>
                        <option value="opcao3">Hospital</option>
                        <option value="opcao4">Empresa</option>
                        <option value="opcao5">Outro</option>
                    </select>
                    {isInputVisible && (
                        <>
                            <input type="text" className='hiddenInput left3' placeholder='Nome da Instituição'/>
                            <input type="text" className='hiddenInput left4' placeholder='Departamento/ laboratório'/>
                            <input type="text" className='hiddenInput left5' placeholder='Endereço Completo'/>
                        </>
                    )}                    
                    <textarea placeholder='Mensagem'></textarea>
                    <button>Enviar</button>
                </C.Inputs>
            </C.RightSide>
        </C.Container>
    );
} //<input type="text" className='bottom-right' placeholder='Empresa'/>


/*<C.OurContacts className='top-left'>
                    <C.Title>
                        <img src={location} alt="" width={20}/>
                        <h4>Endereço</h4>
                    </C.Title>
                    <C.Body>
                        <p>R. Professor Thomaz Wartelsteiner, 196 - Portão, <br />
                            Curitiba - PR, <br />
                            80330-070
                        </p>
                    </C.Body>
                </C.OurContacts> 
                
                <C.OurContacts className='bottom-right'>
                    <C.Title>
                        <img src={whatsapp} alt="" width={30}/>
                        <h4>Whatsapp</h4>
                    </C.Title>
                    <C.Body>
                        <p>(16) 9 9288-1987</p>
                    </C.Body>
                </C.OurContacts>
                
                
               .top-right {
                grid-column: 2;
                grid-row: 2;
                };
            
            .bottom-right {
            grid-column: 2;
            grid-row: 3;
            };
    
    
    */