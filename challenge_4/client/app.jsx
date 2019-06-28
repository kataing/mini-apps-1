import React from 'react';
import axios from 'axios';

import Row from './row.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: [],
      endGame: false,
      player: true
    }
    this.handleOnClick = this.handleOnClick.bind(this);
    this.determinePlayer = this.determinePlayer.bind(this);
  }

  get() {
    axios
      .get('/api')
      .then(({ data }) => {
        this.setState({
          board: data
        })
      })
      .catch(() => console.log('We were not able to complete your request.'))
  }

  post(column) {
    const colIndex = Number(column.slice(1,2));
    const player = this.determinePlayer();
    axios
      .post(`/api/${colIndex}?player=${player}`)
      .then(({ data }) => {
        this.setState({
          board: data.board,
          endGame: data.endGame
        })
        console.log('this is board', data.board);
        console.log('this is end.game', data.endGame);
      })
      .catch(() => {console.log('this request was not completed')})

  }

  handleOnClick(e) {
    if(Number(e.target.className[4]) === 0 && !this.state.endGame) {
      this.post(e.target.className);
      this.setState({
        player: !this.state.player
      })
    }
  }

  renderWinner() {
    if(this.state.endGame) {
      const player = this.state.player ? 'Black' : 'Red';
      return(
        <h2>{'Team ' + player + ' Wins!'}</h2>
      );
    }
  }

  determinePlayer() {
    return(this.state.player ? 1 : 2)
  }

  componentDidMount() {
    this.get();
  }

  render() {
    return (
      <div>
        <h1>Connect Four</h1>
        <h2>Let's play!</h2>
        {this.renderWinner()}
        <table>
          <tbody className='board'>
            {this.state.board.map((row, key) => {
              return (
                <Row key={key} rowIndex={key} row={row} handleOnClick={this.handleOnClick} determinePlayer={this.determinePlayer}/>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;