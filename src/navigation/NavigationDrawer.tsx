import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { _Routes } from './_Routes'

// Screens
import { SignUpScreen } from '../screens/sign_up/sing_up_screen'
import { SignInScreen } from '../screens/sign_in/sign_in_screen'

const Drawer = createDrawerNavigator();

export function NavigationDrawer(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="sign_in">
        <Drawer.Screen name={_Routes.signIn} component={SignInScreen} />
        <Drawer.Screen name={_Routes.signUp} component={SignUpScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}