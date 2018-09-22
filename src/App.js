import React, { Component } from 'react';
import './App.css';
import './components/DiamondGenerator/Diamond/LetterDiamond'
import DiamondGenerator from './components/DiamondGenerator/DiamondGenerator';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to the Letter Diamond Demo!</h1>
                </header>
                <DiamondGenerator/>
            </div>
        );
    }
}

export default App;
