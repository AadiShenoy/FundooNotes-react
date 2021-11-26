import React, { useState } from "react";
import { Button, InputBase,Dialog,DialogActions,DialogContent,DialogTitle } from "@mui/material";
import "../styles/home.scss";
import service from "../service/noteService";
import { useDispatch } from "react-redux";
import { updateNote } from "../actions/noteActions";

const Popup = (props) => {
  const [title, setTitle] = useState(props.item.item.title);
  const [content, setContent] = useState(props.item.item.content);
  const dispatch = useDispatch();

  const handleUpdateNotes = () => {
    let data = {
      title: title,
      content: content,
    };
    props.handleClose();
    service
      .updateNotes(data, props.item.item._id)
      .then((res) => {
        if (res.data.status === 200) {
          console.log(res);
          dispatch(updateNote({data:res.data.message,index:props.item.index}));
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <Dialog open={true} onClose={props.handleClose}>
      <DialogTitle>
        <InputBase
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          inputProps={{
            style: {
              minHeight: "36px",
              width: "40vw",
              fontWeight: "bold",
              fontSize: "25px",
            },
          }}
        />
      </DialogTitle>
      <DialogContent>
        <InputBase
          type="text"
          placeholder="Take a note..."
          fullWidth
          value={content}
          multiline={true}
          onChange={(e) => setContent(e.target.value)}
          inputProps={{
            style: { minHeight: "36px" },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          style={{ color: "black", textTransform: "none" }}
          onClick={handleUpdateNotes}
        >
          Submit
        </Button>
        <Button
          style={{ color: "black", textTransform: "none" }}
          onClick={props.handleClose}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
