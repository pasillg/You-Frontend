import React, { Component } from 'react'
import { View, TouchableNativeFeedback, Text, StyleSheet, StyleProp } from 'react-native'

interface Props {
  children: string 
  onPress?: () => void
  style?: StyleProp<any>
}

export class Button extends Component<Props> {
  render(){
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableNativeFeedback onPress={this.props.onPress}>
          <View>
            <Text style={styles.buttonText} >{this.props.children}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    borderRadius: 80, 
    backgroundColor: '#d42056', 
    overflow: 'hidden', 
  },
  buttonText: {
    margin: 12, 
    marginHorizontal: 22, 
    textAlign: 'center', 
    color: '#fff', 
  }
})