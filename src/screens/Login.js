import React, { useState, useContext, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  ToastAndroid,
  TouchableOpacity,
  Pressable,
  Dimensions,
  StatusBar,
  BackHandler,
} from "react-native";
import Header from "../utils/HeaderRegisterLogin";
import Loading from "../utils/Loading";
import { Context as AuthContext } from "../context/AuthContext";
import { useFocusEffect } from "@react-navigation/core";
import * as ScreenOrientation from 'expo-screen-orientation'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { Ionicons } from '@expo/vector-icons';




const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

const Login = ({navigation}) => {


  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

useFocusEffect(
  useCallback(() => {
    const onBackPress = () => {
      navigation.navigate('Welcome')
      return true
    }
    BackHandler.addEventListener('hardwareBackPress', onBackPress)
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
  },[])
)



const {state:{error}, signIn, clearError} = useContext(AuthContext)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginPending, setLoginPending] = useState(false)

    const [hidePassword, setHidePassword] = useState(true)

    
    const emailHandler = (textvalue) => {
      setEmail(textvalue)
    }
    
    const passwordHandler = (textvalue) => {
      setPassword(textvalue)
    }
    
       const loginClick = () => {


           
        clearError()
    
            if(email.length != 0 && password.length !=0)
            {
              
              if(!email.includes('@cvsu.edu.ph'))
              {
                ToastAndroid.show('Please provide valid CvSU Email',
                ToastAndroid.SHORT);
              }
        
              else if(password.length <= 6)
              {
                ToastAndroid.show('Please provide 6 or more characters for password',
                ToastAndroid.SHORT);
              }
              
        
              else
              {
    
                try {
    
    
                setTimeout(() => {
        
                  signIn({email, password})
    
                  setLoginPending(false)

                  
                  
              }, 2500);
        
        
              setLoginPending(true)
        
              }
    
              catch(error)
              {
                console.log(error);
                ToastAndroid.show(
                    "Check your Internet Connection",
                    ToastAndroid.SHORT
                  );
              }
    
            }
    
        
            }
        
            
            
            else {
              
        
              ToastAndroid.show(
                "Empty Field/s",
                ToastAndroid.SHORT
              );
            }
    
            
            
    
        }
    
        const registerText = () => {
          clearError()
          navigation.replace('SignUp')
        }

        const forgotPassword = () => {
          clearError();
          navigation.navigate('ForgotPassword')
        }


    return (
        <>
            <DismissKeyboard>
               
              <View style={styles.screen}>
                <View style={styles.row}>
                  <View>
                    <Header />
                  </View>
                </View>
        
        
        
                <View style={styles.formParent}>
                  <View style={styles.form}>
                    <TextInput
                      placeholder="CvSU Email"
                      placeholderTextColor='#081B11'
                      style={styles.fonts}
                      keyboardType="email-address"
                      onChangeText={(textvalue) => emailHandler(textvalue)}
                      autoCapitalize='none'
                    />
                    <View style={styles.passRow}>
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor='#081B11'
                      style={styles.passFonts}
                      keyboardType="default"
                      onChangeText={(textvalue) => passwordHandler(textvalue)}
                      secureTextEntry={hidePassword}
                      autoCapitalize='none'
                    />
                    <Ionicons name={hidePassword ? 'eye-off' : 'eye'} color="black" style={styles.icon} onPress={() => setHidePassword(!hidePassword)}
                         />
                    </View>
        {error ? 
          <Text style={styles.error}>
            {error}
          </Text>
        : null}
                   
                      <TouchableOpacity activeOpacity={0.8} onPress={loginClick}
                      style={styles.button}>
                        <Text style={styles.textbutton}>LOGIN</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                      style={styles.pressableForgot}
                      onPress={forgotPassword}
                      >
                        <Text style={styles.text}>Forgot Password?</Text>
                      </TouchableOpacity>
                   
                 
                    <TouchableOpacity
                    style={styles.pressableRegister}
                    onPress={registerText}
                    >
                      <Text style={styles.text}>Sign Up</Text>
                    </TouchableOpacity>
                  
                    
        
        
                  </View>
                </View>
              </View>
            </DismissKeyboard>
            {loginPending ? <Loading/> : null}
            </>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#F6EFE9",
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "column",
        paddingTop: StatusBar.currentHeight
      },
      form: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "column",
      },
      formParent: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 40,
        borderTopLeftRadius: 23,
        borderTopRightRadius: 23,
        flex: 1.5,
        alignItems: 'flex-start',
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#2CD681",
        width: wp(100),
      },
      fonts: {
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        fontSize: 15,
        width: wp(85),
        marginTop: 30,
        fontFamily: 'Roboto_Regular'
      },
    
      row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6EFE9",
        flex: 1,
      },
      button: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf:'center',
        marginTop: 50,
        backgroundColor: "#EFDDCF",
        width: wp(50),
        height: hp(7),
        borderRadius: 50,
      },
      textbutton: {
        color: "#081B11",
        fontFamily: 'Lemon'
      },
      text: {
        color: "#081B11",
        textDecorationLine: "underline",
        fontFamily: 'Roboto_Medium'
      },
      pressableRegister: {
          marginTop:50,
          left:wp(35),
      },
      error: {
        alignSelf: 'flex-start',
        marginTop: 10,
      },
      icon: {
        fontSize: 20,
        right: 10,
        position: 'absolute'
      },
      passFonts: {
          borderBottomColor: "#000000",
          borderBottomWidth: 1,
          fontSize: 15,
          marginBottom: 20,
          fontFamily: 'Roboto_Regular',
          paddingLeft: 0,
          flex: 1,
      },
      passRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30
      },
      pressableForgot: {
        marginTop:20,
    },
})

export default Login;
