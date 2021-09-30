import React, {useState, useContext, useCallback} from 'react';
import {
View, 
StyleSheet,
Text,
TextInput,
StatusBar,
TouchableOpacity,
ToastAndroid,
Alert,
BackHandler,
ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import RadioButton from 'expo-radio-button'
import { Context as AssessmentContext } from '../context/AssessmentContext';
import { Context as AuthContext } from '../context/AuthContext'
import Loading from '../utils/Loading';
import { useFocusEffect } from '@react-navigation/core';
import * as ScreenOrientation from 'expo-screen-orientation'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'



const Form2 = ({route}) => {


    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

    useFocusEffect(
        useCallback(() => {
          const onBackPress = () => {
            navigation.navigate('Form')
            return true
          }
          BackHandler.addEventListener('hardwareBackPress', onBackPress)
          return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
        },[])
      )


const {submitForm} = useContext(AssessmentContext)
const {state:{user_id, email, firstName, lastName, student_number, phone_number}} = useContext(AuthContext)

const navigation = useNavigation();

const {presentIssues, describe} = route.params;


const [problemIssue, setProblemIssue] = useState('')

const [radio, setRadio] = useState('')

const [when, setWhen] = useState('')
const [duration, setDuration] = useState('')
const [previousCounseling, setPreviousCounseling] = useState('')

const [loading, setLoading] = useState(false)
   
const submit = async() => {
    setLoading(true)
    try {
        if(!radio.length > 0) {
            setLoading(false)
            return ToastAndroid.show('Please specify if you received counseling before',
            ToastAndroid.SHORT);
        }
        else if(radio === 'no'){
            setWhen('')
            setDuration('')
            setPreviousCounseling('')
        }
        else if(radio === 'yes') {
            if(!when.length > 0 || !duration.length > 0 || !previousCounseling.length > 0) {
                return ToastAndroid.show('Please fill the empty field/s',
                ToastAndroid.SHORT);
            }
        }
    
        const response = await submitForm({user_id, firstName, lastName, student_number, phone_number,presentIssues, describe, problemIssue, radio, when, duration, previousCounseling})

        if(response) {
            Alert.alert(
                'Submitted',
                'Your Assessment Form has been submitted to Guidance Counselor',
                [{
                  text:'Ok',
                  onPress:() => navigation.replace('Home'),
                }]
              )
              setLoading(false)
        }
    }
    catch(err) {
        console.log(err)
        setLoading(false)
    }
    

}


    return (
        <>
        <View style={styles.screen}>
            <ScrollView>
            <View style={styles.top}>
                <Text
                    style={styles.headerText}
                >
                Briefly state your problem/issue, if you have:
                </Text>
                <TextInput
                    value={problemIssue}
                    onChangeText={setProblemIssue}
                    placeholder="Problem/Issue"
                    multiline={true}
                    style={styles.textInputStyle}
                />

                <Text
                     style={styles.headerText}
                >
                    Have you received counseling before that tackled this current problem?
                </Text>

                <View style={styles.radio}>
                    <RadioButton
                        value='yes'
                        containerStyle={{marginBottom:10}}
                        selected={radio}
                        onSelected={setRadio}
                        radioBackground='#F6EFE9'
                    >
                        <Text>Yes</Text>
                    </RadioButton>
                    <RadioButton
                        value='no'
                        containerStyle={{marginBottom:10}}
                        selected={radio}
                        onSelected={setRadio}
                        radioBackground='#F6EFE9'
                    >
                        <Text>No</Text>
                    </RadioButton>

                    {radio === 'yes' ?
                    <View style={styles.hidden}>
                        <Text style={styles.headerText}>
                            If yes, when? 
                        </Text>
                        <TextInput
                            value={when}
                            onChangeText={setWhen}
                            placeholder="When"
                            style={styles.textInputStyle1}
                        />
                        <Text style={styles.headerText}>
                            Duration
                        </Text>
                        <View style={styles.radioBtn}>
                        <RadioButton
                            value='1 hour'
                            containerStyle={{marginBottom:10}}
                            selected={duration}
                            onSelected={setDuration}
                            radioBackground='#F6EFE9'
                        >
                            <Text>1 Hour</Text>
                        </RadioButton>
                        <RadioButton
                            value='2 hours'
                            containerStyle={{marginBottom:10}}
                            selected={duration}
                            onSelected={setDuration}
                            radioBackground='#F6EFE9'
                        >
                            <Text>2 Hours</Text>
                        </RadioButton>
                        <RadioButton
                            value='3 hours'
                            containerStyle={{marginBottom:10}}
                            selected={duration}
                            onSelected={setDuration}
                            radioBackground='#F6EFE9'
                        >
                            <Text>3 Hours</Text>
                        </RadioButton>
                        <RadioButton
                            value='more than 3 hours'
                            containerStyle={{marginBottom:10}}
                            selected={duration}
                            onSelected={setDuration}
                            radioBackground='#F6EFE9'
                        >
                            <Text>More Than 3 Hours</Text>
                        </RadioButton>
                        </View>
                        <Text style={styles.headerText}>
                            What was the focus of the previous counseling:
                        </Text>
                        <TextInput
                            value={previousCounseling}
                            onChangeText={setPreviousCounseling}
                            placeholder="Previous Counseling"
                            style={styles.textInputStyle1}
                        />
                    </View>
                :
                null
                
                    }
                    

                <TouchableOpacity
                    onPress={submit}
                    style={styles.button}
                    activeOpacity={0.8} >
                        <Text style={styles.buttonText}>
                            Submit
                        </Text>
                </TouchableOpacity> 

                </View>

                

                
            </View>
        
            
            </ScrollView>
        </View>
        {loading ? <Loading/> : null}
        </>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        flexDirection:'column',
        backgroundColor:'#2CD681',
        marginTop: StatusBar.currentHeight,
        padding: 20,
    },
    textInputStyle: {
        borderColor:'#458397',
        borderWidth:2,
        padding:5,
        margin: 10,
        marginBottom: 30,
        fontFamily: 'Roboto_Regular'
    },
    textInputStyle1: {
        borderColor:'#458397',
        borderWidth:2,
        padding:5,
        margin: 10,
        marginBottom: 30,
        fontFamily: 'Roboto_Regular'
    },
    headerText: {
        color:'#081B11',
        letterSpacing:2,
        fontSize: hp(2),
        fontFamily: 'Roboto_Bold',
    },
    radio: {
        margin: 15
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf:'flex-end',
        backgroundColor: "#EFDDCF",
        width: wp(40),
        height: hp(6),
        borderRadius: 50,
        marginTop: 30
      },
    radioBtn: {
        margin: 20,
    },
    hidden: {
        borderColor: 'black',
        borderWidth: 3,
        padding: 10
    },
    buttonText: {
        fontFamily: 'Lemon'
    },
    top: {

    },
    
})

export default Form2;
