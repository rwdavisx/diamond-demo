import React from "react";
import {withStyles} from '@material-ui/core';
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";

const styles = {
    card: {
        height: 24,
        width: 24,
        color: '#38dcb6',
        backgroundColor: '#343433',
        fontSize: 12,
        marginTop: 10,
        marginBottom: 10,
    },
};

const DiamondItem = props => {
    const {classes} = props;
    const {letter} = props;
    return (
        <Grid item container
              component={Card}
              className={classes.card}
              alignItems='center'
              justify='center'
        >
            {letter}
        </Grid>
    )
};

export default withStyles(styles)(DiamondItem)