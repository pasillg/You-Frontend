import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import Constants from 'expo-constants'
import { Button } from '../../components/button'
import { NavigationProp } from '@react-navigation/native'
import { _Routes } from '../../navigation/_Routes'

interface Props {
  navigation: NavigationProp<any>
}

export class SignInScreen extends Component<Props> {
  constructor(props: Props){
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

  onPressSignUp(navigation: NavigationProp<any>){
    navigation.navigate(_Routes.signUp)
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
    // We need to extract navigation prop over here and pass it to the functions that need it
    // don't know why, but it doesn't work when you extract it within the function
    const { navigation } = this.props

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
            <Button style={[styles.button, { marginBottom: 20, }]} onPress={() => this.onPressSignUp(navigation)}>Registrieren</Button>           
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