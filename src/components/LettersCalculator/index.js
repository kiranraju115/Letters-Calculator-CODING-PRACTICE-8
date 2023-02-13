// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    return (
      <div className="bg-container">
        <div className="text-image-container">
          <div className="text-container">
            <h1 className="header">Calculate the Letters you enter</h1>
            <label className="para" htmlFor="phraseText">
              Enter the phrase
            </label>
            <input
              type="text"
              className="text-input"
              id="phraseText"
              placeholder="enter the phrase"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
            <div>
              <p className="button">No.of letters: {searchInput.length}</p>
            </div>
          </div>
          <div className="image-container">
            <img
              src="
https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
