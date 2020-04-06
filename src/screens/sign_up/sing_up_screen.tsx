import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export class SignUpScreen extends Component {
  render(){
    return (
      <View style={styles.root}>
        <Text>Sign up screen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    marginTop: Constants.statusBarHeight
  }
})