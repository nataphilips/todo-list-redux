import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from './modules/todos.actions'
import './App.css';
import styled from 'styled-components';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTaskName: "",
    }
  }

  taskNameChanged(event) {
    const taskName = event.target.value;
    this.setState({ newTaskName: taskName });
  }

  taskNameKeyUp(e) {
    if (e.keyCode == 13) {
      this.props.addTask(this.state.newTaskName);
      this.setState({ newTaskName: "" });
    }
  }

  render() {
    return (
      <AppBody>
        <ListBox>
          <div>
            TO-DO LIST
            <button onClick={() => this.createTask()}>Create Task</button>
            <Input
              type="text"
              value={this.state.newTaskName}
              onChange={(e) => this.taskNameChanged(e)}
              onKeyUp={(e) => this.taskNameKeyUp(e)}
            />
          </div>
          <div>
            {this.props.list.map(x => <div>{x}</div>)}
          </div>
        </ListBox>
      </AppBody>
    );
  }
}

const Flex = styled.div`
  display: flex;
`
const AppBody = styled(Flex)`
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  background-color: blue;
`
const ListBox = styled(Flex)`
  width: 300px;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding-bottom: 15px;
  border-radius: 1%;
`
const Input = styled.input`
  height: 20px;
  width: 30px;
  margin: 3px;
  padding-left: 14px;
  border: 22px solid grey;
  text-align: center;
  border-radius: 15px;
  background-color: grey;
  outline:0;
`

export default connect(
  (state) => ({
    list: state.todos.toJS().list,
  }),
  ({
    addTask,
  }),
)(App);
