import styled from 'styled-components'

export const Container = styled.div`
   background-color: #223a5f;
   min-height: 100vh;
   padding: 2%;
   display:flex;
   flex-direction:column;
   justify-content: center;
   align-items: center;/
`

export const ScoreCardComponent = styled.div`
   width:70%;
   padding: 1%;
   display:flex;
   border: 1px solid #ffffff;
   border-radius: 5px;
   justify-content:space-between;


   @media (max-width:767px) {
      width: 95%;
   }/
`

export const Heading = styled.h1`
  color:${props => (props.Color ? '#223a5f' : '#ffffff')};
  font-size: ${props => (props.Size ? '3vw' : '2vw')};
  font-weight: normal;
  font-family: ${props => (props.Color ? 'Roboto' : 'Bree Serif')};


  @media (max-width:767px) {
     font-size: ${props => (props.size ? '9vw' : '8vw')};
  }/
`

export const ScoreComponent = styled.div`
   width: 20%;
   background-color: #ffffff;
   border-radius: 5px; 
   text-align: center;

   @media (max-width:767px) {
      width: 50%;
   }/
`

export const Para = styled.p`
  font-size: 1.7vw;
  margin-bottom:0px;
  color: ${props => (props.White ? '#ffffff' : '#223a5f')};
  @media (max-width:767px) {
   font-size: 6vw;
  }/
`

export const ImagesComponent = styled.ul`
  padding: 1%;
  width: 40%;
  display:flex;
  justify-content:center;
  flex-wrap: wrap;


  @media (max-width:767px) {
    width:100%
  }/
`

export const ResultContainer = styled(ImagesComponent)`
    width: 70%;
    justify-content: space-between;


    @media (max-width:767px) {
       width: 100%;
    }/
`

export const ResultItem = styled.li`
    width: 30%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 50%;/
`

export const Img = styled.img`
   width: 200px;
   height: 200px;

   @media (max-width:767px) {
      width:100px;
      height:100px
   }/
`

export const ButtonComponent = styled.button`
   background-color: #ffffff;
   padding: 1% 2% ;
   border:none;
   border-radius: 4px;
   font-size: 1vw;
   color:  #223a5f;


   @media (max-width: 767px) {
      font-size: 4vw;
      padding : 3% 10%;
   }/
`

export const PopupContainer = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;/
`
