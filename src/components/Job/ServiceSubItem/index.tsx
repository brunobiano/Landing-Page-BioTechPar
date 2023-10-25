import * as C from './style';
import { useEffect, useState } from 'react';

import genomicaGif from './assets/GENÔMICA - GIF.gif'
import dkrypt from './assets/D-KRYPT - 1.png';
import onco from './assets/GTX ONCO .png';
import ngs from './assets/SEQUENCIAMENTO DE NOVA GERAÇÃO (NGS).png';

import metaGif from './assets/METAGENOMICA - GIF.gif';
import meta from './assets/METAGENOMICA - 1 .png';

import rnaGif from './assets/TRANSCRIPTOMICA - GIF.gif';
import seqRna from './assets/SEQUENCIAMENTO DE RNA.png';
import rna from './assets/GTX-RNA.png';

import proteoGif from './assets/PROTEÔMICA - GIF.gif';
import proteo from './assets/GTX-PROTEO.png';

import pipelineGif from './assets/OTIMIZAÇÃO - GIF.gif';
import pipeline from './assets/GTX-PIPELINE.png';

import cursosGif from './assets/CURSOS - GIF.gif';
import cursos from './assets/CURSOS.png';

type Props = {
    visibleSubMenu: string | null,
    detailedBottom: string | null,
    isExpanded: boolean,
    handleShowSubMenu: (submenuId: string) => void,
    handleClickSubMenu: (submenuId: string) => void
}

