import React from 'react';

class LogIn extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            username: '',
            password: ''
                     };
      }
      myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
      myChangePassword = (event) => {
        this.setState({password: event.target.value});
      }
      render() {
        return (
          <form>
          <h1>Hello {this.state.username}</h1>
          <p>Enter your name:</p>
          <input
            type='text'
            onChange={this.myChangeHandler}
          />
          <p>Enter your password:</p>
          <input
            type='password'
            onChange={this.myChangePassword}
          />
          <button class="send" type="submit">Mandar</button>
          </form>
        );
    }
}

export default LogIn;