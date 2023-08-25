import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
   card: {
       backgroundColor: 'lightgrey'
   }

});

export default function Photos() {

  const classes = useStyles();

    const [photos, setPhotos] = useState([]);

    const getImages = async() => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const json = await response.json();
        // console.log(json);
        setPhotos(json);
    }

    useEffect(() => {
        getImages()
    }, []);

    return (

      <div>
        <h3>Placeholder Images</h3>
        <Grid container spacing={3}>
          {photos.map((photo) => (
            <Grid item xs={3} key={photo.id}>
              <Card className={classes.card}>
                <CardContent className="cardContent">
                  <img key={photo.id} src={photo.thumbnailUrl} alt=""></img>
                  <Typography>Name: {photo.title}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

     
      </div>
    );

   
}
