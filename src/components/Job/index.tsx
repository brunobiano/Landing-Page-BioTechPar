import { ServiceItem } from './ServiceUl';
import { ServiceSubItem } from './ServiceSubItem';
import { Testing } from './TestingSumary';
import * as C from './style';

import { useState } from 'react';

export const Services = () => {
    const [visibleSubMenu, setVisibleSubMenu] = useState<string | null>(null);
    const [detailedBottom, setDetailedBottom] = useState<string | null>(null);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleShowSubMenu = (submenuId: string) => {
        if (visibleSubMenu === submenuId) {
            // Se o submenu clicado é o mesmo que já está aberto, fecha o submenu
            setVisibleSubMenu(null);
            setDetailedBottom(null);
        } else {
            // Fecha o submenu atualmente aberto (se houver)
            if (visibleSubMenu !== null) {
                setVisibleSubMenu(null);
            }
    
            // Abre o submenu clicado
            setVisibleSubMenu(submenuId);
            setDetailedBottom(null);
        }
    }

    const handleClickSubMenu = (submenuId: string) => {
        if (detailedBottom === submenuId) {
            setDetailedBottom(null);
        } else {
            setDetailedBottom(submenuId);
            setIsExpanded(!isExpanded);
        }
    }

    const menuItems: string[] = [
        'Genômica',
        'Metagenômica',
        'Transcriptômica',
        'Proteômica',
        'Otimização',
        'Cursos'
    ];

    const handleUlScroll = () => {

        if (window.innerWidth > 1024) {
            window.scrollTo({
                top: 2950,
                behavior: 'smooth'
            })
        } else {
            window.scrollTo({
                top: 3300,
                behavior: 'smooth'
            })
        }
    }
    
    return(
        <C.Container>
            <C.Title><h1>Serviços</h1></C.Title>
            <C.Body>
                <C.Ul>
                   {menuItems.map((item, index) => (
                    <ServiceItem /*Menu verde: genomica, metagenomica, etc... */
                        key={index}
                        title={item}
                        visibleSubMenu={visibleSubMenu}
                        detailedBottom={detailedBottom}
                        handleClickSubMenu={handleClickSubMenu}
                        handleShowSubMenu={handleShowSubMenu}
                        handleUlScroll={handleUlScroll}
                    />
                   ))} 
                </C.Ul>
                    <C.SubServicesArea>
                          <ServiceSubItem 
                            visibleSubMenu={visibleSubMenu}
                            detailedBottom={detailedBottom}
                            isExpanded={isExpanded}
                            handleClickSubMenu={handleClickSubMenu}
                            handleShowSubMenu={handleShowSubMenu}
                          />
                    </C.SubServicesArea>
            </C.Body>
        </C.Container>
    );
}

/*
    

    colocar o gif certo para cada item do menu que estiver aberto (provavel jogar a div onde ele está lado a lado com a div SubBottomDetailed)
    quando clicar na caixinha que não está aberta, a aberta fecha e abre a clicada (feito porém precisa de um efeitinho)
    
    Deixar mais bonito
    (olhar CSSTransition)

    gtxProteo mudar imagem (70/30 vai ter que ser alterado pra conseguir ler imagem)
    colocar texto do Rna

    <ServiceSubItem /*sub Menus: dkrypt, onco, etc... 
    visibleSubMenu={visibleSubMenu}
    detailedBottom={detailedBottom}
    isExpanded={isExpanded}
    handleShowSubMenu={handleShowSubMenu}
    handleClickSubMenu={handleClickSubMenu}
    />  
*/