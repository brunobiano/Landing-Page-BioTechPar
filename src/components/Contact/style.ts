import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    h1 {
        color: #FFF;
    }

    p {
        color: #FFF;
    }

    h4 {
        color: #FFF;
    }
`;

export const LeftSide = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr 1fr;
    gap: 10px;
    width: 50%;
    height: 300px;
    padding: 10px;

    .contactNumbers {
        grid-column: span 2;
        text-align: center;
        
    }

    .top-left {
        grid-column: 1;
        grid-row: 2;
    };

    .bottom-left {
        grid-column: 1;
        grid-row: 3;
        padding-left: 40px;
    };
`;

export const OurContacts = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 22px;
    margin-top: -20px;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    margin-top: 50px;
    margin-left: 30px;
    color: #0C3B2E;

    img {
        padding-right: 14px;
    };
`;

export const Body = styled.div`
    margin-top: -25px;
    margin-left: 15px;
    
    p {
        font-size: 22px;
        margin-left: 60px;
    }

    .telephoneP {
        margin-left: 100px;
    }
`;

export const RightSide = styled.div`
    display: grid;
    margin-right: 200px;
    margin-top: 40px;
    width: 500px;
`;

export const Inputs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr auto auto;
    gap: 20px;
    padding: 10px;

    input {
        border-radius: 5px;
        border: none;
        padding-left: 10px;
    }

    input:focus {
        outline: none;
    }

    .left1 {
        grid-column: 1;
        grid-row: 1;
        height: 50px;
    };

    .right1 {
        grid-column: 2;
        grid-row: 1;
        height: 50px;
    };

    .left2 {
        grid-column: 1;
        grid-row: 2;
        height: 50px;
    };

    .right2 {
        grid-column: 2;
        grid-row: 2;
        height: 50px;
    };

    .left3{
        height: 50px;
    }

    .left5 {
        height: 50px;
    }

    textarea {
        grid-column: span 2;
        grid-row: 6;
        height: 100px;
        border-radius: 5px;
        border: none;
        padding-left: 10px;
        padding-top: 10px;
    }

    textarea:focus {
        outline: none;
    }

    select {
        border-radius: 5px;
        border: none;
        padding-left: 10px;
        color: #777;
    }

    select:focus {
        outline: none;
    }

    button {
        grid-column: span 2;
        grid-row: 7;
        border-radius: 5px;
        border: none;
        height: 25px;
        margin-top: 25px;
    };
`;

/*
display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr auto auto;
    gap: 20px;
    padding: 10px;

    input {
        border-radius: 5px;
        border: none;
        padding-left: 10px;
    }

    input:focus {
        outline: none;
    }

    .top-left {
        grid-column: 1;
        grid-row: 1;
        height: 50px;
    };

    .top-right {
        grid-column: 2;
        grid-row: 1;
        height: 50px;
    };

    .bottom-left {
        grid-column: 1;
        grid-row: 2;
        height: 50px;
    };

    .bottom-right {
        grid-column: 2;
        grid-row: 2;
        height: 50px;
    };

    textarea {
        grid-column: span 2;
        grid-row: 3;
        height: 100px;
        border-radius: 5px;
        border: none;
        padding-left: 10px;
        padding-top: 10px;
    }

    textarea:focus {
        outline: none;
    }

    select {
        border-radius: 5px;
        border: none;
        padding-left: 10px;
        color: #777;
    }

    select:focus {
        outline: none;
    }

    button {
        grid-column: span 2;
        grid-row: 4;
        border-radius: 5px;
        border: none;
        height: 25px;
        margin-top: 25px;
    };
*/