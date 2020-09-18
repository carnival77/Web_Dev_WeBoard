import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';

export default class RegisterForm extends Component {
  constructor(){
    super();

    this.state = {
      username: "",
      password: "",
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;

    this.props.userRegistration({ username, password });
  }

  render() {
    return (
      <div className="chatapp__form--container">
        <div className="chatapp__form--modal">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} name="username" type="text" label="Username" placeholder="&#xf2c0;  아이디를 입력하세요."/>
            <input onChange={this.handleChange} name="password" type="password" label="Password" placeholder="&#xf13e; 비밀번호를 입력하세요."/>
            {
              (this.props.registrationError.length)
                ? <Alert 
                       header="오류가 발생했습니다."
                      content="적절한 아이디와 비밀 번호를 입력해주세요."
                  />
                : null
            }
            <button>회원가입</button>
          </form>
        </div>
      </div>
    )
  }
}

RegisterForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
}