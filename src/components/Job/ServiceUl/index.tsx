import * as C from './style';


type Props = {
    title: string,
    visibleSubMenu: string | null,
    detailedBottom: string | null,
    handleClickSubMenu: (title: string) => void,
    handleShowSubMenu: (title: string) => void,
    handleUlScroll : () => void
}

export const ServiceItem = ({ title, visibleSubMenu, detailedBottom, handleShowSubMenu, handleClickSubMenu, handleUlScroll }: Props) => {
    return(
        <C.ServiceLi className={visibleSubMenu === title ? 'line active' : 'line'}
        onClick={() => {
            handleShowSubMenu(title)
            handleUlScroll()
            }}>
            {title}
        </C.ServiceLi>
    );
}