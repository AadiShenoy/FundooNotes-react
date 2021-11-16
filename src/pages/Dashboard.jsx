import React, { useState, useEffect } from "react";
import noteService from "../service/noteService";
import { Box } from "@mui/material";
import Note from "../components/Note";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";
import { useDispatch } from "react-redux";
import { setNotes } from "../actions/noteActions";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [title,setTitle] = useState('Fundoo Note')

  const dispatch = useDispatch()

  const handleTitle = (title) => {
    setTitle(title)
  }

  useEffect(() => {
    fetchitem();
  }, []);

  const fetchitem = () => {
    noteService
      .getNotes()
      .then((res) => {
         dispatch(setNotes(res.data.message))
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

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar handleDrawerOpen={handleDrawerOpen} title={title}/>
      <Sidebar open={open} handleTitle={handleTitle} handleDrawerOpen={handleDrawerOpen}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, margin: "5% auto" }}>
        <Note/>
      </Box>
    </Box>
  );
};

export default Dashboard;
