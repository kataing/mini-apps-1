import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonText: '',
      csv: ''
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  post({ jsonText }) {
    const jsonObj = JSON.parse(jsonText);
    axios
      .post('/api', jsonObj)
      .then(() => {
        this.get();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  get() {
    axios
      .get('/api')
      .then(({ data }) => {
        this.setState({
          csv: data
        })
        console.log('this is your csv', data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  handleOnChange(e) {
    this.setState({
      jsonText: e.target.value
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.post(this.state);
    this.setState({
      jsonText: ''
    })
  }

  render() {
    return (
      <div>
        <h1>CSV Converter</h1>
        <form onSubmit={this.handleOnSubmit}>
          <textarea onChange={this.handleOnChange} value={this.state.text}></textarea>
          <div>
            <button>Convert to CSV</button>
          </div>
          <div>CSV Preview</div>
          <div>{this.state.csv}</div>
        </form>
      </div>
    )
  }
}

export default App;
