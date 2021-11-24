import React from "react";
import "./BetAmount.css";

class BetAmount extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="betAmount">
        <h2>Choose Bet Amount</h2>
        <div id="bets">
          <button>$0</button>
          <button>$1</button>
        </div>
        <p>Total so far: ${this.props.bet}</p>
      </section>
    );
  }
}

export default BetAmount;
