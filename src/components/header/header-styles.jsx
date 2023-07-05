import styled from "styled-components"
import backgroundImage from '../../assets/background-blur.jpg'

export const ProductHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15rem 10rem;
    align-items: flex-start;
    background-image: url(${backgroundImage});
    -webkit-backdrop-filter: blur(100px);
    backdrop-filter: blur(100px);
    box-shadow: inset 0 0 0 1000px rgba(255,255,255,.5);
    background-position: 50% 75%;
    background-attachment: fixed;
    margin: 5em;
    border-radius: 20%;


`

export const Slogan = styled.span`
    text-transform: uppercase;
    font-size: 3em;
    margin-bottom: 0.5em;
`

export const MainDescription = styled.span`
    font-size: 1.5em;
    width: 25em;
    text-align: left;
`