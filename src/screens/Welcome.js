import React, {useContext} from 'react';
import {
View, 
StyleSheet,
Text,
TouchableOpacity,
StatusBar
} from 'react-native';
import LottieView from 'lottie-react-native';
import { Context as AuthContext } from '../context/AuthContext';

const Welcome = ({navigation}) => {

  const {clearError} = useContext(AuthContext)

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
        marginTop: StatusBar.currentHeight
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
        width:'80%',
        height:'50%',
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
    
      },
      button:{
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
        backgroundColor:'#EFDDCF',
        width:'55%',
        height:'23%',
        borderRadius:50,
      },
      textbutton:{
        color:'#081B11',
      },
})

export default Welcome;
