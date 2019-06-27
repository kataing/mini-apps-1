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
    return(
      // <div>This is the app</div>
      this.state.board.map((row, key) => {
        return(
          <div id={'r' + key}>
            <Row key={key} row={row}/>
          </div>
        )
      })
    );
  }
}

export default App;