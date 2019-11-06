import React, { Component } from 'react';

class QuoteBox extends Component {
    render() {
        const html = document.documentElement;
        html.style.backgroundColor = this.props.color;
        return (

            <div>
            <h1>{this.props.quote}</h1>
            <h1>~-{this.props.author !== "" ? this.props.author : "unknown"}-~</h1>

            <button onClick={this.props.handleClick}>~- New Quote -~</button>
            </div>
        );
    }
}

export default QuoteBox;