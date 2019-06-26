import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonText: '',
      csv: '',
    }
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handlePickedFile = this.handlePickedFile.bind(this);
    this.handleLinkOnClick = this.handleLinkOnClick.bind(this);
    // this.filepath = '../../server/export/converted.csv';
    this.filepath = '../dist/converted.csv';
  }

  post({ jsonText }) {
    jsonText = jsonText.replace(';', '');
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

  getFile() {
    axios
      .get('/api/filename')
      .then(({ data }) => {
        this.setState({
          file: data
        })
        console.log('this is your filename', data);
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
  }

  handlePickedFile(e) {
    e.preventDefault();

    const fileToLoad = document.getElementById('fileToLoad').files[0];
    const fr = new FileReader();
    fr.onload = (e) => {
      this.setState({
        jsonText: fr.result
      })
    }
    fr.readAsText(fileToLoad);
  }

  handleLinkOnClick(e) {
    console.log(e.target);
  }

  render() {
    return (
      <div>
        <h1>CSV Converter</h1>
        <form onSubmit={this.handleOnSubmit}>
          <textarea onChange={this.handleOnChange} value={this.state.jsonText}></textarea>
          <div>
            <input id='fileToLoad' type='file' onChange={this.handlePickedFile} onClick={this.handleLinkOnClick}></input>
          </div>
          <div>
            <button>Convert to CSV</button>
          </div>
        </form>
        <a href={this.filepath} download='converted.csv' onClick={this.handleLinkOnClick} >Click to download</a>
        <h3>CSV Preview</h3>
        <div>{this.state.csv}</div>
      </div>
    )
  }
}

export default App;
