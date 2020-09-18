import React from 'react'
import Login from '../components/Login';
import Boards from '../components/Boards';
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
} from 'semantic-ui-react'
import logo from '../image/WEBOARD.jpg';

const FixedMenuLayout = () => (
  <div>
  <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' header>
          <Image size='mini' src={logo} style={{ marginRight: '1.5em' }} />
          WE:BOARD
        </Menu.Item>
        <Menu.Item as='a'>
        <Link to="/classroom">교실</Link>
        </Menu.Item>
​
        <Dropdown item simple text='Dropdown'>
          <Dropdown.Menu>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Header Item</Dropdown.Header>
            <Dropdown.Item>
              <i className='dropdown icon' />
              <span className='text'>Submenu</span>
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>List Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </Menu>
​
    <Container text style={{ marginTop: '7em' }}>
      <Boards/>
    </Container>



  </div>
)

export default FixedMenuLayout