export const ServiceSubItem = ({ visibleSubMenu, detailedBottom, isExpanded, handleShowSubMenu, handleClickSubMenu }: Props) => {
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
        ngs: false,
        dkrypt: false,
        onco: false,
        gtxMeta: false,
        sequenciamento: false,
        gtxRna: false,
        gtxProteo: false,
        gtxPipeline: false,
        cursos: false,
    });

    const handleExpandItem = (itemName: string) => {
        // Crie uma cópia do objeto de estado atual
        const newExpandedItems = { ...expandedItems };

        // Verifique se o item atual já está expandido
        if (newExpandedItems[itemName]) {
            // Se estiver expandido, recolha-o
            newExpandedItems[itemName] = false;
        } else {
            // Caso contrário, expanda o novo item e recolha todos os outros
            for (const key in newExpandedItems) {
                if (key !== itemName) {
                    newExpandedItems[key] = false;
                }
            }
            newExpandedItems[itemName] = true;
        }

        // Atualize o estado
        setExpandedItems(newExpandedItems);
    };

    useEffect(() => {
        setExpandedItems({
            ngs: false,
            dkrypt: false,
            onco: false,
            gtxMeta: false,
            sequenciamento: false,
            gtxRna: false,
            gtxProteo: false,
            gtxPipeline: false,
            cursos: false
        });
    }, [visibleSubMenu]);

    return (
        <C.subContainer>
            <C.SubBottom>
                {visibleSubMenu === 'Genômica' && (
                    <C.ServicesContainer>
                        <C.GifArea>
                            <h2>Genômica</h2>
                            <img src={genomicaGif} alt='' />
                        </C.GifArea>
                        <ul className='submenu'>
                            <li className={detailedBottom === 'ngs' ? 'subLine active' : 'subLine'}
                                onClick={() => {
                                    handleClickSubMenu('ngs')
                                    handleExpandItem('ngs')
                                }}>
                                NGS (Sequenciamento de Nova Geração) {expandedItems['ngs'] ? <span>—</span> : <span>⬇</span>}</li>
                            {expandedItems['ngs'] && detailedBottom === 'ngs' && (
                                <C.SubBottomDetailed>
                                    <div className={detailedBottom === 'ngs' ? 'before-effect smoothExpansion' : 'before-effect'}>
                                        <C.ImageContainer>
                                            <img src={ngs} alt="" />
                                        </C.ImageContainer>
                                        <ul>
                                            <li>➡ Sequenciamento de exoma completo</li>
                                            <li>➡ Exoma clínico</li>
                                            <li>➡ Painéis oncológicos</li>
                                            <li>➡ Hotspots</li>
                                        </ul>
                                    </div>
                                </C.SubBottomDetailed>
                            )}
                            <li className={detailedBottom === 'dkrypt' ? 'subLine active' : 'subLine'}
                                onClick={() => {
                                    handleClickSubMenu('dkrypt')
                                    handleExpandItem('dkrypt')
                                }}>
                                D-Krypt™ {expandedItems['dkrypt'] ? <span>—</span> : <span>⬇</span>}</li>
                            {expandedItems['dkrypt'] && detailedBottom === 'dkrypt' && (
                                <C.SubBottomDetailed>
                                    <C.ImageContainer>
                                        <img src={dkrypt} alt="" />
                                    </C.ImageContainer>
                                    <ul>
                                        <li>➡ Montagem de genomas</li>
                                        <li>➡ Chamada de variantes</li>
                                        <li>➡ Visualização de mutações SNV, CNV, Indels</li>
                                        <li>➡ Análise de impacto, patogenicidade, associação à drogas</li>
                                    </ul>
                                </C.SubBottomDetailed>
                            )}
                            <li className={detailedBottom === 'onco' ? 'subLine active' : 'subLine'}
                                onClick={() => {
                                    handleClickSubMenu('onco')
                                    handleExpandItem('onco')
                                }}>
                                GTx-Onco™ {expandedItems['onco'] ? <span>—</span> : <span>⬇</span>}</li>
                            {detailedBottom === 'onco' && (
                                <C.SubBottomDetailed>
                                    <C.ImageContainer>
                                        <img src={onco} alt="" />
                                    </C.ImageContainer>
                                    <ul>
                                        <li>➡ Relatório para interpretação de dados genômicos do câncer</li>
                                        <li>➡ Tabela de recomendações: </li>
                                        <ul className='subBranch'>
                                            <li>◼ aprovadas pelo FDA</li>
                                            <li>◼ sugeridas pela literatura </li>
                                        </ul>
                                    </ul>
                                </C.SubBottomDetailed>
                            )}
                        </ul>
                    </C.ServicesContainer>
                )}

                {visibleSubMenu === 'Metagenômica' && (
                    <C.ServicesContainer>
                        <C.GifArea>
                            <h2>Metagenômica</h2>
                            <img src={metaGif} alt='' />
                        </C.GifArea>
                        <ul className='submenu'>
                            <li className={detailedBottom === 'gtxMeta' ? 'subLine active' : 'subLine'}
                                onClick={() => {
                                    handleClickSubMenu('gtxMeta')
                                    handleExpandItem('gtxMeta')
                                }}>
                                GTx-Meta {expandedItems['gtxMeta'] ? <span>—</span> : <span>⬇</span>}</li>
                            {detailedBottom === 'gtxMeta' && (
                                <C.SubBottomDetailed>
                                    <C.ImageContainer>
                                        <img src={meta} alt="" />
                                    </C.ImageContainer>
                                    <ul>
                                        <li>➡ Sequenciamento metagenômico 16S ou Shotgun</li>
                                        <li>➡ Relatório de composição taxonômica em diversos níveis</li>
                                        <li>➡ Análise funcional do perfil obtido</li>
                                        <li>➡ Comparação com amostras públicas</li>
                                        <li>➡ Análises específicas:</li>
                                        <ul className='subBranch'>
                                            <li>◼ GTx-Soil - para metagenômica de solo</li>
                                            <li>◼ GTx-Water - para metagenômica de água</li>
                                        </ul>
                                    </ul>
                                </C.SubBottomDetailed>
                            )}
                        </ul>
                    </C.ServicesContainer>
                )}

                {visibleSubMenu === 'Transcriptômica' && (
                    <C.ServicesContainer>
                        <C.GifArea>
                            <h2>Transcriptômica</h2>
                            <img src={rnaGif} alt='' />
                        </C.GifArea>
                        <ul className='submenu'>
                            <li className={detailedBottom === 'sequenciamento' ? 'subLine active' : 'subLine'}
                                onClick={() => {
                                    handleClickSubMenu('sequenciamento')
                                    handleExpandItem('sequenciamento')
                                }}>
                                Sequenciamento de RNA {expandedItems['sequenciamento'] ? <span>—</span> : <span>⬇</span>}</li>
                            {detailedBottom === 'sequenciamento' && (
                                <C.SubBottomDetailed>
                                    <C.ImageContainer>
                                        <img src={seqRna} alt="" />
                                    </C.ImageContainer>
                                    <ul>
                                        <li>➡ Técnica capaz de analisar padrões das expressões gênicas através do sequenciamento de larga escala (Sequenciamento de Nova Geração - NGS) do RNA presente em uma amostra</li>
                                    </ul>
                                </C.SubBottomDetailed>
                            )}
                            <li className={detailedBottom === 'gtxRna' ? 'subLine active' : 'subLine'}
                                onClick={() => {
                                    handleClickSubMenu('gtxRna')
                                    handleExpandItem('gtxRna')
                                }}>
                                GTx-RNA {expandedItems['gtxRna'] ? <span>—</span> : <span>⬇</span>}</li>
                            {detailedBottom === 'gtxRna' && (
                                <C.SubBottomDetailed>
                                    <C.ImageContainer>
                                        <img src={rna} alt="" />
                                    </C.ImageContainer>
                                    <ul>
                                        <li>➡ Análises de expressão gênica e splicing alternatio</li>
                                        <li>➡ Comparação entre amostras em um desenho experimental</li>
                                    </ul>
                                </C.SubBottomDetailed>
                            )}
                        </ul>
                    </C.ServicesContainer>
                )}

                {visibleSubMenu === 'Proteômica' && (
                    <C.ServicesContainer>
                        <C.GifArea>
                            <h2>Proteômica</h2>
                            <img src={proteoGif} alt='' />
                        </C.GifArea>
                        <ul className='submenu'>
                            <li className={detailedBottom === 'gtxProteo' ? 'subLine active' : 'subLine'}
                                onClick={() => {
                                    handleClickSubMenu('gtxProteo')
                                    handleExpandItem('gtxProteo')
                                }}>
                                GTx-Proteo {expandedItems['gtxProteo'] ? <span>—</span> : <span>⬇</span>}</li>
                            {detailedBottom === 'gtxProteo' && (
                                <C.SubBottomDetailed>
                                    <C.ImageContainer>
                                        <img src={proteo} alt="" />
                                    </C.ImageContainer>
                                    <ul>
                                        <li>➡ Integração de dados genômicos, transcriptômicos e proteômicos</li>
                                        <li>➡ Análise de dados de espectrometria de massas</li>
                                        <li>➡ Busca de peptídeos em bancos de dados customizados</li>
                                    </ul>
                                </C.SubBottomDetailed>
                            )}
                        </ul>
                    </C.ServicesContainer>
                )}

                {visibleSubMenu === 'Otimização' && (
                    <C.ServicesContainer>
                        <C.GifArea>
                            <h2>Otimização</h2>
                            <img src={pipelineGif} alt='' />
                        </C.GifArea>
                        <ul className='submenu'>
                            <li className={detailedBottom === 'gtxPipeline' ? 'subLine active' : 'subLine'}
                                onClick={() => {
                                    handleClickSubMenu('gtxPipeline')
                                    handleExpandItem('gtxPipeline')
                                }}>
                                GTx-Pipeline {expandedItems['gtxPipeline'] ? <span>—</span> : <span>⬇</span>}</li>
                            {detailedBottom === 'gtxPipeline' && (
                                <C.SubBottomDetailed>
                                    <C.ImageContainer>
                                        <img src={pipeline} alt='' />
                                    </C.ImageContainer>
                                    <ul>
                                        <li>➡ Desenvolvimento e otimização de softwares de bioinformática desenvolvidos pela sua empresa</li>
                                    </ul>
                                </C.SubBottomDetailed>
                            )}
                        </ul>
                    </C.ServicesContainer>
                )}

                {visibleSubMenu === 'Cursos' && (
                    <C.ServicesContainer>
                        <C.GifArea>
                            <h2>Cursos</h2>
                            <img src={cursosGif} alt='' />
                        </C.GifArea>
                        <ul className='submenu'>
                            <li className={detailedBottom === 'cursos' ? 'subLine active' : 'subLine'}
                                onClick={() => {
                                    handleClickSubMenu('cursos')
                                    handleExpandItem('cursos')
                                }}>
                                Cursos {expandedItems['cursos'] ? <span>—</span> : <span>⬇</span>}</li>
                            {detailedBottom === 'cursos' && (
                                <C.SubBottomDetailed>
                                    <C.ImageContainer>
                                        <img src={cursos} alt="" />
                                    </C.ImageContainer>
                                    <ul>
                                        <li>➡ Introdução à bioinformática</li>
                                        <li>➡ Demais tópicos relacionados à bioinformática</li>
                                    </ul>
                                </C.SubBottomDetailed>
                            )}
                        </ul>
                    </C.ServicesContainer>
                )}
            </C.SubBottom>
        </C.subContainer>
    );
};