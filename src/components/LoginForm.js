import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../image/WEBOARD.jpg';
import {
  Container,
  Divider,
  Dropdown,
  List,
  Menu,
  Icon,
} from 'semantic-ui-react'

export default class LoginForm extends Component {
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
    const { username, password } = this.state;
    e.preventDefault();

    this.props.userLogin({ username, password });
  }

//   render() {
//     return (
//       <div className='login-form'>
//         {/*
//         Heads up! The styles below are necessary for the correct render of this example.
//         You can do same with CSS, the main idea is that all the elements up to the `Grid`
//         below must have a height of 100%.
//       */}
//         <style>{`
//           body > div,
//           body > div > div,
//           body > div > div > div.login-form {
//             height: 100%;
//           }

//       `}</style>
//         <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
//           <Grid.Column style={{ maxWidth: 600}}>
//             <Header as='h1' color='green' textAlign='center'>
//               <Image src={logo} /> WE:BOARD
//             </Header>
//             <Form size='large'>
//               <Segment stacked>
//                 <Form.Input 
//                 fluid icon='user' 
//                 iconPosition='left' 
//                 placeholder='아이디'
//                 type='email' 
//                 onChange={this.handleEmailChange}
//                 value={this.state.email}
//                 // onChange={this.onChange}
//                 />
//                 <Form.Input
//                   fluid
//                   icon='lock'
//                   iconPosition='left'
//                   placeholder='비밀번호'
//                   type='password'
//                   onChange={this.handlePasswordChange}
//                   value={this.state.password}
//                   // onChange={this.onChange}
//                 />
// ​
//                 <Button color='green' fluid size='large'>
//                   로그인
//                 </Button>
//               </Segment>
//             </Form>
//             <Message>
//               환영합니다~<br />
//               <Link to="/signup">회원가입</Link>
//             </Message>
//           </Grid.Column>
//         </Grid>
//       </div>
//     )
//   }


  render() {
    return (
      <div className="chatapp__form--container">
               <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }

      `}</style>
        <div className="chatapp__form--modal">
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} name="username" type="text" label="Username" placeholder="&#xf2c0; 아이디"/>
              <input onChange={this.handleChange} name="password" type="password" label="Password" placeholder="&#xf13e;  비밀번호"/>
              {
                (this.props.loginError.length)
                  ? <Alert 
                      header="오류가 발생했습니다."
                      content="적절한 아이디와 비밀 번호를 입력해주세요."
                    />
                  : null
              }
              <button color='green' fluid size='large'>로그인</button>
            </form>
        </div>
      </div>
    )
  }
}

LoginForm.propTypes = {
  username: PropTypes.string,
  password: PropTypes.string,
}