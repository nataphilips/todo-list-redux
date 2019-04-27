import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../modules/todos.actions'
import styled from 'styled-components';
import styles from '../styles';
import Flex from '../components/flex';
import uuidv4 from 'uuid/v4';
import Task from './Task'

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newTaskName: "",
    }
  }

  checkedTasks() {
    return this.props.project.tasks.filter(x => x.checked);
  }
  uncheckedTasks() {
    return this.props.project.tasks.filter(x => !x.checked);
  }
  taskNameChanged(event) {
    const taskName = event.target.value;
    this.setState({ newTaskName: taskName });
  }
  taskNameKeyUp(e) {
    if (e.keyCode == 13) {
      this.props.addTask(this.props.project.id, this.state.newTaskName);
      this.setState({ newTaskName: "" });
    }
  }

  render() {
    return (
      <Container>
        <ProjectName>{this.props.project.name}</ProjectName>
        <List>
          {this.uncheckedTasks().map(x =>
            <Task task={x} key={x.id} />
          )}
          <TasksDoneContainer hasItems={this.checkedTasks().length > 0}>
          {this.checkedTasks().map(x =>
            <Task task={x} key={x.id} projectId={this.props.project.id} />
          )}
          </TasksDoneContainer>
        </List>
        <InputRow>
          <PlusIcon className="icon-plus" />
          <Input
            type="text"
            placeholder="ADD"
            value={this.state.newTaskName}
            onChange={(e) => this.taskNameChanged(e)}
            onKeyUp={(e) => this.taskNameKeyUp(e)}
          />
        </InputRow>
      </Container>
    )
  }
}

const List = styled(Flex)`
  flex-direction: column;
  padding-left: ${styles.dimensions.sm};
`
const TasksDoneContainer = styled(Flex)`
  flex-direction: column;
  padding-left: ${styles.dimensions.sm};
  ${props => props.hasItems && `
    border-top: 2px dashed ${styles.colors.dustyGray};
    padding-top: 10px;
  `}
`
const Container = styled(Flex)`
  flex-direction: column;
`
const ProjectName = styled(Flex)`
  flex-direction: column;
  margin: ${styles.dimensions.sm};
  text-transform: uppercase;
  font-weight: bold;
`
const InputRow = styled(Flex)`
  flex-direction: row;
  align-items: center;
  padding-left: ${styles.dimensions.sm};
`
const Button = styled.button`
  background-color: white;
  height: 90%;
  width: 40%;
  border: 2px solid ${styles.colors.cornflowerBlue};
  color: ${styles.colors.blueViolet};
  border-radius: ${styles.dimensions.sm};
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
`
const Input = styled.input`
  height: 20px;
  flex: 1;
  text-align: left;
  outline:0;
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
`
const PlusIcon = styled.i`
  margin: ${styles.dimensions.xs};
  font-size: 16px;
  color: ${styles.colors.dustyGray};
`
export default connect(
  (state) => ({
  }),
  ({
    addTask,
  }),
)(Project);
