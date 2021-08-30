import React from "react";
import Divider from "./Divider";

interface CounterProps {
  initialCount: number
}

interface CounterState {
  count: number
}

export default class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props)
    this.state = {
      count: this.props.initialCount
    }
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter(): void {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <>
        <h2>Counter</h2>
        <div>
          <div>
            Count -- {this.state.count}
          </div>
          <button onClick={this.incrementCounter}>Increment</button>
        </div>
        <Divider/>
      </>
    )
  }
}