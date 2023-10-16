import * as C from './style';

import { useState } from 'react';

export const Services = () => {
    const [visibleSubMenu, setVisibleSubMenu] = useState<string | null>(null);
    const [visibleRightSubMenu, setVisibleRightSubMenu] = useState<string | null>(null);

    const handleShowSubMenu = (submenuId: string) => {
        if (visibleSubMenu === submenuId) {
            // Se o submenu clicado é o mesmo que já está aberto, fecha o submenu
            setVisibleSubMenu(null);
            setVisibleRightSubMenu(null);
        } else {
            // Fecha o submenu atualmente aberto (se houver)
            if (visibleSubMenu !== null) {
                setVisibleSubMenu(null);
            }
    
            // Abre o submenu clicado
            setVisibleSubMenu(submenuId);
            setVisibleRightSubMenu(null);
        }
    }

    const handleClickSubMenu = (submenuId: string) => {
        setVisibleRightSubMenu(submenuId)
    }

    const menuItems = [
        'Genômica',
        'Metagenômica',
        'Transcriptômica',
        'Proteômica',
        'Otimização',
        'Cursos'
    ];
    
    return(
        <C.Container>
            <C.Title><h1>Serviços</h1></C.Title>
            <C.Body>
                <C.Ul>
                   {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={visibleSubMenu === item ? 'line active' : 'line'}
                        onClick={() => handleShowSubMenu(item)}
                    >{item}</li>
                   ))} 
                </C.Ul>
                <C.subContainer>
                    <C.SubMenuLeft>
                        {visibleSubMenu === 'Genômica' && (
                            <ul className='submenu'>
                                <li>Sequenciamento de exoma completo, exoma clínico, painéis oncológicos, hotspots</li>
                                <li className={visibleRightSubMenu === 'dkrypt' ? 'subLine line active' : 'subline line'} onClick={() => handleClickSubMenu('dkrypt')}><strong>D-Krypt™</strong></li>
                                <li className='subLine' onClick={() => handleClickSubMenu('onco')}><strong>GTx-Onco$™</strong></li>
                            </ul>
                        )}

                        {visibleSubMenu  === 'Metagenômica' && (
                            <ul className='submenu'>
                                <li className='subLine' onClick={() => handleClickSubMenu('gtxMeta')}><strong>GTx-Meta</strong></li>
                            </ul>
                        )}

                        {visibleSubMenu === 'Transcriptômica' && (
                            <ul className='submenu'>
                                <li>Sequenciamento de RNA</li>
                                <li className='subLine' onClick={() => handleClickSubMenu('gtxRna')}><strong>GTx-RNA</strong></li>
                            </ul>
                        )}

                        {visibleSubMenu === 'Proteômica' && (
                            <ul className='submenu'>
                                <li className='subLine' onClick={() => handleClickSubMenu('gtxProteo')}><strong>GTx-Proteo</strong></li>
                            </ul>
                        )}

                        {visibleSubMenu === 'Otimização' && (
                            <ul className='submenu'>
                                <li className='subLine' onClick={() => handleClickSubMenu('gtxPipeline')}><strong>GTx-Pipeline</strong></li>
                            </ul>
                        )}

                        {visibleSubMenu === 'Cursos' && (
                            <ul className='submenu cursoMenu'>
                                <li>Introdução à bioinformática</li>
                                <li>Demais tópicos relacionados à bioinformática</li>
                            </ul>
                        )}
                    </C.SubMenuLeft>
                    <C.SubMenuRight>
                        {visibleRightSubMenu === 'dkrypt' && (
                            <ul>
                                <li>Montagem de genomas</li>
                                <li>Chamada de variantes</li>
                                <li>Visualização de mutações SNV, CNV, Indels</li>
                                <li>Análise de impacto, patogenicidade, associação à drogas</li>
                            </ul> 
                        )}

                        {visibleRightSubMenu === 'onco' && (
                            <ul>
                                <li>Relatório para interpretação de dados genômicos do câncer</li>
                                <li>Tabela de recomendações</li>
                                <ul className='subBranch'>
                                    <li>aprovadas pelo FDA</li>
                                    <li>sugeridas pela literatura </li>
                                </ul>
                            </ul>
                        )}

                        {visibleRightSubMenu === 'gtxMeta' && (
                            <ul>
                                <li>Sequenciamento metagenômico 16S ou Shotgun</li>
                                <li>Relatório de composição taxonômica em diversos níveis</li>
                                <li>Análise funcional do perfil obtido</li>
                                <li>Comparação com amostras públicas</li>
                                <li>Análises específicas:</li>
                                <ul className='subBranch'>
                                    <li><strong>GTx-Soil</strong> - para metagenômica de solo</li>
                                    <li><strong>GTx-Water</strong> - para metagenômica de água</li>
                                </ul>
                            </ul>
                        )}

                        {visibleRightSubMenu === 'gtxRna' && (
                            <ul>
                                <li>Análises de expressão gênica e splicing alternatio</li>
                                <li>Comparação entre amostras em um desenho experimental</li>
                            </ul>
                        )}

                        {visibleRightSubMenu === 'gtxProteo' && (
                            <ul>
                                <li>Integração de dados genômicos, transcriptômicos e proteômicos</li>
                                <li>Análise de dados de espectrometria de massas</li>
                                <li>Busca de peptídeos em bancos de dados customizados</li>
                            </ul>
                        )}

                        {visibleRightSubMenu === 'gtxPipeline' && (
                            <ul>
                                <li>Desenvolvimento e otimização de <strong>softwares</strong> de bioinformática desenvolvidos pela sua empresa</li>
                            </ul>
                        )}   
                    </C.SubMenuRight>
                </C.subContainer>    
            </C.Body>
        </C.Container>
    );
}

/*
    <li className='line active' onClick={() => handleShowSubMenu('genômica')}>Genômica</li>
    <li className='line' onClick={() => handleShowSubMenu('metagenômica')}>Metagenômica</li>
    <li className='line' onClick={() => handleShowSubMenu('transcriptômica')}>Transcriptômica</li>
    <li className='line' onClick={() => handleShowSubMenu('proteômica')}>Proteômica</li>
    <li className='line' onClick={() => handleShowSubMenu('otimização')}>Otimização de protocolos computacionais</li>
    <li className='line' onClick={() => handleShowSubMenu('cursos')}>Cursos</li>

    
    Deixar mais bonito o subMenuLeft e Right
    (olhar CSSTransition)
    tentar otimizar o código no submenu left e right


*/