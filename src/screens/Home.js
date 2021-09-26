import React, { useState, useContext, useCallback } from 'react'
import {
View,
Text,
TouchableOpacity,
StyleSheet,
Image,
Dimensions,
ToastAndroid,
StatusBar,
BackHandler
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Loading from '../utils/Loading';
import { Context as AuthContext } from '../context/AuthContext';
import { useNavigation } from '@react-navigation/core';
import { useFocusEffect } from '@react-navigation/core';
import * as ScreenOrientation from 'expo-screen-orientation'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'



const Home = () => {

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)


    useFocusEffect(
        useCallback(() => {
          const onBackPress = () => {
            return true
          }
          BackHandler.addEventListener('hardwareBackPress', onBackPress)
          return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
        },[])
      )

    const {state:{firstName}, signOut} = useContext(AuthContext)

    const navigation = useNavigation();

    // const {email} = route.params;

    // useEffect(() => {

    // },[])

    const [loading, setLoading] = useState(false)

    

    const formClick = () => {
        navigation.replace('Form')
    }
    
    const tipsClick = () => {
        navigation.navigate('Tips')
    }
    
    
    const signoutClick = () => {
    
        setLoading(true);
    
        try {
            setTimeout(() => {
                
            signOut()
            // navigation.replace('Welcome')
            setLoading(false);
            }, 2500)
    
            
            
        }
        catch(error) {
            console.log(error)
            ToastAndroid.show(
                "Can't Signout",
                ToastAndroid.SHORT
            );
            setLoading(false);
        }
    
        
    
    }
    
    if(firstName === null) {
        return (
            <View>
                
            </View>
        )
    }
    
    
            return(
                <>
                <View
                style={styles.screen}>
                    <View
                    style={styles.header}>
                        <Icon 
                        name="person-circle"
                        size={50}
                        color="#081b11" />
                        <Text
                        style={styles.headerFont}>
                            Hello, {firstName} !
                        </Text>
                        <Text
                            style={styles.consultation}
                        >
                            Consultation day and time is Mon-Thu, 8:00AM to 5:00PM
                        </Text>
                    </View>
    
                    <View
                    style={styles.body}>
    
                <View
                style={styles.imageButton}>
                    <TouchableOpacity
                    onPress={formClick}
                    activeOpacity={0.5} > 
    
                    <Image
                    source={require('../assets/form.png')}
                    style={styles.image} />
    
                    </TouchableOpacity>
    
                    <Text style={styles.bodyFont}>
                        Assessment Form
                    </Text>
                </View>
    
                <View
                style={styles.imageButton}>
                    <TouchableOpacity
                    onPress={tipsClick}
                    activeOpacity={0.5} >
                    <Image
                    source={require('../assets/tips.png')}
                    style={styles.image} />
                    </TouchableOpacity>
                    <Text style={styles.bodyFont}>
                        Information Tips
                    </Text>
                </View>
    
                    <TouchableOpacity
                    style={styles.signOutButton}
                    onPress={signoutClick}
                    activeOpacity={0.8} >
                        <Text
                        style={styles.signOutText} >
                            Sign Out
                        </Text>
                      </TouchableOpacity>
                    </View>
                    
        
                </View>
                {loading ? <Loading/> : null}
                </>
            )
        }

        const styles = StyleSheet.create({
            screen: {
                flex:1,
                flexDirection:'column',
                backgroundColor:'#2CD681',
                marginTop: StatusBar.currentHeight
            },
            header: {
                backgroundColor:'#EFDDCF',
                flex:1,
                flexDirection:'column',
                borderBottomLeftRadius:8,
                borderBottomRightRadius:8,
                alignItems:'flex-start',
                justifyContent:'center',
                paddingLeft:30,
                
            },
            body: {
                flex:4,
                flexDirection:'column',
                backgroundColor:'#2CD681',
                alignItems:'center',
                justifyContent: 'space-evenly'
            },
            headerFont : {
                color:'#081b11',
                fontSize:hp(2),
                margin:5,
                textTransform:'uppercase',
                fontFamily: 'Roboto_Medium'
            },
            bodyFont: {
                color:'#EFDDCF',
                fontSize:hp(2),
                margin:5,
                textTransform:'uppercase',
                textShadowColor:'#081b11',
                textShadowRadius:2,
                textShadowOffset:{width:2,height:2},
                fontFamily: 'Roboto_Medium'
            },
            image: {
                width:150,
                height: 150,
            },
            imageButton: {
                alignItems:'center',
            },
            signOutText : {
                color:'#081b11',
                fontSize:hp(1.5),
                margin:5,
                textTransform:'uppercase',
                fontFamily: 'Lemon'
            },
            signOutButton: {
                alignItems: "center",
                justifyContent: "center",
                alignSelf:'flex-end',
                marginRight:40,
                marginTop:40,
                backgroundColor: "#EFDDCF",
                width: wp(20),
                height: hp(4),
                borderRadius: 50,
            },
            consultation: {
                top:20,
                fontFamily:'Roboto_Regular'
            }
        })

export default Home;
