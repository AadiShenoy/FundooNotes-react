import React, { useState } from "react";
import { IconButton, Tooltip, Popover, Paper, Grid } from "@mui/material";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import service from "../service/noteService";
import { useDispatch } from "react-redux";
import { addTrashNote, updateNote } from "../actions/noteActions";
import CircleIcon from "@mui/icons-material/Circle";

const colours = [
  {
    colorCode: "rgb(255, 255, 255)",
    colorName: "White",
  },
  {
    colorCode: "rgb(242, 139, 130)",
    colorName: "Red",
  },
  {
    colorCode: "rgb(215, 174, 251)",
    colorName: "Purple",
  },
  {
    colorCode: "rgb(255, 192, 203)",
    colorName: "Pink",
  },

  {
    colorCode: "rgb(167, 255, 235)",
    colorName: "Teal",
  },
  {
    colorCode: "rgb(251, 188, 4)",
    colorName: "Orange",
  },
  {
    colorCode: "rgb(174, 203, 250)",
    colorName: "Dark Blue",
  },
  {
    colorCode: "rgb(232, 234, 237)",
    colorName: "Gray",
  },
  {
    colorCode: "rgb(203, 240, 248)",
    colorName: "Blue",
  },
  {
    colorCode: "rgb(230, 201, 168)",
    colorName: "Brown",
  },
  {
    colorCode: "rgb(255, 255, 0)",
    colorName: "Yellow",
  },
  {
    colorCode: "rgb(204, 255, 144)",
    colorName: "Green",
  },
];
const NoteFooter = ({ item, handleOpenSnackBar, index }) => {
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

  const handleColor = (bgColor) => {
    let data = {
      ...item,
      color: bgColor,
    };
    service
      .updateNotes(data, item._id)
      .then((res) => {
        if (res.data.status === 200) {
          dispatch(updateNote({ data: res.data.message, index: index }));
          handlePopClose();
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err.message));
  };

  const handleImage = (image) => {
    let data = {
      ...item,
      image: image,
    };
    service
      .updateNotes(data, item._id)
      .then((res) => {
        if (res.data.status === 200) {
          dispatch(updateNote({ data: res.data.message, index: index }));
          console.log(res);
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handlePopClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const fileHandler = (event) => {
    const fd = new FormData();
    fd.append("image", event.target.files[0], event.target.files[0].name);
    service
      .setImage(fd)
      .then((res) => {
        handleImage(res.data.filename);
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Tooltip title="Change Color">
        <IconButton size="small" onClick={handlePopClick} id="color-btn">
          <ColorLensOutlinedIcon />
        </IconButton>
      </Tooltip>

      <input
        style={{ display: "none" }}
        id="raised-button-file"
        type="file"
        onChange={fileHandler}
      />
      <label htmlFor="raised-button-file">
        <Tooltip title="Upload Image">
          <IconButton component="span">
            <InsertPhotoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </label>
      <Tooltip title="Trash">
        <IconButton size="small" onClick={handleTrash}>
          <DeleteOutlineOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Paper>
          <Grid container sx={{ p: 1 }}>
            {colours.map(({ colorCode, colorName },index) => {
              return (
                <Grid item xs={3} key={index} style={{ width: "10px" }}>
                  <Tooltip title={colorName}>
                    <IconButton onClick={() => handleColor(colorCode)} id={index}>
                      <CircleIcon style={{ color: colorCode }} />
                    </IconButton>
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Popover>
    </div>
  );
};

export default NoteFooter;
