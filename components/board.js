import React, { Component } from 'react'
import {Square} from './square'
import {calculateWinner} from './game'
import { View, StyleSheet } from 'react-native';

export class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }
  
  handlePress(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onPress={() => this.handlePress(i)} 
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let victory;
    if (winner) {
      victory = 'Winner: ' + winner;
    }
    let status;
    if (winner) {
      status = 'Game Over!';
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O'); 
    }

    return (
      <View>
        <View style={styles.title}>Tic Tac Go!</View>
        <View style={styles.status}>{status}</View>
        <View style={styles.gameBoard}>
          <View style={styles.boardRow1}>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </View>
          <View style={styles.boardRow2}>
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </View>
          <View style={styles.boardRow3}>
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </View>
        </View>
        <View style={styles.victory}>{victory}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {

  },
  status: {

  },
  gameBoard: {

  },
  boardRow1: {

  },
  boardRow2: {

  },
  boardRow3: {

  }
});