import React, {useState, useCallback} from 'react';
import {
View, 
StyleSheet,
Text,
TouchableOpacity,
Modal,
StatusBar,
Dimensions,
ScrollView,
BackHandler
} from 'react-native';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { useFocusEffect } from '@react-navigation/core';
import * as ScreenOrientation from 'expo-screen-orientation'

const {width, height} = Dimensions.get('screen')

const Tips = ({navigation}) => {


    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)

    useFocusEffect(
        useCallback(() => {
          const onBackPress = () => {
            navigation.navigate('Home')
            return true
          }
          BackHandler.addEventListener('hardwareBackPress', onBackPress)
          return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
        },[])
      )


    const [tips1, setTip1] = useState(false)
    const [tips2, setTip2] = useState(false)
    const [tips3, setTip3] = useState(false)
    const [tips4, setTip4] = useState(false)
    const [tips5, setTip5] = useState(false)

    return (
        <View style={styles.screen}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => {setTip1(!tips1) }}
                >
                    <Text style={styles.text}>
                        Seek Social Support
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => {setTip2(!tips2)}}
                >
                    <Text style={styles.text}>
                        Become a Relaxation Expert
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => {setTip3(!tips3)}}
                >
                    <Text style={styles.text}>
                        Try to Manage How You Follow the Outbreak in the Media
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => {setTip4(!tips4)}}
                >
                    <Text style={styles.text}>
                        Recognize That Your Anxiety is Completely Normal
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => {setTip5(!tips5)}}
                >
                    <Text style={styles.text}>
                        Finding a Distraction
                    </Text>
                </TouchableOpacity>

                <Modal
                    animationType="slide"
                    visible={tips1}
                >
                    <View style={styles.screenModal}>
                    
                    <VideoPlayer
                        videoProps={{
                            shouldPlay: true,
                            resizeMode: Video.RESIZE_MODE_CONTAIN,
                            source: {
                                uri: 'https://res.cloudinary.com/intro-pl/video/upload/v1629617016/mehmapp-tips/Seek_Social_Support_scntrk.mp4'
                            },
                        }}
                        timeVisible
                        activityIndicator
                        style={styles.videoPlayer}
                    />
                    <Text style={styles.title}>
                            Seek Social Support
                    </Text>
                    <ScrollView>
                        <Text style={styles.content}>
                        Although social distancing requires more time alone, Guttentag says getting support from others
                        can help improve depression and anxiety symptoms.
                        </Text>
                        <Text style={styles.content}>
                        “Staying connected with loved ones can be hard during the pandemic, but over time it can help you feel less lonely. 
                        In addition, many people find it helpful to work with a peer-support group, either in person or online. There are many 
                        community resources since depression and anxiety are both very common,” she said.
                        </Text>
                    </ScrollView>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.buttonModal}
                        onPress={() => {setTip1(!tips1) }}
                    >
                        <Text style={styles.buttonText}>
                            Close
                        </Text>
                    </TouchableOpacity>
                    </View>
                </Modal>

                <Modal
                    animationType="slide"
                    visible={tips2}
                >
                    <View style={styles.screenModal}>
                    
                    <VideoPlayer
                        videoProps={{
                            shouldPlay: true,
                            resizeMode: Video.RESIZE_MODE_CONTAIN,
                            source: {
                                uri: 'https://res.cloudinary.com/intro-pl/video/upload/v1629618668/mehmapp-tips/Become_a_relaxation_expert_hlos1u.mp4'
                            },
                        }}
                        timeVisible
                        activityIndicator
                        style={styles.videoPlayer}
                    />
                    <Text style={styles.title}>
                            Become a Relaxation Expert
                    </Text>
                    <ScrollView>
                        <Text style={styles.content}>
                        We all think we know how to relax. But chilling out in front of the TV or computer isn't 
                        true relaxation. The same is true for alcohol, drugs, or tobacco. They may seem to relieve anxiety or stress, but it's a 
                        false state of relaxation that's only temporary. What the body really needs is daily practice of a relaxation technique like
                        deep breathing, tai chi, or yoga that has a physical effect on the mind. For example, deep breathing helps to relax a major 
                        nerve that runs from the diaphragm to the brain, sending a message to the entire body to let go and loosen up.
                        </Text>
                    </ScrollView>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.buttonModal}
                        onPress={() => {setTip2(!tips2) }}
                    >
                        <Text style={styles.buttonText}>
                            Close
                        </Text>
                    </TouchableOpacity>
                    </View>
                </Modal>


                <Modal
                    animationType="slide"
                    visible={tips3}
                >
                    <View style={styles.screenModal}>
                    
                    <VideoPlayer
                        videoProps={{
                            shouldPlay: true,
                            resizeMode: Video.RESIZE_MODE_CONTAIN,
                            source: {
                                uri: 'https://res.cloudinary.com/intro-pl/video/upload/v1629618670/mehmapp-tips/Try_to_manage_how_you_follow_the_outbreak_in_the_media_ixlzc9.mp4'
                            },
                        }}
                        timeVisible
                        activityIndicator
                        style={styles.videoPlayer}
                    />
                    <Text style={styles.title}>
                            Try to Manage How You Follow the Outbreak in the Media
                    </Text>
                    <ScrollView>
                        <Text style={styles.content}>
                        There is extensive news coverage about the outbreak. If you find that the news is causing you huge stress, 
                        it’s important to find a balance. It’s best that you don’t avoid all news and that you keep informing and educating yourself, 
                        but limit your news intake if it is bothering you. 
                        </Text>
                    </ScrollView>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.buttonModal}
                        onPress={() => {setTip3(!tips3) }}
                    >
                        <Text style={styles.buttonText}>
                            Close
                        </Text>
                    </TouchableOpacity>
                    </View>
                </Modal>


                <Modal
                    animationType="slide"
                    visible={tips4}
                >
                    <View style={styles.screenModal}>
                    
                    <VideoPlayer
                        videoProps={{
                            shouldPlay: true,
                            resizeMode: Video.RESIZE_MODE_CONTAIN,
                            source: {
                                uri: 'https://res.cloudinary.com/intro-pl/video/upload/v1629620981/mehmapp-tips/Recognize_that_your_anxiety_is_completely_normal_x74cp1.mp4'
                            },
                        }}
                        timeVisible
                        activityIndicator
                        style={styles.videoPlayer}
                    />
                    <Text style={styles.title}>
                            Recognize That Your Anxiety is Completely Normal
                    </Text>
                    <ScrollView>
                        <Text style={styles.content}>
                        If school closures and worrying headlines are making you anxious, you are not the only one. Actually, that is how you should 
                        be feeling.
                        “Psychologists have long recognized that anxiety is a normal and healthy function that alerts us to threats and helps us 
                        take measures to protect ourselves”, says Dr. Lisa Damour, expert adolescent psychologist, best-selling author and monthly 
                        New York Times columnist. 
                        </Text>
                    </ScrollView>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.buttonModal}
                        onPress={() => {setTip4(!tips4) }}
                    >
                        <Text style={styles.buttonText}>
                            Close
                        </Text>
                    </TouchableOpacity>
                    </View>
                </Modal>


                <Modal
                    animationType="slide"
                    visible={tips5}
                >
                    <View style={styles.screenModal}>
                    
                    <VideoPlayer
                        videoProps={{
                            shouldPlay: true,
                            resizeMode: Video.RESIZE_MODE_CONTAIN,
                            source: {
                                uri: 'https://res.cloudinary.com/intro-pl/video/upload/v1629622037/mehmapp-tips/Finding_a_Distraction_lru1kf.mp4'
                            },
                        }}
                        timeVisible
                        activityIndicator
                        style={styles.videoPlayer}
                    />
                    <Text style={styles.title}>
                            Find a Distraction
                    </Text>
                    <ScrollView>
                        <Text style={styles.content}>
                        “Psychologists know that when people are in chronically difficult conditions it’s helpful to divide the problem into two 
                        categories: things they can do something about, and then things they can do nothing about”, says Dr. Damour.

                        There’s going to be a lot in that second category right now, and that's fine, but what can help us cope are distractions. 
                        Dr. Damour suggests doing homework, watching favourite movies or reading books, as ways to make it easier for ourselves 
                        and to find a balance in everyday life.
                        </Text>
                    </ScrollView>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.buttonModal}
                        onPress={() => {setTip5(!tips5) }}
                    >
                        <Text style={styles.buttonText}>
                            Close
                        </Text>
                    </TouchableOpacity>
                    </View>
                </Modal>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        flexDirection:'column',
        backgroundColor:'#2CD681',
        marginTop: StatusBar.currentHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        margin: 20,
        backgroundColor: "#EFDDCF",
        width: 200,
        borderRadius: 20,
        padding: 10,
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
      },
      buttonContainer: {
          flex: 1,
          justifyContent: 'center',
          paddingVertical: '20%',
          alignItems: 'center'
      },
      text: {
          textAlign: 'center',
          fontFamily: 'Roboto_Medium',
          fontSize: 20,
          flex: 1,
          lineHeight: 30,
          alignSelf: 'center'
      },
      buttonModal: {
        alignSelf:'center',
        margin: 20,
        backgroundColor: "#EFDDCF",
        width: 200,
        height: 60,
        borderRadius: 20,
        padding: 10,
        flexDirection: 'row'
      },
      screenModal: {
        flex:1,
        flexDirection:'column',
        backgroundColor:'#2CD681',
        padding: 20,
        paddingTop: 50,
        justifyContent: 'flex-start'
    },
    videoPlayer: {
        width: width,
        height: 237,
    },
    title: {
        fontSize: 30,
        margin: 10,
        fontFamily: 'Roboto_Bold',
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1
    },
    content: {
        fontSize: 18,
        lineHeight: 50,
        fontFamily: 'Roboto_Regular',
        flex: 1
    },
    buttonText: {
        fontFamily: 'Lemon',
        fontSize: 18,
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center'
    }
})

export default Tips;
