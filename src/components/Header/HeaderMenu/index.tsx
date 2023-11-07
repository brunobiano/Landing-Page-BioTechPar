import * as C from './styles';
import { useState, useEffect, useRef  } from 'react';

import menuOpener from './assets/menu.png'

export const MenuList = () => {    
    const headerHeight = document.querySelector('.Header')?.clientHeight || 0;
    const isInitialNavVisible = window.innerWidth > 1024;
    const [navVisible, setNavVisible] = useState(isInitialNavVisible);
    const navRef = useRef(null);
    
    const handleMenuClick = (event: React.MouseEvent, sectionId: string) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            let scrollToPosition;
    
            if (window.innerWidth > 1024) {
                // Tela maior que 1024px: Scroll para a posição original - 50
                scrollToPosition = section.offsetTop - headerHeight - 50;
            } else if (window.innerWidth >= 761) {
                // Tela entre 761px e 1024px: Scroll para uma posição diferente
                scrollToPosition = section.offsetTop - headerHeight - 150;
            } else {
                // Tela menor que 761px: Scroll para uma posição diferente
                scrollToPosition = section.offsetTop - headerHeight - 150;
            }

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth',
            })
        }

        if (window.innerWidth < 1024) { // qualquer posível bug com o nav eu mexo aqui
            setNavVisible(false)
        }
    }

    const handleToggleNav = () => {
        setNavVisible(!navVisible)
    }

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
        const isTouch = 'touches' in event;
        const target = isTouch ? (event as TouchEvent).touches[0].target : (event as MouseEvent).target;
    
        if (navRef.current && !(navRef.current as HTMLElement).contains(target as Node)) {
          setNavVisible(false);
        }
    }

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 1024) {
            setNavVisible(true); // Controlar o estado até 1024px
          } else if (window.innerWidth < 1024){
            setNavVisible(false); // Desativar o controle acima de 1024px
          }
        };
    
        // Ouvinte de redimensionamento para monitorar a largura da janela
        window.addEventListener('resize', handleResize);

        document.addEventListener('click', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);
    
        // Removendo ouvinte ao desmontar o componente
        return () => {
          window.removeEventListener('resize', handleResize);
          document.removeEventListener('click', handleOutsideClick);
          document.removeEventListener('touchstart', handleOutsideClick);
        };
    }, []);
    
    return (
        <C.Container ref={navRef}>
            <img src={menuOpener} alt="" className='menu-opener' onClick={handleToggleNav}/>
            <nav style={{display: navVisible || window.innerWidth > 1024? 'block' : 'none'}}>
                <C.Ul>
                    <li className='line'><a href='#home' onClick={(e) => handleMenuClick(e, 'home')}><b>HOME</b></a></li>
                    <li className='line'><a href='#ourMission' onClick={(e) => handleMenuClick(e, 'ourMission')}><b>SOBRE NÓS</b></a></li>
                    <li className='line'><a href='#team' onClick={(e) => handleMenuClick(e, 'team')}><b>EQUIPE</b></a></li>
                    <li className='line'><a href='#about' onClick={(e) => handleMenuClick(e, 'about')}><b>EMPRESAS REPRESENTADAS</b></a></li>
                    <li className='line'><a href='#job' onClick={(e) => handleMenuClick(e, 'job')}><b>SERVIÇOS</b></a></li>
                    <li className='line'><a href='#contact' onClick={(e) => handleMenuClick(e, 'contact')}><b>CONTATO</b></a></li>
                </C.Ul>
            </nav>
        </C.Container>
    )
};

/*tente diminuuir a altura em modo de celular e teste os botoes*/