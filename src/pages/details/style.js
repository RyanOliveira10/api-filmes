import styled from "styled-components";

export const Container = styled.div`

    padding: 4rem 0;

    h1{
        margin: 3rem 0;
        text-align: center;
    }

    .movie{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 300px;
        border-radius: 1rem;
    }

    .details{
        margin-left: 4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 50%;
    }

    button{
        background-color: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: #fff;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: 0.3s;
    }

    button:hover{
        background-color: #5848c2;
        transition: 0.8s;
    }

    span{
        line-height: 130%;
        margin-bottom: 1rem;
        font-size: 110%
    }

    .release-date{
        opacity: 0.5;
    }
`