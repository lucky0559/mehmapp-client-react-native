import React, { useState, useContext, useCallback } from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    ToastAndroid,
    Alert,
    Pressable,
    Dimensions,
    TouchableOpacity,
    StatusBar,
    BackHandler
  } from "react-native";
  import Header from "../utils/HeaderRegisterLogin";
  import Loading from "../utils/Loading";
  import { Context as AuthContext } from '../context/AuthContext';
  import { useFocusEffect } from '@react-navigation/core';
  import * as ScreenOrientation from 'expo-screen-orientation'


  const {height, width} = Dimensions.get('screen');



  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

export default function SignUp ({navigation})  {

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

    const {signUp, state:{error}, clearError} = useContext(AuthContext);

    
  
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm_Password] = useState('')
    const [phone_number, setPhone_Number] = useState('');
    const [student_number, setStudent_Number] = useState('');
  
    const [loginPending, setLoginPending] = useState(false);
  
    const loginText = () => {
      clearError()
      navigation.replace('SignIn')
  };
         
   
      const registerClick = () => {
          
        clearError()
  
          if(firstName.length != 0 && lastName.length != 0 && email.length != 0 && password.length !=0
            && phone_number.length != 0 && student_number.length != 0)
          {
  
            if (firstName.length < 3) {
      
              ToastAndroid.show('Please provide more than 3 characters for firstname',
              ToastAndroid.SHORT);
            
          }

          else if (lastName.length < 5) {
      
            ToastAndroid.show('Please provide more than 5 characters for firstname',
            ToastAndroid.SHORT);
          
        }
      
            else if(!email.includes('@cvsu.edu.ph'))
            {
              ToastAndroid.show('Please provide valid CvSU Email',
              ToastAndroid.SHORT);
            }
      
            else if(password.length <= 6)
            {
              ToastAndroid.show('Please provide 6 or more characters for password',
              ToastAndroid.SHORT);
            }
      
            else if(phone_number.length != 11 || !phone_number.startsWith("09",0))
            {
              ToastAndroid.show('Please provide valid phone number with 11 digits',
              ToastAndroid.SHORT);
            }
      
            else if(student_number.length < 9 || student_number.length > 10)
            {
              ToastAndroid.show('Please provide valid student number with 9-10 digits',
              ToastAndroid.SHORT);
            }
      
            else if(password != confirmPassword)
            {
              ToastAndroid.show('Password not match',
              ToastAndroid.SHORT);
              setPassword('')
              setConfirm_Password('')
            }
            
      
            else
            {
  
              try{
  
              setTimeout(async() => {
  
                setLoginPending(false)
  
                try {
                 const response = await signUp({firstName, lastName, email, phone_number, student_number, password});

                if(response) {
                  Alert.alert(
                    'Registered',
                    'Register Successfully! Please verify your email.',
                    [{
                      text:'Ok',
                      onPress:() => navigation.replace('SignIn'),
                    }]
                  )
                }
                  
                  
                  
                

                  setPassword('')
                  setConfirm_Password('')
                  
                }
                
                
                catch(err) {
                  console.log(err)
                }

                
                
            }, 1000);
      
      
            setLoginPending(true)
      
            }
  
            catch(err)
            {
              setLoginPending(false)
              console.log(err)
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
  
  
      
          return (
              <>
              <DismissKeyboard>
                 <View style={styles.screen}>
                  <View style={styles.row}> 
                    <View>
          <Header/>
                    </View>
                  </View>
          
                  <View style={styles.formParent}>
                    <View style={styles.form}>
                      <TextInput
                        placeholder="First Name"
                        placeholderTextColor='#081B11'
                        style={styles.name_fonts}
                        keyboardType="default"
                        value={firstName}
                        onChangeText={setFirstName}
                      />
                      <TextInput
                        placeholder="Last Name"
                        placeholderTextColor='#081B11'
                        style={styles.name_fonts}
                        keyboardType="default"
                        value={lastName}
                        onChangeText={setLastName}
                      />
                      <TextInput
                        placeholder="CvSU Email"
                        placeholderTextColor='#081B11'
                        style={styles.fonts}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                      />
                      <TextInput
                        placeholder="Phone Number"
                        placeholderTextColor='#081B11'
                        style={styles.fonts}
                        keyboardType="number-pad"
                        value={phone_number}
                        onChangeText={setPhone_Number}
                      />
                      <TextInput
                        placeholder="Student Number"
                        placeholderTextColor='#081B11'
                        style={styles.fonts}
                        keyboardType="number-pad"
                        value={student_number}
                        onChangeText={setStudent_Number}
                      />
                      <TextInput
                        placeholder="Password"
                        placeholderTextColor='#081B11'
                        style={styles.fonts}
                        keyboardType="default"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                      />
                      <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor='#081B11'
                        style={styles.fonts}
                        keyboardType="default"
                        secureTextEntry={true}
                        value={confirmPassword}
                        onChangeText={setConfirm_Password}
                      />
          {error ? 
          <Text style={styles.error}>
            {error}
          </Text>
          : null}
                      
                      <TouchableOpacity activeOpacity={0.8} onPress={registerClick}
                      style={styles.button}>
                        <Text style={styles.textbutton}>Sign Up</Text>
                      </TouchableOpacity>
          
          
          <Pressable
          onPress={loginText}
          style={styles.loginPressable}>
              <Text
              style={styles.loginText}>
                  Login
              </Text>
          </Pressable>
          
                    </View>
                  </View>
                </View>
                </DismissKeyboard>
                {loginPending ? <Loading/> : null}
                </>
          )
      }
  
  
  
  
  
  const styles = StyleSheet.create({
      screen: {
        flex: 1,
        backgroundColor: "#F6EFE9",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        paddingTop: StatusBar.currentHeight
      },
      form: {
        justifyContent: "space-between",
        alignItems: "stretch",
        flexDirection: "column",
        width: width - 100,
      },
      formParent: {
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 40,
        borderTopLeftRadius: 23,
        borderTopRightRadius: 23,
        flex: 4,
        alignItems: "flex-start",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#2CD681",
        width: width,
      },
      fonts: {
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        fontSize: 15,
        marginBottom: 20,
        fontFamily: 'Roboto_Light'
      },
      name_fonts: {
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        fontSize: 15,
        marginBottom: 20,
        textTransform: 'capitalize'
      },
      button: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf:'center',
        marginTop: 40,
        backgroundColor: "#EFDDCF",
        width: width - 200,
        height: height / 15,
        borderRadius: 50,
      },
      textbutton: {
        color: "#081B11",
        fontFamily: 'Lemon'
      },
      row: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F6EFE9",
        flex: 1,
      },
      loginText: {
        color: "#081B11",
        textDecorationLine: "underline",
        fontFamily: 'Roboto_Medium'
      },
      loginPressable: {
        flexDirection:'row-reverse',
        marginTop:'15%'
      }
    }); 
