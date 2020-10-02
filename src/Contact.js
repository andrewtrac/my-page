import React from "react";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Avatar from "@material-ui/core/Avatar";

export default function Contact(props) {
  const { open, handleClose } = props;

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Contact Information</DialogTitle>
      <List>
        <ListItem button onClick={e => window.location.href = "mailto:andrewtrac87@hotmail.com"}>
          <ListItemAvatar>
            <Avatar>
              <EmailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"andrewtrac87@hotmail.com"} />
        </ListItem>
        <ListItem button onClick={e => window.open("https://github.com/andrewtrac")}>
          <ListItemAvatar>
            <Avatar>
              <GitHubIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"https://github.com/andrewtrac"} />
        </ListItem>
        <ListItem button onClick={e => window.open("http://www.linkedin.com/in/andrew-trac")}>
          <ListItemAvatar>
            <Avatar>
              <LinkedInIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={"http://www.linkedin.com/in/andrew-trac"} />
        </ListItem>
      </List>
    </Dialog>
  );
}
