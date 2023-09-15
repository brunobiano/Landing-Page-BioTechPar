import * as C from './styles';

export const MenuList = () => {    
    const handleMenuClick = (event: React.MouseEvent, sectionId: string) => {
        event.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('.Header')?.clientHeight || 0;
            const targetPosition = section.offsetTop - headerHeight;
            const scrollToPosition = targetPosition - 50;
            window.scrollTo({
                top: scrollToPosition,
                behavior: 'smooth',
            })
        }
    }
    
    return (
        <C.Container>
            <nav>
                <C.Ul>
                    <li className='line'><a href='#'><b>HOME</b></a></li>
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