import React, {useState} from 'react';
import {
View, 
StyleSheet,
Text,
Dimensions,
TextInput,
Button
} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import { useNavigation } from '@react-navigation/core';



const {height , width} = Dimensions.get('screen')

const Form2 = ({route}) => {

    const navigation = useNavigation();

const {presentIssues} = route.params;

const toHome = () => {
    navigation.replace('Home')
}
   

    return (
        <View style={styles.screen}>
           <Text>
               form2 {presentIssues}
           </Text>

            <Button
            onPress={toHome}
            title="ToHome" />

        </View>
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
        borderColor:'#458397',
        borderWidth:2,
        padding:5,
    },
    headerText: {
        fontWeight:'bold',
        color:'#081B11',
        letterSpacing:2
    },
    presentIssues: {
        marginTop:15,
    },
    checkboxContainer: {
        flexDirection:'row'
    }
})

export default Form2;
