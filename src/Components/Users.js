import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
   card: {
       backgroundColor: 'lightgrey'
   }

});

export default function Users() {

    const classes = useStyles();

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setUsers(json);
    }

   useEffect(() => { getUsers() }, []);

    return (
      <div>
        <h3>List of all Users</h3>
        <Grid container spacing={2}>
          {users.map(user => (
            <Grid item xs={3} key={user.id}>
              <Card className={classes.card}>
                 <CardContent className="cardContent">
                <Typography>Name: {user.name}</Typography>
              </CardContent>
              <CardContent className="cardContent">
                <Typography>User Name: {user.username}</Typography>
              </CardContent>
              <CardContent className="cardContent">
                <Typography>email: {user.email}</Typography>
              </CardContent>
              <CardContent className="cardContent">
                <Typography>Website: {user.website}</Typography>
              </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
}
