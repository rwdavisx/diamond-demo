import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 100,
    },
});

const LetterInput = props => {
    const { classes, letter, error, handleChange } = props;
    return (
        <Grid container direction='row' justify='center' alignItems='center' wrap='nowrap' style={{ height: 100, marginTop: 20 }}>
            <Typography variant='headline' style={{ padding: 20 }}>
                Enter a letter A-Z to generate a diamond.
            </Typography>

            <form className={classes.container} noValidate autoComplete="off" style={{paddingBottom: 32}}>
                <TextField
                    error={error}
                    id="letter"
                    label="Letter"
                    className={classes.textField}
                    value={letter}
                    onChange={handleChange('letter')}
                    margin="normal"
                    inputProps={{maxlength: 1}}
                    helperText={error && 'Enter a valid letter.'}
                />
            </form>
        </Grid>
    );
};

export default withStyles(styles)(LetterInput);