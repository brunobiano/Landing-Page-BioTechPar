import styled from "styled-components";

interface RoundDiv {
    isRound: boolean
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    
    height: 300px;
    background-color: #58796D;
`;

export const Enterprises = styled.div<RoundDiv>`
    margin-left: 100px;
    margin-right: 100px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: ${({ isRound }) => (isRound ? '#58796D' : '#028824')};
    border-radius: ${({ isRound }) => (isRound ? '50%' : '0')};
    width: ${({ isRound }) => (isRound ? '150px' : '200px')};
    color: white;
    transition: all 0.1s ease;
    padding: 20px;

    &:hover {
        width: 200px;
        border-radius: 10px;
    }
`;
/*Provavelmente da pra arrumar o problema de fazer o efeito em uma div de cada vez só mechendo aqui no hover */

export const Text = styled.div<RoundDiv>`
    display: ${({ isRound }) => (isRound ? 'none' : 'block')};
`;