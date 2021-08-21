import React, {useState} from 'react';
import {
View, 
StyleSheet,
Text,
Dimensions,
TextInput,
ScrollView
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import Checkbox from '../utils/Checkbox';


const {height , width} = Dimensions.get('screen')

const Form = () => {


    const [describe, setDescribe] = useState('')

    

    const [checkbox3, setCheckbox3] = useState(false)
    const [checkbox4, setCheckbox4] = useState(false)
    const [checkbox5, setCheckbox5] = useState(false)
    const [checkbox6, setCheckbox6] = useState(false)
    const [checkbox7, setCheckbox7] = useState(false)
    const [checkbox8, setCheckbox8] = useState(false)
    const [checkbox9, setCheckbox9] = useState(false)
    const [checkbox10, setCheckbox10] = useState(false)
    const [checkbox11, setCheckbox11] = useState(false)
    const [checkbox12, setCheckbox12] = useState(false)
    const [checkbox13, setCheckbox13] = useState(false)
    const [checkbox14, setCheckbox14] = useState(false)
    const [checkbox15, setCheckbox15] = useState(false)
    const [checkbox16, setCheckbox16] = useState(false)
    const [checkbox17, setCheckbox17] = useState(false)
    const [checkbox18, setCheckbox18] = useState(false)
    const [checkbox19, setCheckbox19] = useState(false)
    

    var checkboxvalue;

    


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
                style={[GlobalStyle.robotoMedium , styles.headerText]} >
                    Describe Yourself:
                </Text>
                <TextInput
                onChangeText={(textvalue) => describeHandler(textvalue)}
                multiline={true}
                style={styles.textInputStyle} />
                </View>

                <View style={styles.presentIssues}>
                    <Text style={[GlobalStyle.robotoMedium , styles.headerText]}>
                        Present Issues:
                    </Text>

                    <View style={styles.checkbox}>
                        <Checkbox />
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
        fontWeight:'bold',
        color:'#081B11',
        letterSpacing:2,
        marginBottom:15,
    },
    presentIssues: {
        marginTop:15,
        marginBottom:15,
    },
    checkbox: {
        
    }
})

export default Form;
