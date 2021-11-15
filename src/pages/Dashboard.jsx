import React, { useState, useEffect } from "react";
import noteService from "../service/noteService";
import { Box } from "@mui/material";
import Note from "../components/Note";
import Appbar from "../components/Appbar";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [open, setOpen] = useState(false);
  const [note, setNote] = useState([]);
  const [filteredNote, setFilteredNote] = useState([]);
  const [search, setSearch] = useState("");
  const [title,setTitle] = useState('Fundoo Note')

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

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
        console.log(res);
        setNote(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setFilteredNote(
      note.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  }, [search, note]);

  const handleDrawerOpen = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Appbar handleDrawerOpen={handleDrawerOpen} handleSearch={handleSearch} title={title}/>
      <Sidebar open={open} handleTitle={handleTitle}/>
      <Box component="main" sx={{ flexGrow: 1, p: 3, margin: "5% auto" }}>
        <Note notes={filteredNote} />
      </Box>
    </Box>
  );
};

export default Dashboard;
