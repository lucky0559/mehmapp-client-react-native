import React, {useState, useCallback} from 'react';
import {
View, 
StyleSheet,
Text,
TextInput,
ScrollView,
StatusBar,
BackHandler,
Alert
} from 'react-native';
import Checkbox from '../utils/Checkbox';
import { useFocusEffect } from '@react-navigation/core';
import * as ScreenOrientation from 'expo-screen-orientation'



const Form = ({navigation}) => {

    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

    const exitForm = () => {
        setDescribe('')
        navigation.navigate('Home')
    }

    useFocusEffect(
        useCallback(() => {
          const onBackPress = () => {
            Alert.alert('Are You Sure?', 'You want to leave this form? Your input data will be loss', [
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => exitForm()
                }
            ])
            return true
          }
          BackHandler.addEventListener('hardwareBackPress', onBackPress)
          return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
        },[])
      )


    const [describe, setDescribe] = useState('')
    


const describeHandler = (textvalue) => {
    setDescribe(textvalue)
}


// const show = () => {
//     {checkbox1 ? checkboxvalue+= '\n' + 'checkbacks1' : checkboxvalue+=''}
//     {checkbox2 ? checkboxvalue+= '\n' + 'checkbacks2' : checkboxvalue+=''}
//     console.log(checkboxvalue)
// }




    return (
        <ScrollView style={styles.screen}>
            <View style={styles.wholeForm}>

                <View>
                <Text
                style={styles.headerText} >
                    Describe Yourself:
                </Text>
                <TextInput
                onChangeText={(textvalue) => describeHandler(textvalue)}
                multiline={true}
                style={styles.textInputStyle} />
                </View>

                <View style={styles.presentIssues}>
                    <Text style={styles.headerText}>
                        Present Issues:
                    </Text>

                    <View style={styles.checkbox}>
                        <Checkbox
                        describe={describe}
                        />
                    </View>
                

                    
                

                </View>
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        flexDirection:'column',
        backgroundColor:'#2CD681',
        marginTop: StatusBar.currentHeight
    },
    wholeForm: {
        flex:1,
        margin:15,
    },
    textInputStyle: {
        borderColor:'#081b11',
        borderWidth:1,
        padding:5,
        backgroundColor:'rgba(170,170,166,.3)',
    },
    headerText: {
        color:'#081B11',
        letterSpacing:2,
        marginBottom:15,
        fontFamily: 'Roboto_Bold',
        fontSize: 20,
    },
    presentIssues: {
        marginTop:15,
        marginBottom:15,
    },
    checkbox: {
        
    }
})

export default Form;
