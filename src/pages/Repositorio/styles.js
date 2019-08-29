import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    max-width: 700px;
    background: #FFF;
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 30px;
    margin: 80px auto;
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 150px;
        border-radius: 20%;
        margin: 20px 0;
    }

    h1 {
        font-size: 30px;
        color: #0D2636;
    }

    p {
        margin: 10px 0;
        font-size: 14px;
        color: #000;
        text-align: center;
        max-width: 400px; 
        line-height: 1.4;
    }
`;

export const Loading = styled.div`
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const BackButton = styled(Link)`
    margin: 0;
    outline: 0;

`;