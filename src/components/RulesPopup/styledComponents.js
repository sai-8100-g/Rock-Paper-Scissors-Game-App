import styled from 'styled-components'

export const ModalComponent = styled.div`
  width:70%; 
  background-color: #ffffff;
  margin-left:auto;
  margin-right:auto;
  padding:2%;
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;

  @media (max-width:767px) {
    width:80%;
  }/
`

export const ButtonContainer = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-end;/
`

export const ButtonComponent = styled.button`
    border:none;
    padding: ${props => (props.bg ? '0.5% 2%' : '')};
    font-size: 1vw;
    color: " #223a5f";
    align-self: center;
    display:flex;
    border-radius: 4px;
    justify-content:center;
    align-items: center;
    background-color: ${props => (props.bg ? '#ffffff' : 'transparent')};

    @media (max-width:767px) {
       font-size: 3vw;
       padding: ${props => (props.bg ? '2% 6%' : '')};
    }

    @media (min-width:768px) and (max-width:1200px) {
      font-size: 2vw;
       padding: ${props => (props.bg ? '1% 6%' : '')};
    }/
`

export const ImgContainer = styled(ModalComponent)`
    width: 100%; 
    margin:0px; /
    
 `

export const ImageComponent = styled.img`
    width:100%;
    height:100%;/
 `
