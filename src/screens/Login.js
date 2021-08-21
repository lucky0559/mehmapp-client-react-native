import React, { useState, useContext, useEffect } from "react";
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
} from "react-native";
import Header from "../utils/HeaderRegisterLogin";
import Loading from "../utils/Loading";
import { Context as AuthContext } from "../context/AuthContext";



const {height, width} = Dimensions.get('screen');

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

const Login = ({navigation}) => {

  

const {state:{error}, signIn, clearError} = useContext(AuthContext)


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginPending, setLoginPending] = useState(false)

    
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
                    />
        
                    <TextInput
                      placeholder="Password"
                      placeholderTextColor='#081B11'
                      style={styles.fonts}
                      keyboardType="default"
                      onChangeText={(textvalue) => passwordHandler(textvalue)}
                      secureTextEntry
                    />
        {error ? 
          <Text style={styles.error}>
            {error}
          </Text>
        : null}
                   
                      <TouchableOpacity activeOpacity={0.8} onPress={loginClick}
                      style={styles.button}>
                        <Text style={styles.textbutton}>LOGIN</Text>
                      </TouchableOpacity>
                   
                 
                    <Pressable 
                    style={styles.pressableRegister}
                    onPress={registerText}
                    >
                      <Text style={styles.text}>Sign Up</Text>
                    </Pressable>
                  
                    
        
        
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
        marginTop: StatusBar.currentHeight
      },
      form: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: "column",
        width: width - 50,
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
        width: width,
      },
      fonts: {
        borderBottomColor: "#000000",
        borderBottomWidth: 1,
        fontSize: 15,
        width: width - 80,
        marginTop: 30,
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
        width: width - 200,
        height: height / 15,
        borderRadius: 50,
      },
      textbutton: {
        color: "#081B11",
      },
      text: {
        color: "#081B11",
        textDecorationLine: "underline",
      },
      pressableRegister: {
          marginTop:'12%',
          left:width / 3,
      },
      error: {
        alignSelf: 'flex-start',
        marginTop: 10,
      }
})

export default Login;
