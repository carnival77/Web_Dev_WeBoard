import React, { Component } from 'react';
import './App.css';
import Video from './pages';
// import { Home, Signup, Classroom, Monthly,Profile,Index } from './pages';
import ChatUIContainer from './components/container/ChatUIContainer';
import { CookiesProvider } from 'react-cookie';
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();

    this.state = {
      chatShown: true
    }
  }

  displayChat = () => {
    this.setState(prevState => ({
      chatShown: !prevState.chatShown
    }))
  }

  render() {
    return (
      <CookiesProvider>
        <div className="app--container">
          <h2>
            WE:BOARD
          </h2>
          {
            (this.state.chatShown)
              ? <ChatUIContainer />
              : null
          }
          <div className="app--container--btn">
            {
              (this.state.chatShown)
                ?  <button onClick={this.displayChat}>교실 나가기</button>
                :  <button onClick={this.displayChat}>교실 참여</button>
            }
          </div>
        </div>
        {/* <Router>
          <div>
            <Route exact path="/stream" component={Video} />
          </div>
        </Router> */}
      </CookiesProvider>
      
    );
  }
}

export default App;
