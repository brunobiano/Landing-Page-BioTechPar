import * as C from './style';
import { useEffect, useState } from 'react';

import dkrypt from '../ServiceSubItem/assets/D-KRYPT - 1.png';
import onco from '../ServiceSubItem/assets/GTX ONCO .png';
import ngs from '../ServiceSubItem/assets/SEQUENCIAMENTO DE NOVA GERAÇÃO (NGS).png';

import meta from './assets/gtx-meta.png';

import seqRna from './assets/SEQUENCIAMENTO DE RNA.png';
import rna from './assets/GTX-RNA.png';

import proteo from './assets/teste.png';

import pipeline from './assets/pipeline.png';

import cursos from './assets/CURSOS.png';

type Props = {
    visibleSubMenu: string | null,
    detailedBottom: string | null,
    isExpanded: boolean,
    handleShowSubMenu: (submenuId: string) => void,
    handleClickSubMenu: (submenuId: string) => void
}

export const Testing = ({ visibleSubMenu, detailedBottom, isExpanded, handleShowSubMenu, handleClickSubMenu }: Props) => {
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
        // Criando uma cópia do objeto de estado atual
        const newExpandedItems = { ...expandedItems };

        // Verificando se o item atual já está expandido
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

        // Atualizando o estado
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
            <C.subBottom>
                <details open={visibleSubMenu === 'Genômica'}>
                    <summary>Saiba Mais</summary>
                    <C.ServicesContainer>
                        <C.TitleArea>
                            <h2>Genômica</h2>
                        </C.TitleArea>
                        <ul className='submenu'>
                            <li className={detailedBottom === 'ngs' ? 'subLine active' : 'subLine'} onClick={() => {
                                handleClickSubMenu('ngs');
                                handleExpandItem('ngs');
                            }}>
                                NGS (Sequenciamento de Nova Geração)</li>
                            {expandedItems['ngs'] && detailedBottom === 'ngs' && (
                                <C.SubBottomDetailed> {/*Talvez transformar isso em um details e não em div igual ta */}
                                    <details open className='image-details'>
                                        <summary></summary>
                                        <C.ImageContainer>
                                            <img src={ngs} alt="" />
                                        </C.ImageContainer>
                                    </details>
                                    <ul>
                                        <li>➡ Sequenciamento de exoma completo</li>
                                        <li>➡ Exoma clínico</li>
                                        <li>➡ Painéis oncológicos</li>
                                        <li>➡ Hotspots</li>
                                    </ul>
                                </C.SubBottomDetailed>
                            )}

                            <li className={detailedBottom === 'dkrypt' ? 'subLine active' : 'subLine'} onClick={() => {
                                handleClickSubMenu('dkrypt');
                                handleExpandItem('dkrypt');
                            }}>
                                D-Krypt™
                            </li>
                            {expandedItems['dkrypt'] && detailedBottom === 'dkrypt' && (
                                <C.SubBottomDetailed>
                                    <details open className='no-summary'>
                                        <C.ImageContainer>
                                            <img src={dkrypt} alt="" />
                                        </C.ImageContainer>
                                    </details>
                                        <ul>
                                            <li>➡ Montagem de genomas</li>
                                            <li>➡ Chamada de variantes</li>
                                            <li>➡ Visualização de mutações SNV, CNV, Indels</li>
                                            <li>➡ Análise de impacto, patogenicidade, associação à drogas</li>
                                        </ul>
                                </C.SubBottomDetailed>
                            )}

                            <li className={detailedBottom === 'onco' ? 'subLine active' : 'subLine'} onClick={() => {
                                handleClickSubMenu('onco');
                                handleExpandItem('onco');
                            }}>
                                GTx-Onco™
                            </li>
                            {expandedItems['onco'] && detailedBottom === 'onco' && (
                                <C.SubBottomDetailed>
                                    <details open className='no-summary'>
                                        <summary></summary>
                                        <C.ImageContainer>
                                            <img src={onco} alt="" />
                                        </C.ImageContainer>
                                    </details>
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
                </details>
            </C.subBottom>    
        </C.subContainer>
    );
}