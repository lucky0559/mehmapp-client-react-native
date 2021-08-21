import React from 'react'
import {
View,
StyleSheet,
} from 'react-native'
import LottieView from 'lottie-react-native'

const Loading = () => {
    return(
        
        <View
        style={[StyleSheet.absoluteFillObject,styles.container]}>
            <LottieView
source={require('../assets/LottieFiles/loading-39-hourglass.json')}
autoPlay
loop/>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(0,0,0,0.3)',
        zIndex:1,
    },
})


export default Loading;