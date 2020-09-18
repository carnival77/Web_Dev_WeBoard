import React, { Component } from 'react'
import logo from '../../image/WEBOARD.jpg';
import { Link } from 'react-router-dom';
import { login } from '../UserFunctions'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if (res) {
        this.props.history.push(`/profile`)
      }
    })
  }
  render() {
    return (
      <div className='login-form'>
        {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
        <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }

      `}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 600}}>
            <Header as='h1' color='green' textAlign='center'>
              <Image src={logo} /> WE:BOARD
            </Header>
            <Form size='large'
            noValidate onSubmit={this.onSubmit}>
              <Segment stacked>
                <Form.Input 
                fluid icon='user' 
                iconPosition='left' 
                placeholder='아이디'
                type='email' 
                onChange={this.handleEmailChange}
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  placeholder='비밀번호'
                  type='password'
                  onChange={this.handlePasswordChange}
                />
​
                <Button 
                type="submit"
                // className="btn btn-lg btn-primary btn-block"
                color='green' 
                fluid size='large'>
                  로그인
                </Button>
              </Segment>
            </Form>
            <Message>
              환영합니다~<br />
              <Link to="/signup">회원가입</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
export default Login;
