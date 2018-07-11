import React, { Component } from 'react';
import uuid from 'uuid';
import jQuery from "jquery";
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      todos:[]
    }
  }

  getProjects(){
    this.setState({projects: [
      {
        id:uuid.v4(),
        title: 'Die Hard',
        category: 'Good Movie'
      },
      {
        id:uuid.v4(),
        title: 'Jaws',
        category: 'Favourite'
      },
      {
        id:uuid.v4(),
        title: 'Paul Blart Mall Cop 2',
        category: 'Bad Movie'
      }
    ]});
  }

  componentWillMount(){
    this.getProjects();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr />
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
