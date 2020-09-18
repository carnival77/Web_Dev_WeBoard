import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
class Schedule extends Component {
  render() {
    return (
      <div className='schedule'>
        {/*
        Heads up! The styles below are necessary for the correct render of this example.
        You can do same with CSS, the main idea is that all the elements up to the `Grid`
        below must have a height of 100%.
      */}
        <style>{`
          html, body {
        background-color: #FFFFFF !important;
      }
      p1{
        align-content: center;
        background-color: #AFC99F;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 30em;
      }
      p1 > span {
        opacity: 0.4;
        text-align: center;
      }
      p2{
        align-content: center;
        background-color: #AFC99F;
        color: #FFFFFF;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 30em;
      }
      p2 > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    }

      `}</style>
      <Header as='h2' inverted textAlign='center' color = "green">
    WE:BOARD MONTHLY
  </Header>
  <Grid>
    <Grid.Row >
      <Grid.Column width = {4}>
        <p1>
          <span>TODOLIST</span>
        </p1>
      </Grid.Column>
      <Grid.Column width = {12}>
        <p2>
          <span>CALENDER</span>
        </p2>
      </Grid.Column>
    </Grid.Row>
  </Grid>
      </div>
    )
  }
}
export default Schedule;
