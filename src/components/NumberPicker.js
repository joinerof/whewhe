import React from "react";
import "./NumberPicker.css";

class NumberPicker extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="numberPicker">
        <h2>Choose 3 numbers</h2>
        <div id="numbers">
          <button>1</button>
          <button>2</button>
        </div>
        <div>
          <button>Random</button>
          <button>Clear</button>
        </div>
      </section>
    );
  }
}

export default NumberPicker;
