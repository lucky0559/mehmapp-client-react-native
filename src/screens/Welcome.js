import React, {useContext, useEffect} from 'react';
import {
View,
StyleSheet,
Text,
TouchableOpacity,
StatusBar
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Context as AuthContext } from '../context/AuthContext';
import * as ScreenOrientation from 'expo-screen-orientation'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const Welcome = ({navigation}) => {

  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

  const {clearError, localSignIn} = useContext(AuthContext)

  useEffect(() => {
    localSignIn();
},[])

    const registerClick = () => {
      clearError()
        navigation.replace('SignUp')
      }

      const loginClick = () => {
        clearError()
        navigation.replace('SignIn')
      }


    return (

            <View
        style={styles.screen}>
          <View
          style={styles.lottieview}>
            <LottieView
            source={require('../assets/LottieFiles/hello-bubble.json')}
            autoPlay
            loop
            style={styles.lottiebubble}/>
            <LottieView
            source={require('../assets/LottieFiles/hello.json')}
            autoPlay
            loop/>
          </View>

          <View
          style={styles.loginform}>
            <View
            style={styles.textcontainer}>
            <Text
            style={styles.text}>
              Feel better. Sleep better.
            </Text>

          <TouchableOpacity
          style={styles.button}
          onPress={loginClick}>
            <Text
            style={styles.textbutton}>
              SIGN IN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
          style={styles.button}
          onPress={registerClick}>
            <Text
            style={styles.textbutton}>
              REGISTER
            </Text>
          </TouchableOpacity>

            </View>

          </View>


        </View>
    );
}

const styles = StyleSheet.create({
    screen:{
        backgroundColor:'#EFDDCF',
        flex:1,
        paddingTop: StatusBar.currentHeight
      },
      lottieview: {
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
      },
      loginform:{
        backgroundColor:'#2CD681',
        flex:1.2,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
      },
      lottiebubble:{
        top:0,
        position:'absolute',
        left:0,
        width:wp(70),
        height:hp(13),
        alignItems:'center',
        justifyContent:'center'
      },
      textcontainer:{
        justifyContent:'center',
        alignItems:'center',
      },
      text: {
        fontSize:15,
        color:'#FFFFFF',
        marginTop: 20,
        fontFamily: 'Roboto_Regular'
      },
      button:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
        backgroundColor:'#EFDDCF',
        width:wp(50),
        height:hp(7),
        borderRadius:50,
      },
      textbutton:{
        color:'#081B11',
        fontFamily: 'Lemon'
      },
})

export default Welcome;
