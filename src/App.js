import React from "react";
import "./App.css";
import BetAmount from "./components/BetAmount";
import NumberPicker from "./components/NumberPicker";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bet: 0,
      numbers: [],
      // ideally probably have this as a getter instead
      isValidBet: false,
    };
    this.handleBetClick = this.handleBetClick.bind(this);
    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleGenerateClick = this.handleGenerateClick.bind(this);
  }

  static isValidBet(bet, numbers) {
    return bet > 0 && numbers.length === 3;
  }

  handleBetClick(bet) {
    // still seems to work even if I loop 10k times,
    // this.setState({ bet: this.state.bet + bet });
    this.setState((state) => {
      const newBet = bet ? state.bet + bet : 0;
      return {
        bet: newBet,
        isValidBet: App.isValidBet(newBet, state.numbers),
      };
    });
  }

  handleNumberClick(number) {
    this.setState((state) => {
      let newNumbers;
      if (state.numbers.includes(number)) {
        newNumbers = state.numbers.filter((e) => e !== number);
      } else if (state.numbers.length === 3) {
        newNumbers = state.numbers.slice();
      } else {
        newNumbers = state.numbers.concat([number]);
        newNumbers.sort((a, b) => a - b);
      }
      return {
        numbers: newNumbers,
        isValidBet: App.isValidBet(state.bet, newNumbers),
      };
    });
  }

  handleGenerateClick() {
    alert(
      `RECEIPT:
Numbers selected: ${this.state.numbers}
Total paid: ${this.state.bet}`
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Whe Whe Ticket Generator</h1>
        </header>
        <div id="ticketArea">
          <BetAmount bet={this.state.bet} onClick={this.handleBetClick} />
          <NumberPicker
            numbers={this.state.numbers}
            onClick={this.handleNumberClick}
          />
        </div>
        <div id="generateArea">
          <h2>Cash Out</h2>
          <button
            id="generate"
            disabled={!this.state.isValidBet}
            onClick={this.handleGenerateClick}
          >
            Generate Ticket
          </button>
        </div>
      </div>
    );
  }
}

export default App;
