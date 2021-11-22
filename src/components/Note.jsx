import { Box, Grid, Card, CardContent, Typography } from "@mui/material";
import React from "react";
import "../styles/home.scss";
import { useSelector } from "react-redux";

const Note = () => {
  const myNotes = useSelector((state) => state.allNotes.filteredNotes);
  const listView = useSelector((state) => state.allNotes.listView)

  return (
    <Box className="main-container">
      <Grid container spacing={4} justifyContent={listView?"center":null}>
        {myNotes.map((item) => {
          return (
            <Grid item xs={12}  md={listView?8:3} key={item._id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {item.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Note;
