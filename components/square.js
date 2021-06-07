import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';

export function Square(props) {
  return (
    <TouchableOpacity style={styles.square} onPress={props.onPress}>
      {props.value}
    </TouchableOpacity>
  );  
}

const styles = StyleSheet.create({
  square: {

  }
})