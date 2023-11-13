import * as C from './styles';
import { useState, useEffect, useRef  } from 'react';

import menuOpener from './assets/menu.png'

export const MenuList = () => {    
    const headerHeight = 0;
    const isInitialNavVisible = window.innerWidth > 1024;
    const [navVisible, setNavVisible] = useState(isInitialNavVisible);
    const navRef = useRef(null);
    
    const handleMenuClick = (event: React.MouseEvent, sectionId: string) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            let scrollToPosition;
            let scrollAdjustment = 0;

            if (window.innerWidth >= 2559) { // se aumento vai pra baixo
                scrollAdjustment = 250;
            } else if (window.innerWidth >= 1440 && window.innerWidth < 2569) {
                scrollAdjustment = 150;
            } else if (window.innerWidth >= 1366 && window.innerWidth < 1440) {
                scrollAdjustment = 150;
            } else if (window.innerWidth >= 761 && window.innerWidth < 1366) {
                scrollAdjustment = 150;
            } else {
                scrollAdjustment = 200;
            }

            scrollToPosition = section.offsetTop - headerHeight - scrollAdjustment;

            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth',
            })
        }

        if (window.innerWidth < 1024) {
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
            setNavVisible(true);
          } else if (window.innerWidth < 1024){
            setNavVisible(false);
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
            <img src={menuOpener} alt="Botão abrir/fechar menu" className='menu-opener' onClick={handleToggleNav}/>
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