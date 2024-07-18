import {ListItem, ButtonComponent, Img} from './styledComponents'

const ImgItems = props => {
  const {data, getSelectedItem} = props
  const {imageUrl, id, testid} = data
  const onClickToSelectGameItem = () => {
    getSelectedItem(id)
  }
  return (
    <ListItem>
      <ButtonComponent
        type="button"
        data-testid={testid}
        onClick={onClickToSelectGameItem}
      >
        <Img src={imageUrl} alt={id} />
      </ButtonComponent>
    </ListItem>
  )
}

export default ImgItems
