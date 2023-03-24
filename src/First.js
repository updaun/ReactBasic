import React, { useState, useEffect } from "react";

const First = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item + 1);
    const decrementItem = () => setItem(item - 1);
    return (
        <div>
            <h1>First{item}</h1>
            <h2>Start</h2>
            <button onClick={incrementItem}>Increment</button>
            <button onClick={decrementItem}>Decrement</button>
        </div>
    )
}

class AppUgly extends React.Component {
    state = {
        item: 1
    }
    render() {
        const { item } = this.state;
        return (
            <div>
                <h1>First{item}</h1>
                <h2>Start</h2>
                <button onClick={this.incrementItem}>Increment</button>
                <button onClick={this.decrementItem}>Decrement</button>
            </div>
        );
    }
    incrementItem = () => {
        this.setState(state => {
            return {
                item: state.item + 1
            }
        })
    }
    decrementItem = () => {
        this.setState(state => {
            return {
                item: state.item - 1
            }
        })
    }

}

// export default First;
export default AppUgly;