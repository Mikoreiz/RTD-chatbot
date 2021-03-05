import React, { Component } from "react";
import "./App.css";

import { Widget, addResponseMessage } from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import axios from "axios"

const id = Math.random()

class App extends Component {
  componentDidMount() {
    addResponseMessage("Welcome! I'm here to assist you!")
    addResponseMessage("Reply: \n\nStop (stop #) - for stop times \n\n Route (rte #) - for route info \n\n Or ask a question/make a request")
  }

  handleNewUserMessage(message) {
    axios.post("https://chatbot-backend-4387.twil.io/chat", {
      message,
      id
    }).then((response) => {
      response.data.response.says.forEach((say) => {
        addResponseMessage(say.text)
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Widget title="San Joaquin RTD" subtitle="Chat" showTimeStamp={false} handleNewUserMessage={this.handleNewUserMessage} />
      </div>
    );
  }
}

export default App;