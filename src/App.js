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
            <Button onClick={() => this.createTask()}>New Project</Button>
          </Header>
          <Projects>
            {this.props.projects.map(p => (
              <Project>
                <ProjectName>{p.name}</ProjectName>
                <List>
                  {p.tasks.map(x => <Task><PlusIcon className="icon-circle" />{x}</Task>)}
                </List>
                <InputRow>
                  <PlusIcon className="icon-plus"  />
                  <Input
                    type="text"
                    placeholder="ADD"
                    value={this.state.newTaskName}
                    onChange={(e) => this.taskNameChanged(e)}
                    onKeyUp={(e) => this.taskNameKeyUp(e)}
                  />
                </InputRow>
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
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
`
const Container = styled(Flex)`
  width: 300px;
  justify-content: space-around;
  align-items: stretch;
  flex-direction: column;
  background-color: white;
  border-radius: 5px;
`
const Header = styled(Flex)`
  justify-content: inherit;
  align-items: center;
  height: 40px;
  padding: 10px 10px 0px 10px;
  background-color: white;
  color: #7B68EE;
  border-radius: 5px 5px 0px 0px;
  font-size: 24px;
  font-weight: bold;
`
const List = styled(Flex)`
  flex-direction: column;
`
const Projects = styled(Flex)`
  flex-direction: column;
  padding: 10px;
`
const Project = styled(Flex)`
  flex-direction: column;
`
const ProjectName = styled(Flex)`
  flex-direction: column;
  margin: 10px;
`
const InputRow = styled(Flex)`
  flex-direction: row;
  align-items: center;
`
const Task = styled(Flex)`
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`
const PlusIcon = styled.i`
  margin: 10px;
  font-size: 22px;
  color: #898989;
`
const Button = styled.button`
  background-color: white;
  height: 90%;
  width: 40%;
  border: 2px solid #7B68EE;
  color: #5c4eba;
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
`
const Input = styled.input`
  height: 20px;
  flex: 1;
  text-align: left;
  outline:0;
  border: none;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  color: #898989;
`
export default connect(
  (state) => ({
    projects: state.todos.toJS().projects,
  }),
  ({
    addTask,
  }),
)(App);
