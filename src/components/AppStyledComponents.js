import styled from "styled-components";

export const AppWrapper = styled.div`
width:100%;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`


export const CardHolder = styled.div`
width:100%;
max-width:1300px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
flex-wrap:nowrap;
@media only screen and (min-width:660px){
    display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
flex-wrap:nowrap;
}
`
export const SubCardHolder = styled.div`
width: 100%;
max-width: 1000px;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap:wrap;
`