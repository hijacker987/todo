import React, { Component } from "react";
import "./App.css";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Task from "./Task.js";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
const tasks = [
  "empty the dishwasher",
  "do my homework",
  "feed the dog",
  "mow the lawn"
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Paper className="paper">
          <Toolbar>
            <Typography varient="h4" color="inherit">
              To Do:
            </Typography>
          </Toolbar>
          <List component="nav">
            {tasks.map((task, index) => {
              return <Task item={task} index={index + 1} />;
            })}
          </List>
          <Fab color="primary">
            <AddIcon />
          </Fab>
        </Paper>
      </div>
    );
  }
}

export default App;
