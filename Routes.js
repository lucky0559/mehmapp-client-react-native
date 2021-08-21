import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Welcome from './src/screens/Welcome'
import SignIn from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Context as AuthContext } from './src/context/AuthContext';

const Stack = createStackNavigator();

const RouteNavigation = () => {

const {state} = useContext(AuthContext)


  return (
    <NavigationContainer>
      {
        state.token === null ? (
          <Stack.Navigator
            screenOptions = {{
              headerShown: false
            }}
            initialRouteName="Welcome"
          >
            <Stack.Screen
              name='Welcome'
              component={Welcome}
            />
            <Stack.Screen
              name='SignIn'
              component={SignIn}
            />
            <Stack.Screen
              name='SignUp'
              component={SignUp}
            />
          </Stack.Navigator>
        )
        : (
          <Stack.Navigator
            screenOptions = {{
              headerShown: false
            }}
            initialRouteName = 'SignUp'
          >
            <Stack.Screen
              name='SignUp'
              component={SignUp}
            />
          </Stack.Navigator>
        )
      }
    </NavigationContainer>
  )
}


export default function App() {
  return (
    <AuthProvider>
      <RouteNavigation/>
    </AuthProvider>
  )
}
