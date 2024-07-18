import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {
  ModalComponent,
  ButtonContainer,
  ButtonComponent,
  ImgContainer,
  ImageComponent,
} from './styledComponents'

const RulesPopup = () => (
  <Popup
    trigger={
      <ButtonComponent type="button" bg>
        RULES
      </ButtonComponent>
    }
    modal
  >
    {close => (
      <ModalComponent>
        <ButtonContainer>
          <ButtonComponent type="button" className="close" onClick={close}>
            <RiCloseLine />
          </ButtonComponent>
        </ButtonContainer>
        <ImgContainer>
          <ImageComponent
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </ImgContainer>
      </ModalComponent>
    )}
  </Popup>
)

export default RulesPopup
