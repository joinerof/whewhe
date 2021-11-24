import React from "react";
import "./NumberPicker.css";

class NumberPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(parseInt(e.target.value));
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
          <button>Random</button>
          <button>Clear</button>
        </div>
      </section>
    );
  }
}

export default NumberPicker;
