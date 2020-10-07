import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import Contact from "./Contact"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "./styles/Navbar.scss";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import PersonIcon from '@material-ui/icons/Person';
import FolderIcon from '@material-ui/icons/Folder';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';


export default function NavbarSmall(props) {
  const { updatePage, max769 } = props;
  const [openDrawer, setOpenDrawer] = useState(false);
  const [open, setOpen] = useState(false)


  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };


  const handleContactOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };


  return (
    <div className="Navbar">
      <div>
        <IconButton>
          <MenuOutlinedIcon onClick={handleDrawerOpen} />
        </IconButton>
      </div>
      <div className="links">
        <span
          className="name"
          style={{ marginLeft: "0px", marginRight: "40px" }}
        >
          Andrew Trac
        </span>
      </div>

      <Drawer variant="persistent" anchor="left" open={openDrawer}>
        <div>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={e => updatePage("About")}>
            <ListItemIcon><PersonIcon/></ListItemIcon>
            <ListItemText primary={"About Me"} />
          </ListItem>
          <ListItem button onClick={e => updatePage("Portfolio")}>
            <ListItemIcon><FolderIcon/></ListItemIcon>
            <ListItemText primary={"Portfolio"} />
          </ListItem>
          <ListItem button onClick={e => window.open("https://resume.creddle.io/resume/dqqhnev3xgi")}>
            <ListItemIcon><DescriptionIcon/></ListItemIcon>
            <ListItemText primary={"CV"} />
          </ListItem>
          <ListItem button onClick={e => handleContactOpen()}>
            <ListItemIcon><ContactMailIcon/></ListItemIcon>
            <ListItemText primary={"Contact"} />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <Contact max769={max769} open={open} handleClose={handleClose}/>
    </div>
  );
}
