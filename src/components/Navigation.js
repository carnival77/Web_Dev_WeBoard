import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Button,
  Icon,
} from 'semantic-ui-react'
import logo from '../image/WEBOARD.jpg';

const Navigation = (props) => {
  const { displayForms, id, userLogout, username, guestUsername, closeForm } = props;

  return (
    <div className="chatapp__navigation--container">
       <Menu fixed='top'inverted >
      <Container>
        <Menu.Item as='a' header >
          {/* <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} /> */}
          WE:BOARD
        </Menu.Item>
        {/* <Menu.Item as='a'>
          <Link to="/Classroom"> 
         <Icon name = "student"/> 교실</Link> 
        </Menu.Item>
        <Menu.Item as='a'>
          <Link to="/Monthly">
          <Icon name = "calendar"/> 달력</Link>
        </Menu.Item> */}


      </Container>
    </Menu>
      <div className="chatapp__navigation--logo" onClick={() => {if(!username){closeForm()}}}>
          
          {/* WeBoard */}
      </div>
      <div className="chatapp__navigation--user">
            {
              (username)
                ? <span>{username}</span>
                : null
            }
            {
              (guestUsername)
                ? <span>Guest-{guestUsername}</span>
                : null
            }
            {
              (id)
                ? <div>
                <button onClick={userLogout}>로그아웃</button>
                <button type="button" onclick="stream">화상 통화</button>
                </div>
                : <div>
                  <button onClick={() => {displayForms("login")}}>로그인</button>
                  <button onClick={() => {displayForms("register")}}>회원 가입</button>
                  </div>
            }
      </div>
    </div>
  )
}

export default Navigation;