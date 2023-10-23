import * as C from './style';
import { useState } from 'react';

import genomicaGif from './assets/GENÔMICA - GIF.gif'
import  dkrypt  from './assets/D-KRYPT - 1.png';
import onco from './assets/GTX ONCO .png';
import ngs from './assets/SEQUENCIAMENTO DE NOVA GERAÇÃO (NGS).png';

import meta from './assets/METAGENOMICA - 1 .png';

import rna from './assets/GTX-RNA.png';

import proteo from './assets/GTX-PROTEO.png';

import pipeline from './assets/GTX-PIPELINE.png';

type Props = {
    visibleSubMenu: string | null,
    detailedBottom: string | null,
    isExpanded: boolean,
    handleShowSubMenu: (submenuId: string) => void,
    handleClickSubMenu: (submenuId: string) => void
}

export const ServiceSubItem = ({ visibleSubMenu, detailedBottom, isExpanded, handleShowSubMenu, handleClickSubMenu }: Props) => {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    
    return (
        <C.subContainer>
            <C.SubUpper>
                <img src={genomicaGif} alt='' />
            </C.SubUpper>

            <C.SubBottom>
                {visibleSubMenu === 'Genômica' && (
                    <ul className='submenu'>
                        <li className={detailedBottom === 'ngs' ? 'subLine active' : 'subLine'} onClick={() => handleClickSubMenu('ngs')}>NGS (Sequenciamento de Nova Geração) {isExpanded ? <span>—</span> : <span>⬇</span>}</li>
                        {detailedBottom === 'ngs' && (
                            <C.SubBottomDetailed>
                                <C.ImageContainer>
                                    <img src={ngs} alt="" />
                                </C.ImageContainer>
                                <ul>
                                    <li>➡ Sequenciamento de exoma completo</li>
                                    <li>➡ Exoma clínico</li>
                                    <li>➡ Painéis oncológicos</li>
                                    <li>➡ Hotspots</li>
                                </ul>
                            </C.SubBottomDetailed>
                        )}
                        <li className={detailedBottom === 'dkrypt' ? 'subLine active' : 'subLine'} onClick={() => handleClickSubMenu('dkrypt')}>D-Krypt™ {isExpanded ? <span>—</span> : <span>⬇</span>}</li>
                        {detailedBottom === 'dkrypt' && (
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
                        <li className={detailedBottom === 'onco' ? 'subLine active' : 'subLine'} onClick={() => handleClickSubMenu('onco')}>GTx-Onco$™ {isExpanded ? <span>—</span> : <span>⬇</span>}</li>
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
                )}

                {visibleSubMenu === 'Metagenômica' && (
                    <ul className='submenu'>
                        <li className={detailedBottom === 'gtxMeta' ? 'subLine active' : 'subLine'} onClick={() => handleClickSubMenu('gtxMeta')}>GTx-Meta {isExpanded ? <span>—</span> : <span>⬇</span>}</li>
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
                )}

                {visibleSubMenu === 'Transcriptômica' && (
                    <ul className='submenu'>
                        <li className='subLine'>Sequenciamento de RNA</li>
                        <li className={detailedBottom === 'gtxRna' ? 'subLine active' : 'subLine'} onClick={() => handleClickSubMenu('gtxRna')}>GTx-RNA {isExpanded ? <span>—</span> : <span>⬇</span>}</li>
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
                )}

                {visibleSubMenu === 'Proteômica' && (
                    <ul className='submenu'>
                        <li className={detailedBottom === 'gtxProteo' ? 'subLine active' : 'subLine'} onClick={() => handleClickSubMenu('gtxProteo')}>GTx-Proteo {isExpanded ? <span>—</span> : <span>⬇</span>}</li>
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
                )}

                {visibleSubMenu === 'Otimização' && (
                    <ul className='submenu'>
                        <li className={detailedBottom === 'gtxPipeline' ? 'subLine active' : 'subLine'} onClick={() => handleClickSubMenu('gtxPipeline')}>GTx-Pipeline {isExpanded ? <span>—</span> : <span>⬇</span>}</li>
                        {detailedBottom === 'gtxPipeline' && (
                            <C.SubBottomDetailed>
                                <C.ImageContainer>
                                    <img src={pipeline} alt=''/>
                                </C.ImageContainer>
                                <ul>
                                    <li>➡ Desenvolvimento e otimização de softwares de bioinformática desenvolvidos pela sua empresa</li>
                                </ul>
                            </C.SubBottomDetailed>
                        )}
                    </ul>
                )}

                {visibleSubMenu === 'Cursos' && (
                    <ul className='submenu'>
                        <li className='subLine'>Introdução à bioinformática</li>
                        <li className='subLine'>Demais tópicos relacionados à bioinformática</li>
                    </ul>
                )}
            </C.SubBottom>
        </C.subContainer>
    );
}