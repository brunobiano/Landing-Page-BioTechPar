import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 16px;

    p {
        display: flex;
        align-items: top;
        line-height: 1.5;
        text-align: left;
        padding-bottom: 20px;
    }
    strong {
        margin-left: -10px;
        width: 70px;
    }

    img {
        margin-right: 10px;
        width: 80px;
    }

    .rotate-effect {
     transition: transform 0.1s;   
    }

    .rotate-effect:hover {
        transform: rotate(20deg);
    }

    @media screen and (min-width: 320px) and (max-width: 760px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        
        p {
            display: flex;
            flex-direction: column;
            text-align: justify;
            align-items: center;
            line-height: 2.0;

            img {
                width: 50px;
                margin-top: 30px;
                margin-left: 10px;
            }

            strong {
                padding-top: 10px;
                padding-left: 15px;
            }

            br {
                display: none;
            }
        }
    }

    @media screen and (min-width: 761px) and (max-width: 1024px) {
        p {
            display: flex;
            flex-direction: column;
            text-align: justify;
            align-items: center;
            line-height: 2.0;
        }

        img {
            margin-top: 30px;
        }

        br {
            display: none;
        }
    }
`;