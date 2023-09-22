import * as C from './style';
import React, { useState } from 'react';
import InputMask from 'react-input-mask';

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
                        <img src={phone} alt="" />
                        <img src={whatsapp} alt="" />
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
                <C.Inputs action='https://getform.io/f/0feabbb6-4da3-428d-87ba-9a5b0be046d9' method='POST'>
                    <input type="text" name='Nome' className='left1' placeholder='Nome' required/>
                    <InputMask mask="(99) 99999 9999" type="tel" name='Telefone' className='right1' placeholder='Telefone' required/>
                    <input type="email" name='Email' className='left2' placeholder='E-mail'/>
                    <select className='right2' name='Empresa' value={selectedOption} onChange={handleOptionChange}>
                        <option value='' selected>Escolha uma opção</option>
                        <option value="Universidade">Universidade</option>
                        <option value="Laboratório">Laboratório</option>
                        <option value="Hospital">Hospital</option>
                        <option value="Empresa">Empresa</option>
                        <option value="Outro">Outro</option>
                    </select>
                    {isInputVisible && (
                        <>
                            <input type="text" className='hiddenInput left3' name='Instituição' placeholder='Nome da Instituição' required/>
                            <input type="text" className='hiddenInput left4' name='Departamento' placeholder='Departamento/ laboratório'/>
                            <input type="text" className='hiddenInput left5' name='Endereço' placeholder='Endereço Completo'/>
                        </>
                    )}                    
                    <textarea name="Mensagem" placeholder='Mensagem' minLength={2}></textarea>
                    <button type='submit'>Enviar</button>
                </C.Inputs>
            </C.RightSide>
        </C.Container>
    );
};