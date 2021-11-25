import React, { useState, useEffect } from "react";
import noteService from "../service/noteService";
import { Box } from "@mui/material";
import Note from "../components/Note";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { setNotes, setTrashNotes } from "../actions/noteActions";
import AddNote from "../components/AddNote";
import "../styles/home.scss";
import { useSelector } from "react-redux";
import Trash from "../components/Trash";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const title = useSelector((state) => state.allNotes.title);
  useEffect(() => {
    fetchitem();
  }, []);

  const fetchitem = () => {
    noteService
      .getNotes()
      .then((res) => {
        dispatch(setNotes(res.data.message.filter((item) => !item.isTrash)));
        dispatch(
          setTrashNotes(res.data.message.filter((item) => item.isTrash))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDrawerOpen = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  const renderOption = () => {
    switch (title) {
      case "Notes":
        return (
          <>
            <AddNote />
            <Note />
          </>
        );
      case "Trash":
        return <Trash />;
      default:
        return (
          <>
            <AddNote />
            <Note />
          </>
        );
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar handleDrawerOpen={handleDrawerOpen} />
      <Sidebar open={open} />
      <Box component="main" className="note-container">
        {renderOption()}
      </Box>
    </Box>
  );
};

export default Dashboard;
