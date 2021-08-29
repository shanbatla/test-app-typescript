import React from "react";

interface Props {
  initialCount: number
}

interface State {
  count: number
}

export default class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
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
      </>
    )
  }
}