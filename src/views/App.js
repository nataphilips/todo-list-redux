import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import styled from 'styled-components';
import styles from '../styles'
import Flex from '../components/flex'
import Project from './Project'
import { addProject } from '../modules/todos.actions'

class App extends Component {
  render() {
    return (
      <AppBody>
        <Container>
          <Header>
            <div> TO-DO LIST </div>
            <Button onClick={() => this.props.addProject()}>New Project</Button>
          </Header>
          <Projects>
            {this.props.projects.map(p => (
              <Project project={p} key={p.id} />
            ))}
          </Projects>
        </Container>
      </AppBody>
    );
  }
}

const AppBody = styled(Flex)`
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  justify-content: space-evenly;
  align-items: center;
  background-color: ${styles.colors.cornflowerBlue};
  text-align: left;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: ${styles.colors.boulder};
`
const Container = styled(Flex)`
  width: 400px;
  justify-content: space-around;
  align-items: stretch;
  flex-direction: column;
  background-color: ${styles.colors.white};
  border-radius: ${styles.dimensions.xs};
  padding: ${styles.dimensions.md};
`
const Header = styled(Flex)`
  justify-content: inherit;
  align-items: center;
  height: 40px;
  padding: ${styles.dimensions.sm} ${styles.dimensions.sm} 0px ${styles.dimensions.sm};
  color: ${styles.colors.cornflowerBlue};
  border-radius: 5px 5px 0px 0px;
  font-size: 24px;
  font-weight: bold;
`
const Projects = styled(Flex)`
  flex-direction: column;
  padding: ${styles.dimensions.sm};
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
export default connect(
  (state) => ({
    projects: state.todos.toJS().projects,
  }),
  ({
    addProject,
  }),
)(App);
