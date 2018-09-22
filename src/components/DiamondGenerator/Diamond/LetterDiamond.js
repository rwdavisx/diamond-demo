import React from 'react';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import DiamondItem from '../DiamondItem/DiamondItem';

const styles = {
    diamond: {
      paddingTop: 40,
      paddingBottom: 40,
    }
};

const LetterDiamond = props => {
    const { classes } = props;
    let { charInput } = props;
    let diamondLetters = determineLetters(charInput.toUpperCase());
    return (
        <Grid container className={classes.diamond}>
            {
                diamondLetters.map((char, i) =>
                    <Grid key={i} container justify='center' wrap='nowrap'>
                        <DiamondItem letter={char}/>
                        {
                            char !== 'A'
                            && <Grid item style={{width: calcSpacing(char)}}/>
                        }
                        {
                            char !== 'A'
                            && <DiamondItem letter={char}/>
                        }
                    </Grid>
                )
            }
        </Grid>
    )
};

const determineLetters = charInput => {
    const alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 65));
    let letters = alphabet.filter(char => char.charCodeAt(0) <= charInput.charCodeAt(0));
    let diamondLetters = letters.slice();
    letters.reverse().forEach(char =>
        char !== charInput &&
        diamondLetters.push(char)
    );
    return diamondLetters
};

const calcSpacing = char => {
    let value = Math.abs(char.charCodeAt(0) - 'A'.charCodeAt(0));
    return ((value * 2) - 1) * 24
};

export default withStyles(styles)(LetterDiamond);