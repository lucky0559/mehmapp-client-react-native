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
  StatusBar,
  BackHandler,
  Alert,
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

const ForgotPassword = ({navigation}) => {


  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

useFocusEffect(
  useCallback(() => {
    const onBackPress = () => {
      navigation.navigate('SignIn')
      return true
    }
    BackHandler.addEventListener('hardwareBackPress', onBackPress)
    return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
  },[])
)



const {state:{error}, check_sendToken, clearError, reset_Password} = useContext(AuthContext)


    const [email, setEmail] = useState('')
    const [new_password, setNew_Password] = useState('')
    const [confirm_password, setConfirm_Password] = useState('')
    const [password_token, setPassword_token] = useState('')
    const [loginPending, setLoginPending] = useState(false)

    const [hidePassword, setHidePassword] = useState(true)
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true)

    const [sended, setSended] = useState(false)


    const sendToken = () => {

        clearError()

        setLoginPending(true)
    
            if(email.length != 0)
            {
              
              if(!email.includes('@cvsu.edu.ph'))
              {
                setLoginPending(false)
                ToastAndroid.show('Please provide valid CvSU Email',
                ToastAndroid.SHORT);
              }
              else {
                  try {
                      setTimeout(async() => {

                          setLoginPending(false)
                          const response = await check_sendToken({email})

                        if(response) {
                            Alert.alert(
                              'Check Email',
                              'Please check your email for confirmation code',
                              [{
                                text:'Ok',
                                onPress:() => setSended(true),
                              }]
                            )
                          }

                      }, 1000)
                      setLoginPending(true)
                  }
                  catch(err) {
                    setLoginPending(false)
                    console.log(err)
                  }
              }
              
            }
}
    
    const resetPassword = () => {
        
            clearError()
        
            var regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_.,])[A-Za-z\d@$!%*?&_.,]{6,}$/)

            if(new_password.length != 0 && password_token.length != 0 && confirm_password.length != 0) {
                if(new_password.length < 6)
                {
                    ToastAndroid.show('Please provide 6 or more characters for password',
                    ToastAndroid.SHORT);
                }
                else if(!regex.test(new_password)) {
                    ToastAndroid.show('Password must contain atleast one uppercase letter, one lowercase letter, one number and one special character',
                    ToastAndroid.LONG);
                    setNew_Password('')
                    setConfirm_Password('')
                }
                else if(new_password != confirm_password)
                {
                    ToastAndroid.show('Password not match',
                    ToastAndroid.SHORT);
                    setNew_Password('')
                    setConfirm_Password('')
                }
                else {
                    try {
                        setTimeout(async() => {

                            setLoginPending(false)
                            const response = await reset_Password({email,new_password, password_token})

                        if(response) {
                            Alert.alert(
                                'Password Reset',
                                'Password Changed Successfully!',
                                [{
                                text:'Ok',
                                onPress:() => navigation.replace('SignIn'),
                                }]
                            )
                        }

                        }, 1000)
                        setLoginPending(true)
                    }
                    catch(err) {
                        console.log(err)
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


    return (
        <>
            <DismissKeyboard>

            {
                sended ?

                <View style={styles.screen}>
                <View style={styles.row}>
                  <View>
                    <Header />
                  </View>
                </View>
        
        
        
                <View style={styles.formParent}>
                  <View style={styles.form}>
                    <View style={styles.passRow}>
                        <TextInput
                        placeholder="New Password"
                        placeholderTextColor='#081B11'
                        style={styles.fonts}
                        secureTextEntry={hidePassword}
                        value={new_password}
                        onChangeText={setNew_Password}
                        autoCapitalize='none'
                        />
                        <Ionicons name={hidePassword ? 'eye-off' : 'eye'} color="black" style={styles.icon} onPress={() => setHidePassword(!hidePassword)}
                         />
                    </View>
                    <View style={styles.passRow}>
                        <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor='#081B11'
                        style={styles.fonts}
                        secureTextEntry={hideConfirmPassword}
                        value={confirm_password}
                        onChangeText={setConfirm_Password}
                        autoCapitalize='none'
                        />
                        <Ionicons name={hideConfirmPassword ? 'eye-off' : 'eye'} color="black" style={styles.icon} onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
                         />
                    </View>
                    <TextInput
                      placeholder="Confirmation Code"
                      placeholderTextColor='#081B11'
                      style={styles.fonts}
                      keyboardType="number-pad"
                      value={password_token}
                      onChangeText={setPassword_token}
                      autoCapitalize='none'
                    />
        {error ? 
          <Text style={styles.error}>
            {error}
          </Text>
        : null}
                   
                      <TouchableOpacity activeOpacity={0.8}
                      onPress={resetPassword}
                      style={styles.button}>
                        <Text style={styles.textbutton}>Reset Password</Text>
                      </TouchableOpacity>
        
        
                  </View>
                </View>
                </View>
            
                :

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
                      value={email}
                      onChangeText={setEmail}
                      autoCapitalize='none'
                    />
        {error ? 
          <Text style={styles.error}>
            {error}
          </Text>
        : null}
                   
                      <TouchableOpacity activeOpacity={0.8}
                      onPress={sendToken}
                      style={styles.button}>
                        <Text style={styles.textbutton}>Send Confirmation Code</Text>
                      </TouchableOpacity>
        
        
                  </View>
                </View>
                </View>
                
            }
               
              
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
        bottom: 10,
        position: 'absolute',
        alignSelf: 'flex-end',
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
      }
})

export default ForgotPassword;
