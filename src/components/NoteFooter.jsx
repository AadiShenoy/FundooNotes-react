import React from "react";
import { IconButton, Snackbar, Button } from "@mui/material";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import service from "../service/noteService";
import { useDispatch } from "react-redux";
import { addTrashNote } from "../actions/noteActions";


const NoteFooter = ({ item, handleOpenSnackBar }) => {
  const dispatch = useDispatch();

  const handleTrash = () => {
    let data = {
      ...item,
      isTrash: true,
    };
    service
      .updateNotes(data, item._id)
      .then((res) => {
        if (res.data.status === 200) {
          dispatch(addTrashNote(res.data.message));
          handleOpenSnackBar(res.data.message);
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <IconButton size="small">
        <ColorLensOutlinedIcon />
      </IconButton>
      <IconButton size="small">
        <InsertPhotoOutlinedIcon />
      </IconButton>
      <IconButton size="small" onClick={handleTrash}>
        <DeleteOutlineOutlinedIcon />
      </IconButton>
    </div>
  );
};

export default NoteFooter;
