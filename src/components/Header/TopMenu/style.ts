import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
`;

export const LinkMenu = styled.div`
    display: flex;
    flex-direction: row;
    font-size: 14px;
    margin-top: 5px;

    a {
        text-decoration: none;
        color: white;
        margin-left: 10px;
        margin-right: 25px;
    };

    img {
        display: inline-block;
        vertical-align: middle;
        margin-right: 5px;
        margin-bottom: 2px;
    }

    .mailIcon {
        padding-top: 3px;
    }

    
    @media screen and (min-width: 320px) and (max-width: 760px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 10px;
        width: 100vw;

        @media screen and (min-width: 510px){
            .phonePos {
                padding-left: 200px
            }
        }
        

        a {
            padding-top: 10px;
        }

        img {
            display: inline-block;
            vertical-align: middle;
            margin-right: 5px;
            margin-bottom: 10px;
        }

        .mailIcon {
            padding-top: 7px;
        }
        
        .phoneHidden {
            display: none;
        }
    }
`;