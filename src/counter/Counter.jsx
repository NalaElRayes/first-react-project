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
    }

    render() {
        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment}></CounterButton>
                <span className="count">{this.state.counter}</span>
            </div >
        );
    }

    increment(by) {
        // console.log(`increment from child - ${by}`)
        this.setState(
            (prevState) => {
                return { counter: this.state.counter + by }

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
    }

    render() {

        return (
            <div className="counterButton" >
                <button onClick={this.increment} > +{this.props.by} </button>
            </div >
        );
    }

    increment() { //update state - counter++
        //this.state.counter++;
        this.setState({
            counter: this.state.counter + this.props.by

        });

        this.props.incrementMethod(this.props.by);
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}


export default Counter;