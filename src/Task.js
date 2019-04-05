import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";

const Task = props => (
  <ListItem button>
    <ListItemText primary={props.index + ". " + props.item} />
    <Checkbox />
  </ListItem>
);
export default Task;
