import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import React, { useState } from "react";
import "../styles/home.scss";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import Popup from "../components/Popup";
import NoteFooter from "../components/NoteFooter";

const Note = () => {
  const myNotes = useSelector((state) => state.allNotes.filteredNotes);
  const listView = useSelector((state) => state.allNotes.listView);
  const [isOpen, setIsOpen] = useState(false);
  const [updateData, setUpdateData] = useState({});
  const [hover, setHover] = useState([]);

  const handleUpdate = (item, index) => {
    let data = {
      index: index,
      item: item,
    };
    setUpdateData(data);
    setIsOpen(!isOpen);
  };

  const handleClose = (item) => {
    setIsOpen(!isOpen);
  };

  return (
    <Box className="main-container">
      <Grid container spacing={4} justifyContent={listView ? "center" : null}>
        {myNotes.map((item, index) => {
          return (
            <Grid item xs={12} md={listView ? 8 : 3} key={item._id}>
              <Card
                elevation={hover[index] ? 6 : 1}
                onMouseEnter={() => {
                  setHover({ [index]: true });
                }}
                onMouseLeave={() => {
                  setHover({ [index]: false });
                }}
              >
                <CardContent onClick={() => handleUpdate(item, index)}>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
                {hover[index] ? (
                  <NoteFooter item={item} index={index} />
                ) : (
                  <div style={{ height: "35px" }}></div>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
      {isOpen && <Popup handleClose={handleClose} item={updateData} />}
    </Box>
  );
};

export default Note;
