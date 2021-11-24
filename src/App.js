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
  }

  static isValidBet(bet, numbers) {
    return bet > 0 && numbers.length === 3;
  }

  handleBetClick(bet) {
    if (bet === 0) {
      this.setState({ bet: 0 });
      return;
    }
    // still seems to work even if I loop 10k times,
    // this.setState({ bet: this.state.bet + bet });
    this.setState((state) => {
      const newBet = state.bet + bet;
      return {
        bet: newBet,
        isValidBet: App.isValidBet(newBet, state.numbers),
      };
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Whe Whe Ticket Generator</h1>
        </header>
        <div id="ticketArea">
          <BetAmount bet={this.state.bet} onClick={this.handleBetClick} />
          <NumberPicker numbers={this.state.numbers} />
        </div>
        <div id="generateArea">
          <h2>Cash Out</h2>
          <button id="generate" disabled={!this.state.isValidBet}>
            Generate Ticket
          </button>
        </div>
      </div>
    );
  }
}

export default App;
