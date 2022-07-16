import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const countText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="even-odd-bg-container">
        <div className="even-odd-card">
          <h1 className="heading">Count {count}</h1>
          <p className="text">Count is {countText}</p>
          <button
            className="increment-btn"
            type="button"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="notice-text">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
