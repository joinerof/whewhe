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
      isValidBet: false,
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Whe Whe Ticket Generator</h1>
        </header>
        <div id="ticketArea">
          <BetAmount bet={this.state.bet} />
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
