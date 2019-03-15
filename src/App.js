import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/Inbox';
import Checkbox from '@material-ui/core/Checkbox';

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
                   <ListItem button>

                     <ListItemText primary="Empty the dishwasher" />
                      <Checkbox/>
                   </ListItem>
                   <ListItem button>

                     <ListItemText primary="Do my homework" />
                      <Checkbox/>
                   </ListItem>
                   </List>

        </Paper>

      </div>
    );
  }
}

export default App;
