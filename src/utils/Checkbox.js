import React, {useState} from 'react';
import {
View, 
StyleSheet,
Text,
ToastAndroid,
Dimensions,
TouchableOpacity
} from 'react-native';
import Checkbox from 'expo-checkbox'
import { useNavigation } from '@react-navigation/core';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'


const {height, width} = Dimensions.get('screen')


const ImportCheckbox = ({describe}) => {

    const navigation = useNavigation();
    var presentIssues = '';

    const [checkbox1, setCheckbox1] = useState(false)
    const [checkbox2, setCheckbox2] = useState(false)
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


    var box1 = "Adjustment to College"
    var box2 = "Academic Concerns(problems with study habits,tests,motivation)"
    var box3 = "Physical Abuse/Violence"
    var box4 = "Stress"
    var box5 = "Eating Problems/Body Image"
    var box6 = "Relationship Issues"
    var box7 = "Religious/Spiritual Concerns"
    var box8 = "Discrimination/Bullying"
    var box9 = "Family Issues"
    var box10 = "Childhood Issues (abuse - emotional,physical, and/or sexual)"
    var box11 = "Career/Decision-making/Future Goals"
    var box12 = "Subject/s Anxiety"
    var box13 = "Sexual Identity Issues"
    var box14 = "Physical/Health Problems"
    var box15 = "Finance/Money Concerns"
    var box16 = "Legal/Judicial Problems"
    var box17 = "Depression"
    var box18 = "Self-esteem/Self-confidence Issues"
    var box19 = "Alcohol/Substance Abuse"

    const show = () => {

        {checkbox1 ? presentIssues+= '\n' + box1 : presentIssues+=''}
            {checkbox2 ? presentIssues+= '\n' + box2 : presentIssues+=''}
            {checkbox3 ? presentIssues+= '\n' + box3 : presentIssues+=''}
            {checkbox4 ? presentIssues+= '\n' + box4 : presentIssues+=''}
            {checkbox5 ? presentIssues+= '\n' + box5 : presentIssues+=''}
            {checkbox6 ? presentIssues+= '\n' + box6 : presentIssues+=''}
            {checkbox7 ? presentIssues+= '\n' + box7 : presentIssues+=''}
            {checkbox8 ? presentIssues+= '\n' + box8 : presentIssues+=''}
            {checkbox9 ? presentIssues+= '\n' + box9 : presentIssues+=''}
            {checkbox10 ? presentIssues+= '\n' + box10 : presentIssues+=''}
            {checkbox11 ? presentIssues+= '\n' + box11 : presentIssues+=''}
            {checkbox12 ? presentIssues+= '\n' + box12 : presentIssues+=''}
            {checkbox13 ? presentIssues+= '\n' + box13 : presentIssues+=''}
            {checkbox14 ? presentIssues+= '\n' + box14 : presentIssues+=''}
            {checkbox15 ? presentIssues+= '\n' + box15 : presentIssues+=''}
            {checkbox16 ? presentIssues+= '\n' + box16 : presentIssues+=''}
            {checkbox17 ? presentIssues+= '\n' + box17 : presentIssues+=''}
            {checkbox18 ? presentIssues+= '\n' + box18 : presentIssues+=''}
            {checkbox19 ? presentIssues+= '\n' + box19 : presentIssues+=''}

        if(presentIssues === '' || describe === '') {
             ToastAndroid.show('Please fill describe and pick atleast 1 or more present issues',
                ToastAndroid.SHORT);
        }
        else {
            

            navigation.navigate('Form2' , {presentIssues: presentIssues, describe})
        }

        
    }

    

    return (

        <View>
            <View style={checkbox1 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                    <Checkbox
                    disabled={false}
                    value={checkbox1}
                    onValueChange={(newValue) => setCheckbox1(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />

                    <Text style={styles.text}>
                        {box1}
                    </Text>

                    </View>

                <View style={checkbox2 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox2}
                    onValueChange={(newValue) => setCheckbox2(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box2}
                    </Text>
                    
                </View>

                


                <View style={checkbox3 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox3}
                    onValueChange={(newValue) => setCheckbox3(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box3}
                    </Text>
                    
                </View>

                <View style={checkbox4 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox4}
                    onValueChange={(newValue) => setCheckbox4(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box4}
                    </Text>
                    
                </View>

                <View style={checkbox5 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox5}
                    onValueChange={(newValue) => setCheckbox5(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box5}
                    </Text>
                    
                </View>

                <View style={checkbox6 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox6}
                    onValueChange={(newValue) => setCheckbox6(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box6}
                    </Text>
                    
                </View>

                <View style={checkbox7 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox7}
                    onValueChange={(newValue) => setCheckbox7(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box7}
                    </Text>
                    
                </View>

                <View style={checkbox8 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox8}
                    onValueChange={(newValue) => setCheckbox8(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box8}
                    </Text>
                    
                </View>

                <View style={checkbox9 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox9}
                    onValueChange={(newValue) => setCheckbox9(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box9}
                    </Text>
                    
                </View>

                <View style={checkbox10 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox10}
                    onValueChange={(newValue) => setCheckbox10(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box10}
                    </Text>
                    
                </View>

                <View style={checkbox11 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox11}
                    onValueChange={(newValue) => setCheckbox11(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box11}
                    </Text>
                    
                </View>

                <View style={checkbox12 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox12}
                    onValueChange={(newValue) => setCheckbox12(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box12}
                    </Text>
                    
                </View>

                <View style={checkbox13 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox13}
                    onValueChange={(newValue) => setCheckbox13(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box13}
                    </Text>
                    
                </View>

                <View style={checkbox14 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox14}
                    onValueChange={(newValue) => setCheckbox14(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box14}
                    </Text>
                    
                </View>

                <View style={checkbox15 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox15}
                    onValueChange={(newValue) => setCheckbox15(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box15}
                    </Text>
                    
                </View>

                <View style={checkbox16 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox16}
                    onValueChange={(newValue) => setCheckbox16(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box16}
                    </Text>
                    
                </View>

                <View style={checkbox17 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox17}
                    onValueChange={(newValue) => setCheckbox17(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box17}
                    </Text>
                    
                </View>

                <View style={checkbox18 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox18}
                    onValueChange={(newValue) => setCheckbox18(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text style={styles.text}>
                        {box18}
                    </Text>
                    
                </View>

                <View style={checkbox19 ? styles.checkboxContainerActive : styles.checkboxContainer}>
                <Checkbox
                    disabled={false}
                    value={checkbox19}
                    onValueChange={(newValue) => setCheckbox19(newValue)}
                    tintColors={{true:'#081b11' , false:'#EFDDCF'}} />
                    
                    <Text
                    style={styles.text} >
                        {box19}
                    </Text>
                    
                </View>

                <TouchableOpacity
                onPress={show}
                style={styles.button}
                activeOpacity={0.8} >
                    <Text style={styles.buttonText}>
                        Next
                    </Text>
                </TouchableOpacity>             

        </View>

        
    );
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15,
        padding:5,
        borderWidth:1,
        borderRadius:20,
        backgroundColor:'rgba(170,170,166,.3)',
        borderColor: '#081b11'
    },
    checkboxContainerActive: {
        flexDirection:'row',
        alignItems:'center',
        marginBottom:15,
        backgroundColor:'#aaaaa6',
        padding:5,
        borderWidth:1,
        borderRadius:20,
    },
    text: {
        color:'#081b11',
        fontFamily: 'Roboto_Regular'
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf:'flex-end',
        margin: 20,
        backgroundColor: "#EFDDCF",
        width: wp(40),
        height: hp(6),
        borderRadius: 50,
      },
    buttonText: {
        fontFamily: 'Lemon',
        fontSize: hp(2)
    }
})

export default ImportCheckbox;
