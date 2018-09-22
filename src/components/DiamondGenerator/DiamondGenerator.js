import React, { Component } from 'react';
import LetterDiamond from "./Diamond/LetterDiamond";
import LetterInput from './LetterForm/LetterInput';

const reg = RegExp(/^$|^[A-Z]+$/i);

class DiamondGenerator extends Component {
    state = {
        letter: '',
        error: false
    };

    handleChange = letter => event => {
        let value = event.target.value.toUpperCase();
        this.setState({
            [letter]: value,
            error: !reg.test(value)
        });
    };

    render() {
        return (
            <React.Fragment>
                <LetterInput letter={this.state.letter} error={this.state.error} handleChange={this.handleChange}/>
                {
                    !this.state.error &&
                    <LetterDiamond charInput={this.state.letter}/>
                }
            </React.Fragment>
        );
    }
}

export default DiamondGenerator;
