import React from 'react';
import axios from 'axios';

import Row from './row.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      board: []
    }
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

  componentDidMount() {
    this.get();
  }

  render() {
    return (
      <div>
        <h1>Connect Four</h1>
        <h2>Let's play!</h2>
        <table>
          <tbody className='board'>
            {this.state.board.map((row, key) => {
              return (
                <Row key={key} row={row} />
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;