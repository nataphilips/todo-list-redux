import React, { Component } from 'react';
import { connect } from 'react-redux';
import { crossTask } from '../modules/todos.actions'
import styled from 'styled-components';
import styles from '../styles';
import Flex from '../components/flex';
import uuidv4 from 'uuid/v4';

class Task extends Component {
  checkOut(taskId) {
    this.props.crossTask(this.props.projectId, taskId);
    this.setState({ haveCheckedItems: true });
  }

  render() {
    return (
      <TaskContainer done={this.props.task.checked} key={this.props.task.id}>
        {!this.props.task.checked && <PlusIcon className="icon-circle" onClick={() => this.checkOut(this.props.task.id)} />}
        {this.props.task.checked && <PlusIcon className="icon-check-circle" />}
        <span className="task-name">{this.props.task.name}</span>
      </TaskContainer>
    )
  }
}

const TaskContainer = styled(Flex)`
  flex-direction: row;
  align-items: center;
  color: ${styles.colors.dustyGray};
  font-size: 16px;
  padding-top: 3px;
  padding-bottom: 3px;

  .task-name {
    ${props => props.done && `
      text-decoration: line-through;
    `}
  }
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
    crossTask,
  }),
)(Task);
