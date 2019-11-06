import React, { Component } from 'react';
import './App.css';
import QuoteBox from './QuoteBox';
import quotes from './quotes';

class app extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author
    }
  }


getRandomQuote() {
  const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomQuoteIndex];
};

handleClick = () => {
  const randomQuote = this.getRandomQuote();

  this.setState({
    quote: randomQuote.quote,
    author: randomQuote.author
  });
};

render() {
  return (
    <div class="quoteBox">
      <QuoteBox
        quote={this.state.quote}
        author={this.state.author}
        handleClick={this.handleClick}
      />
    </div>
  );
}
}

export default app;
