import {Component} from 'react'
import RulesPopup from '../RulesPopup'
import {
  Container,
  ScoreCardComponent,
  Heading,
  ScoreComponent,
  Para,
  ImagesComponent,
  ResultContainer,
  ResultItem,
  Img,
  ButtonComponent,
  PopupContainer,
} from './styledComponents'

import ImgItems from '../GameImgItems'

const choicesList = [
  {
    id: 'ROCK',
    testid: 'rockButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    testid: 'scissorsButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    testid: 'paperButton',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {
    score: 0,
    gameStatus: '',
    resultDisplay: false,
    selectedId: '',
    randomId: '',
  }

  getSelectedItem = id => {
    const randomNum = Math.floor(Math.random() * choicesList.length)
    const randomSelection = choicesList[randomNum]
    this.setState({
      selectedId: id,
      randomId: randomSelection.id,
      resultDisplay: true,
    })
    if (id === 'PAPER') {
      switch (randomSelection.id) {
        case 'PAPER':
          return this.setState({gameStatus: 'DRAW'})
        case 'SCISSORS':
          return this.setState(prevState => ({
            score: prevState.score - 1,
            gameStatus: 'LOST',
          }))
        case 'ROCK':
          return this.setState(prevState => ({
            score: prevState.score + 1,
            gameStatus: 'WON',
          }))
        default:
          return null
      }
    } else if (id === 'SCISSORS') {
      switch (randomSelection.id) {
        case 'SCISSORS':
          return this.setState({gameStatus: 'DRAW'})
        case 'PAPER':
          return this.setState(prevState => ({
            score: prevState.score + 1,
            gameStatus: 'WON',
          }))
        case 'ROCK':
          return this.setState(prevState => ({
            score: prevState.score - 1,
            gameStatus: 'LOST',
          }))
        default:
          return null
      }
    } else if (id === 'ROCK') {
      switch (randomSelection.id) {
        case 'ROCK':
          return this.setState({gameStatus: 'DRAW'})
        case 'SCISSORS':
          return this.setState(prevState => ({
            score: prevState.score + 1,
            gameStatus: 'WON',
          }))
        case 'PAPER':
          return this.setState(prevState => ({
            score: prevState.score - 1,
            gameStatus: 'LOST',
          }))
        default:
          return null
      }
    }
    return null
  }

  onClickToRestartGame = () => {
    this.setState({
      resultDisplay: false,
      gameStatus: '',
      selectedId: '',
      randomId: '',
    })
  }

  renderResult = value => {
    const {selectedId, randomId} = this.state
    const myObj = choicesList.filter(eachObj => eachObj.id === selectedId)
    console.log(myObj[0].imageUrl)
    const opponentObj = choicesList.filter(eachObj => eachObj.id === randomId)
    console.log(opponentObj[0].imageUrl)
    return (
      <>
        <ResultContainer>
          <ResultItem>
            <Para White>You</Para>
            <Img src={myObj[0].imageUrl} alt="your choice" />
          </ResultItem>
          <ResultItem>
            <Para White>Opponent</Para>
            <Img src={opponentObj[0].imageUrl} alt="opponent choice" />
          </ResultItem>
        </ResultContainer>
        <Heading as="p">
          {value === 'DRAW' ? 'IT IS DRAW' : `YOU ${value}`}
        </Heading>
        <ButtonComponent type="button" onClick={this.onClickToRestartGame}>
          Play Again
        </ButtonComponent>
      </>
    )
  }

  renderAccordingToGameStatus = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case 'DRAW':
        return this.renderResult('DRAW')
      case 'WON':
        return this.renderResult('WON')
      case 'LOST':
        return this.renderResult('LOSE')
      default:
        return null
    }
  }

  render() {
    const {score, resultDisplay} = this.state
    return (
      <Container>
        <ScoreCardComponent>
          <Heading>
            ROCK <br /> PAPER <br /> SCISSORS <br />
          </Heading>
          <ScoreComponent>
            <Para>Score</Para>
            <Heading as="p" Color Size>
              {score}
            </Heading>
          </ScoreComponent>
        </ScoreCardComponent>
        {resultDisplay ? (
          this.renderAccordingToGameStatus()
        ) : (
          <ImagesComponent>
            {choicesList.map(eachObj => (
              <ImgItems
                key={eachObj.id}
                data={eachObj}
                getSelectedItem={this.getSelectedItem}
              />
            ))}
          </ImagesComponent>
        )}
        <PopupContainer>
          <RulesPopup />
        </PopupContainer>
      </Container>
    )
  }
}

export default Game
