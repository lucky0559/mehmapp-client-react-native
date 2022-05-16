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
    TouchableOpacity,
    StatusBar,
    BackHandler,
  } from "react-native";
  import Header from "../utils/HeaderRegisterLogin";
  import Loading from "../utils/Loading";
  import { Context as AuthContext } from '../context/AuthContext';
  import { useFocusEffect } from '@react-navigation/core';
  import * as ScreenOrientation from 'expo-screen-orientation'
  import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
  import { Ionicons } from '@expo/vector-icons';
  import DropDownPicker from 'react-native-dropdown-picker';
  import courses from '../data/courses.json'




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
    const [course, setCourse] = useState(courses);
    const [openDropdown, setOpenDropdown] = useState(false)
    const [courseValue, setCourseValue] = useState(null)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirm_Password] = useState('')
    const [phone_number, setPhone_Number] = useState('');
    const [student_number, setStudent_Number] = useState('');

  
    const [loginPending, setLoginPending] = useState(false)

    const [hidePassword, setHidePassword] = useState(true)
    const [hideConfirmPassword, setHideConfirmPassword] = useState(true)
  
    const loginText = () => {
      clearError()
      navigation.replace('SignIn')
  };
         
   
      const registerClick = () => {
          
        clearError()
        
        var regex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_.,])[A-Za-z\d@$!%*?&_.,]{6,}$/)
  
          if(firstName.length != 0 && lastName.length != 0 && email.length != 0 && password.length !=0
            && phone_number.length != 0 && student_number.length != 0)
          {
  
            
      
            if(!email.includes('@cvsu.edu.ph'))
            {
              ToastAndroid.show('Please provide valid CvSU Email',
              ToastAndroid.SHORT);
            }
      
            else if(password.length < 6)
            {
              ToastAndroid.show('Please provide 6 or more characters for password',
              ToastAndroid.SHORT);
            }

            else if(!regex.test(password)) {
              ToastAndroid.show('Password must contain atleast one uppercase letter, one lowercase letter, one number and one special character',
              ToastAndroid.LONG);
              setPassword('')
              setConfirm_Password('')
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

            else if(course.length < 2)
            {
              ToastAndroid.show('Please provide 2 or more character',
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

            
              
            Alert.alert(
              'Privacy Policy',
              'MeHMApp. Our team is commited to protecting your privacy. This Privacy Policy explains how your personal information is collected, used.\n\nThis Privacy Policy applies to our application named MeHMApp, and its associated subdomains(collectively,our "Service"). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Services.',
              [{
                text:'Agree',
                onPress:() => {
                  try{
  
                    setTimeout(async() => {
        
                      setLoginPending(false)

                      
        
                      try {
                       const response = await signUp({firstName, lastName, email, phone_number, student_number, course, password});
      
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
              },
              {
                text:'Cancel',
                style:"cancel"
              }
            ],
            )
  
          }
          
      
          }
      
          
          
          else {
            
      
            ToastAndroid.show(
              "Empty Field/s",
              ToastAndroid.SHORT
            );
          }       
  
      }



  const signup = () => {

  }


  const changeCountry = (course) => {
    setCourse()
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
                        placeholderTextColor='#626366'
                        style={styles.name_fonts}
                        keyboardType="default"
                        value={firstName}
                        onChangeText={setFirstName}
                      />
                      <TextInput
                        placeholder="Last Name"
                        placeholderTextColor='#626366'
                        style={styles.name_fonts}
                        keyboardType="default"
                        value={lastName}
                        onChangeText={setLastName}
                      />
                      <TextInput
                        placeholder="CvSU Email"
                        placeholderTextColor='#626366'
                        style={styles.fonts}
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize='none'
                      />
                      <TextInput
                        placeholder="Phone Number"
                        placeholderTextColor='#626366'
                        style={styles.fonts}
                        keyboardType="number-pad"
                        value={phone_number}
                        onChangeText={setPhone_Number}
                      />
                      <TextInput
                        placeholder="Student Number"
                        placeholderTextColor='#626366'
                        style={styles.fonts}
                        keyboardType="number-pad"
                        value={student_number}
                        onChangeText={setStudent_Number}
                      />
                      {/* <TextInput
                        placeholder="Course"
                        placeholderTextColor='#081B11'
                        style={styles.fonts}
                        keyboardType="default"
                        value={course}
                        onChangeText={setCourse}
                      /> */}
                      <DropDownPicker items={courses.courses} placeholder="Course" open={openDropdown} value={courseValue} setOpen={setOpenDropdown} setValue={setCourseValue} setItems={setCourse} style={{backgroundColor: '#2CD681', marginVertical:10}}/>
                      <View style={styles.passRow}>
                      <TextInput
                        placeholder="Password"
                        placeholderTextColor='#626366'
                        style={styles.passFonts}
                        keyboardType="default"
                        secureTextEntry={hidePassword}
                        value={password}
                        onChangeText={setPassword}
                        autoCapitalize='none'
                      />
                        <Ionicons name={hidePassword ? 'eye-off' : 'eye'} color="black" style={styles.icon} onPress={() => setHidePassword(!hidePassword)}
                         />
                      </View>
                      <View style={styles.passRow}>
                      <TextInput
                        placeholder="Confirm Password"
                        placeholderTextColor='#626366'
                        style={styles.passFonts}
                        keyboardType="default"
                        secureTextEntry={hideConfirmPassword}
                        value={confirmPassword}
                        onChangeText={setConfirm_Password}
                        autoCapitalize='none'
                      />
                      <Ionicons name={hideConfirmPassword ? 'eye-off' : 'eye'} color="black" style={styles.icon} onPress={() => setHideConfirmPassword(!hideConfirmPassword)}
                         />
                      </View>
                      
          {error ? 
          <Text style={styles.error}>
            {error}
          </Text>
          : null}
                      
                      <TouchableOpacity activeOpacity={0.8} onPress={registerClick}
                      style={styles.button}>
                        <Text style={styles.textbutton}>Sign Up</Text>
                      </TouchableOpacity>
          
          
          <TouchableOpacity
          onPress={loginText}
          style={styles.loginPressable}>
              <Text
              style={styles.loginText}>
                  Login
              </Text>
          </TouchableOpacity>
          
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
        width: wp(80),
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
        width: wp(100),
      },
      name_fonts: {
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        fontSize: 17,
        marginBottom: 12,
        textTransform: 'capitalize',
        fontFamily: 'Roboto_Regular'
      },
      fonts: {
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        fontSize: 17,
        marginBottom: 12,
        fontFamily: 'Roboto_Regular',
      },
      button: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf:'center',
        marginTop: 40,
        backgroundColor: "#EFDDCF",
        width: wp(50),
        height: hp(7),
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
        fontFamily: 'Roboto_Medium',
      },
      loginPressable: {
        marginTop:30,
        left:wp(75),
      },
      icon: {
        fontSize: 20,
        right: 10,
        position: 'absolute'
      },
      passFonts: {
          borderBottomColor: "#000000",
          borderBottomWidth: 1,
          fontSize: 17,
          marginBottom: 12,
          fontFamily: 'Roboto_Regular',
          paddingLeft: 0,
          flex: 1,
      },
      passRow: {
        flexDirection: 'row',
        justifyContent: 'center'
      },
      privacy: {
        fontSize:20
      }
    }); 
