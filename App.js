import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Welcome from './src/screens/Welcome'
import SignIn from './src/screens/Login'
import SignUp from './src/screens/SignUp'
import Home from './src/screens/Home';
import Form from './src/screens/Form';
import Form2 from './src/screens/Form2';
import Tips from './src/screens/Tips'
import ForgotPassword from './src/screens/ForgotPassword'
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as AssessmentProvider } from './src/context/AssessmentContext'
import { Context as AuthContext } from './src/context/AuthContext';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading'

const Stack = createStackNavigator();

const customFonts = {
  Lemon: require('./src/assets/fonts/LEMONMILK-Regular.otf'),
  Roboto_Regular: require('./src/assets/fonts/Roboto-Regular.ttf'),
  Roboto_Bold: require('./src/assets/fonts/Roboto-Bold.ttf'),
  Roboto_Medium: require('./src/assets/fonts/Roboto-Medium.ttf'),
  Roboto_Thin: require('./src/assets/fonts/Roboto-Thin.ttf'),
  Roboto_Light: require('./src/assets/fonts/Roboto-Light.ttf')
}


const RouteNavigation = () => {

  

const {state} = useContext(AuthContext)



const [fontsLoaded] = useFonts(customFonts)

if(!fontsLoaded) {
  return <AppLoading/>
}

else {

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
            <Stack.Screen
              name='ForgotPassword'
              component={ForgotPassword}
            />
            {/* <Stack.Screen
              name='Home'
              component={Home}
            />
            <Stack.Screen
              name='Form'
              component={Form}
            />
            <Stack.Screen
              name='Form2'
              component={Form2}
            />
            <Stack.Screen
              name='Tips'
              component={Tips}
            /> */}
          </Stack.Navigator>
        )
        : (
          <Stack.Navigator
            screenOptions = {{
              headerShown: false
            }}
            initialRouteName = 'Home'
          >
            <Stack.Screen
              name='Home'
              component={Home}
            />
            <Stack.Screen
              name='Form'
              component={Form}
            />
            <Stack.Screen
              name='Form2'
              component={Form2}
            />
            <Stack.Screen
              name='Tips'
              component={Tips}
            />
            {/* <Stack.Screen
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
            /> */}
          </Stack.Navigator>
        )
      }
    </NavigationContainer>
  )
    }
}

export default function App() {
  return (
    <AssessmentProvider>
      <AuthProvider>
        <RouteNavigation/>
      </AuthProvider>
    </AssessmentProvider>
  )
}
