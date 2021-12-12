import styled from "styled-components"

export const Wrapper = styled.div`
    border-radius: 25px;
    min-width: 300px;
    width: 90%;
    max-width:300px;
    @media only screen and (min-width:660px){
        max-width: ${props=>props.cardWidth===2?"630px":"300px"};
    }
    background-color: ${props=>props.backgroundColor?props.backgroundColor:"white"};
    padding: 35px;
    color: ${props=>props.backgroundColor
                                        ?"white"
                                        :"var(--color2)"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 10px;
    box-shadow:0px 0px 0px 1px rgba(0,0,0,0.05);
`;

export const TopZone = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
`;

export const TitleZone = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left:15px;
`;


export const AvatarImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 20px;
`;

export const UserName = styled.h3`
    font-size: var(--mediumFS);
    margin: 2px 0 2px 0;
`;

export const UserTitle = styled.h4`
    font-size: var(--smallFS);
    opacity: 50%;
    margin: 2px 0 2px 0;
`;

export const CardTitle = styled.h2`
    font-size: var(--bigFS);
    margin: 10px 0;
`;

export const CardText = styled.p`
    font-size: var(--normalFS);
`;
