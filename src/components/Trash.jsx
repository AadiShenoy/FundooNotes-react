import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";
import "../styles/home.scss";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import noteService from "../service/noteService";
import { useDispatch } from "react-redux";
import { removeTrashNote } from "../actions/noteActions";

const Trash = () => {
  const myNotes = useSelector((state) => state.allNotes.trash);
  const listView = useSelector((state) => state.allNotes.listView);
  const [hover, setHover] = useState([]);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    noteService
      .deletNote(id)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleRestore = (item) => {
    let data = {
      ...item,
      isTrash: false,
    };
    noteService
      .updateNotes(data, item._id)
      .then((res) => {
        if (res.data.status === 200) {
          dispatch(removeTrashNote(res.data.message));
          console.log("success");
        } else {
          console.log("error");
        }
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <Box className="main-container">
      <Typography
        style={{ fontStyle: "italic", marginBottom: "20px", fontSize: "17px" }}
      >
        Notes in Trash are deleted after 7 days.
      </Typography>
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
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
                {hover[index] ? (
                  <div style={{ display: "flex", justifyContent: "start" }}>
                    <IconButton
                      size="small"
                      onClick={() => handleDelete(item._id)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleRestore(item)}
                    >
                      <RestoreFromTrashIcon />
                    </IconButton>
                  </div>
                ) : (
                  <div style={{ height: "36px" }}></div>
                )}
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Trash;
