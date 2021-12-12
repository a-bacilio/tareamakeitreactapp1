import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
background-color: ${props=>props.backgroundColor?props.backgroundColor:""};
`;

export const WorkZone = styled.div`
padding: 0;
margin: 0 auto;
width: 95%;
max-width: 1440px;
background-color: ${props=>props.backgroundColor?props.backgroundColor:""};
`