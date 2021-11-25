import React from "react";
import "./NumberPicker.css";

class NumberPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // pass nonnegative integers to prop
  // special case for -3: interpret as 3 unique random values to pass to prop
  handleClick(e) {
    const value = parseInt(e.target.value);
    if (value < 0) {
      this.props.onClick(0);
      let randNums = [];
      let randNum;
      for (let i = value; i < 0; ++i) {
        do {
          randNum = Math.floor(Math.random() * 10 + 1);
        } while (randNums.includes(randNum));
        randNums.push(randNum);
        this.props.onClick(randNum);
      }
    } else {
      this.props.onClick(parseInt(e.target.value));
    }
  }

  render() {
    const buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
      <button
        key={e}
        value={e}
        onClick={this.handleClick}
        className={this.props.numbers.includes(e) ? "picked" : null}
      >
        {e}
      </button>
    ));
    return (
      <section id="numberPicker">
        <h2>Choose 3 numbers</h2>
        <div id="numbers">{buttons}</div>
        <div>
          <button value={-3} onClick={this.handleClick}>
            Random
          </button>
          <button value={0} onClick={this.handleClick}>
            Clear
          </button>
        </div>
      </section>
    );
  }
}

export default NumberPicker;
