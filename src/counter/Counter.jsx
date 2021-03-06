import React, { Component } from 'react';
import './Counter.css';
import PropTypes from 'prop-types'


class Counter extends Component {

    constructor() {
        super(); //error has to call the super()

        this.state = {
            counter: 0

        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement
                }></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement
                }></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement
                }></CounterButton>
                <span className="count">{this.state.counter}</span>
                <div><button className="reset" onClick={this.reset}> reset </button></div>
            </div >
        );
    }

    reset() {
        this.setState({ counter: 0 });
    }

    increment(by) {
        // console.log(`increment from child - ${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }

            }
        );

    }

    decrement(by) {
        // console.log(`increment from child - ${by}`)
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }

            }
        );

    }
}

class CounterButton extends Component {
    //define the initial state in a constructur
    // state => counter 0
    constructor() {
        super(); //error has to call the super()

        this.state = {
            counter: 0

        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this)
    }

    render() {

        return (
            <div className="counterButton" >
                <button onClick={this.increment} > +{this.props.by} </button>
                <button onClick={this.decrement} > -{this.props.by} </button>
            </div >
        );
    }

    increment() { //update state - counter++
        //this.state.counter++;
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + this.props.by }

            });

        this.props.incrementMethod(this.props.by);
    }
    decrement() {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - this.props.by }

            });

        this.props.decrementMethod(this.props.by);
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}


export default Counter;