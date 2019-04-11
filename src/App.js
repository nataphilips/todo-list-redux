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
        <Container>
          <Header>
            <div> TO-DO LIST </div>
            <button onClick={() => this.createTask()}>+</button>
          </Header>
          <Projects>
            {this.props.projects.map(p => (
              <Project>
                <ProjectName>{p.name}</ProjectName>
                <List>
                  {p.tasks.map(x => <div>{x}</div>)}
                </List>
                <Input
                  type="text"
                  placeholder="ADD"
                  value={this.state.newTaskName}
                  onChange={(e) => this.taskNameChanged(e)}
                  onKeyUp={(e) => this.taskNameKeyUp(e)}
                />
              </Project>
            ))}
          </Projects>


        </Container>
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
  background-color: #7B68EE;
  text-align: left;
`
const Container = styled(Flex)`
  width: 300px;
  justify-content: space-around;
  align-items: stretch;
  flex-direction: column;
  background-color: white;
`
const Header = styled(Flex)`
  justify-content: space-between;
  padding: 10px;
  background-color: #2072B5;
  color: white;
`
const List = styled(Flex)`
  flex-direction: column;
  padding: 15px;
`
const Projects = styled(Flex)`
  flex-direction: column;
  padding: 15px;
`
const Project = styled(Flex)`
  flex-direction: column;
`
const ProjectName = styled(Flex)`
  flex-direction: column;
`

const Input = styled.input`
  height: 20px;
  flex: 1;
  text-align: left;
  outline:0;
  padding: 10px 10px;
  border: 1px solid grey;
`
export default connect(
  (state) => ({
    projects: state.todos.toJS().projects,
  }),
  ({
    addTask,
  }),
)(App);
