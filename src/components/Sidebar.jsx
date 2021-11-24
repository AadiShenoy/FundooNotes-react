import React from "react";
import { styled } from "@mui/material/styles";
import { List, ListItem } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import LightbulbOutlinedIcon from "@mui/icons-material/LightbulbOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { useDispatch } from "react-redux";
import { setTitle } from "../actions/noteActions";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  borderRight: "0px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  borderRight: "0px",
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const ListItems = styled(ListItem)`
  &:hover {
    background-color: #e6e8e6;
    border-radius:0px 25px 25px 0px
  }
  &:focus {
    background-color: #feefc3;
    border-radius:0px 25px 25px 0px
  }
`;

const Sidebar = ({ open }) => {
  const dispatch = useDispatch();
  const handleTitle = (title) => {
    dispatch(setTitle(title));
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader />
      <List>
        <ListItems button onClick={() => handleTitle("Notes")} component={Link} to="/Dashboard">
          <ListItemIcon>
            <LightbulbOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Notes" />
        </ListItems>
        <ListItems button onClick={() => handleTitle("Reminders")}>
          <ListItemIcon>
            <NotificationsNoneOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Reminders" />
        </ListItems>
        <ListItems button onClick={() => handleTitle("Label")}>
          <ListItemIcon>
            <NoteOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Label" />
        </ListItems>
        <ListItems button onClick={() => handleTitle("Edit labels")}>
          <ListItemIcon>
            <EditOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Edit labels" />
        </ListItems>
        <ListItems button onClick={() => handleTitle("Archive")}>
          <ListItemIcon>
            <ArchiveOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Archive" />
        </ListItems>
        <ListItems button onClick={() => handleTitle("Trash")} component={Link} to="/trash">
          <ListItemIcon>
            <DeleteOutlineOutlinedIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItems>
      </List>
    </Drawer>
  );
};

export default Sidebar;
