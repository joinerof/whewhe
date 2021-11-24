import React from "react";
import "./BetAmount.css";

class BetAmount extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(parseInt(e.target.value));
  }

  render() {
    return (
      <section id="betAmount">
        <h2>Choose Bet Amount</h2>
        <div id="bets">
          <button value={0} onClick={this.handleClick}>
            $0
          </button>
          <button value={1} onClick={this.handleClick}>
            $1
          </button>
          <button value={5} onClick={this.handleClick}>
            $5
          </button>
          <button value={10} onClick={this.handleClick}>
            $10
          </button>
          <button value={20} onClick={this.handleClick}>
            $20
          </button>
        </div>
        <p>Total so far: ${this.props.bet}</p>
      </section>
    );
  }
}

export default BetAmount;
