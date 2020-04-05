import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Button } from '../../components/button'

export class SignInScreen extends Component {
  constructor(props: any){
    super(props)

    // We need to bind "this" in order to access this for setState within the functions
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangePassword = this.onChangePassword.bind(this)
  }

  state = {
    password: '', 
    username: '', 
  }

  onPressSignIn(){
    alert('eingeloggt')
  }

  onPressSignUp(){
    alert('registrieren')
  }

  onChangeUsername(text: string){
    this.setState({
      username: text
    })
  }

  onChangePassword(text: string){
    this.setState({
      password: text
    })
  }

  render(){
    return (
      <View style={styles.root}>
        {/* We use this container to center the content vertically and horizontally */}
        <View style={styles.container}>
          <TextInput 
            placeholder='Benutzername' 
            value={this.state.username} 
            style={[styles.textBox, { marginBottom: 12 }]} 
            onChangeText={this.onChangeUsername} 
          />
          
          <TextInput 
            placeholder='Passwort' 
            value={this.state.password} 
            style={[styles.textBox, { marginBottom: 12 }]} 
            onChangeText={this.onChangePassword}
          />

          <View style={{width: '40%'}}>
            <Button style={[styles.button, { marginBottom: 12 }]} onPress={this.onPressSignIn}>Anmelden</Button>
            <Button style={[styles.button, { marginBottom: 20, }]} onPress={this.onPressSignUp}>Registrieren</Button>           
          </View>
        </View> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1, 
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#d8d8d8', 
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  container: {
    width: '100%', 
    alignItems: 'center', 
    marginTop: 150, 
  },
  textBox: {
    backgroundColor: '#fff', 
    borderRadius: 80, 
    width: '80%',
    padding: 12,
  }, 
  button: {
    width: '100%', 
  }, 
  buttonText: {
    margin: 12, 

    color: '#fff'
  }
})