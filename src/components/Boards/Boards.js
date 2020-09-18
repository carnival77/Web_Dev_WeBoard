// import React, { Component } from 'react'
// import { Link } from 'react-router-dom';
// import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
// class Boards extends Component {
//   render() {
//     return (
//       <div className='boards'>
//         {/*
//         Heads up! The styles below are necessary for the correct render of this example.
//         You can do same with CSS, the main idea is that all the elements up to the `Grid`
//         below must have a height of 100%.
//       */}
//       <style>{`
//         html, body {
//       background-color: #FFFFFF !important;
//     }
//     p1{
//       align-content: center;
//       background-color: #AFC99F;
//       color: #FFFFFF;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       min-height: 20em;
//     }
//     p1 > span {
//       opacity: 0.4;
//       text-align: center;
//     }
//     p2{
//       align-content: center;
//       background-color: #AFC99F;
//       color: #FFFFFF;
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       min-height: 10em;
//     }
//     p2 > span {
//       opacity: 0.4;
//       text-align: center;
//     }
//   }
//   }

//     `}</style>
//     <Header as='h2' inverted textAlign='center' color = "green">
//   WE:BOARD
// </Header>
// <Grid>
//   <Grid.Row >
//     <Grid.Column width = {1}>
//       <p1>
//         <span>Notice</span>
//       </p1>
//     {/* </Grid.Column>
//     <Grid.Column width = {12}>
//       <p1>
//         <span>ZOOM</span>
//       </p1>
//     </Grid.Column>
//   </Grid.Row>

//   <Grid.Row>
//     <Grid.Column width={12}>
//       <p2>
//         <span>Q&A</span>
//       </p2>
//     </Grid.Column>
//     <Grid.Column width={4}>
//       <p2>
//         <span>MEMO</span>
//       </p2> */}
//     </Grid.Column>
//   </Grid.Row>
// </Grid>
//     </div>
//     )
//   }
// }
// export default Boards;


import React, { Component } from "react";
import { getList, addToList, deleteItem, updateItem } from "./ListFunctions";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      term: "",
      editDisabled: false,
      items: []
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.getAll();
  }

  onChange = event => {
    this.setState({ term: event.target.value, editDisabled: "disabled" });
    console.log(this.state.editDisabled);
  };

  getAll = () => {
    getList().then(data => {
      this.setState(
        {
          term: "",
          items: [...data]
        },
        () => {
          console.log(this.state.items);
        }
      );
    });
  };

  onSubmit = e => {
    e.preventDefault();
    addToList(this.state.term).then(() => {
      this.getAll();
    });
  };

  onUpdate = e => {
    e.preventDefault();
    updateItem(this.state.term, this.state.id).then(() => {
      this.getAll();
    });
  };

  onEdit = (item, itemid, e) => {
    e.preventDefault();
    this.setState({
      id: itemid,
      term: item
    });
  };

  onDelete = (val, e) => {
    e.preventDefault();
    deleteItem(val);

    var data = [...this.state.items];
    data.filter(function(item, index) {
      if (item[1] === val) {
        data.splice(index, 1);
      }
	  return true;
    });
    this.setState({ items: [...data] });
  };

  render() {
    return (
      <div className="col-md-12">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">공지 사항</label>
            <div className="row">
              <div className="col-md-9">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={this.state.term || ""}
                  onChange={this.onChange.bind(this)}
                />
              </div>
              {/* <div className="col-md-2">
                <button
                  className="btn btn-primary"
                  onClick={this.onUpdate.bind(this)}
                >
                  수정
                </button>
              </div> */}
            </div>
          </div>
          <button
            type="submit"
            onClick={this.onSubmit.bind(this)}
            className="btn btn-success btn-block"
          >
            작성
          </button>
        </form>
        <table className="table">
          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <td className="text-left">{item[0]}</td>
                <td className="text-right">
                  {/* <button
                    href=""
                    className="btn btn-info mr-1"
                    disabled={this.state.editDisabled}
                    onClick={this.onEdit.bind(this, item[0], item[1])}
                  >
                    Edit
                  </button> */}
                  <style>{`
                   p1{
                     float: right;
                   }`
                    }
                 
                  </style>
                  <div 
                  
                  align="right">
                    <p1>
                    <button
                      
                      href=""
                      className="btn btn-danger"
                      onClick={this.onDelete.bind(this, item[1])}
                    >
                      삭제
                    </button>
                    </p1>
                  </div>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Board;
