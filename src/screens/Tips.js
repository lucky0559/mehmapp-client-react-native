import React, {useState, useCallback} from 'react';
import {
View, 
StyleSheet,
Text,
TouchableOpacity,
Modal,
StatusBar,
ScrollView,
BackHandler
} from 'react-native';
import { Video } from 'expo-av';
import VideoPlayer from 'expo-video-player';
import { useFocusEffect } from '@react-navigation/core';
import * as ScreenOrientation from 'expo-screen-orientation'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import {Card, ListItem, Button} from 'react-native-elements'

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
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{marginTop: 20, marginBottom: 20}}
            >
            <Card containerStyle={{width: wp(70), height: 270, backgroundColor: '#f6efe9', borderRadius: 20, margin: 30}}>
                <Card.Title>
                    Seek Social Support
                </Card.Title>
                <Card.Divider/>
                <Card.Image source={{uri: 'https://res.cloudinary.com/intro-pl/image/upload/v1630220084/mehmapp-tips/Seek_Social_Support_b1stq8.jpg'}}
                />
                <Button 
                    title="View Now"
                    buttonStyle={{marginTop: 5}}
                    onPress={() => setTip1(!tips1)}
                />
            </Card>

            <Card containerStyle={{width: wp(70), height: 270, backgroundColor: '#f6efe9', borderRadius: 20, margin: 30}}>
                <Card.Title>
                    Relaxation Expert
                </Card.Title>
                <Card.Divider/>
                <Card.Image source={{uri: 'https://res.cloudinary.com/intro-pl/image/upload/v1630219793/mehmapp-tips/RelaxationExpert_k6ijz9.jpg'}}
                />
                <Button 
                    title="View Now"
                    buttonStyle={{marginTop: 5}}
                    onPress={() => setTip2(!tips2)}
                />
            </Card>

            <Card containerStyle={{width: wp(70), height: 285, backgroundColor: '#f6efe9', borderRadius: 20, margin: 30}}>
                <Card.Title>
                    Manage How You Follow the Outbreak in the Media
                </Card.Title>
                <Card.Divider/>
                <Card.Image source={{uri: 'https://res.cloudinary.com/intro-pl/image/upload/v1630220592/mehmapp-tips/outbreakMedia_obeerg.jpg'}}
                />
                <Button 
                    title="View Now"
                    buttonStyle={{marginTop: 5}}
                    onPress={() => setTip3(!tips3)}
                />
            </Card>

            <Card containerStyle={{width: wp(70), height: 285, backgroundColor: '#f6efe9', borderRadius: 20, margin: 30}}>
                <Card.Title>
                    Recognize That Your Anxiety is Completely Normal
                </Card.Title>
                <Card.Divider/>
                <Card.Image source={{uri: 'https://res.cloudinary.com/intro-pl/image/upload/v1630220705/mehmapp-tips/anxietyNormal_mmmnte.jpg'}}
                />
                <Button 
                    title="View Now"
                    buttonStyle={{marginTop: 5}}
                    onPress={() => setTip4(!tips4)}
                />
            </Card>

            <Card containerStyle={{width: wp(70), height: 270, backgroundColor: '#f6efe9', borderRadius: 20, margin: 30}}>
                <Card.Title>
                    Finding Distractions
                </Card.Title>
                <Card.Divider/>
                <Card.Image source={{uri: 'https://res.cloudinary.com/intro-pl/image/upload/v1630221023/mehmapp-tips/findingDistractions_qegupm.jpg'}}
                />
                <Button 
                    title="View Now"
                    buttonStyle={{marginTop: 5}}
                    onPress={() => setTip5(!tips5)}
                />
            </Card>

            
                
               
                
                

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
                                uri: 'https://res.cloudinary.com/intro-pl/video/upload/v1630324224/mehmapp-tips/socialSupport_ndzbmv.mp4'
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
                                uri: 'https://res.cloudinary.com/intro-pl/video/upload/v1630324222/mehmapp-tips/relaxation_vg5ucm.mp4'
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
                                uri: 'https://res.cloudinary.com/intro-pl/video/upload/v1630324219/mehmapp-tips/mediaOutbreak_sdagn0.mp4'
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
                                uri: 'https://res.cloudinary.com/intro-pl/video/upload/v1630324222/mehmapp-tips/anxietyNormal_vlohuo.mp4'
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
                                uri: 'https://res.cloudinary.com/intro-pl/video/upload/v1630324229/mehmapp-tips/findingDistraction_emghkf.mp4'
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

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex:1,
        backgroundColor:'#2CD681',
        marginTop: StatusBar.currentHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        margin: 20,
        backgroundColor: "#EFDDCF",
        width: wp(40),
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
          fontSize: hp(2),
          flex: 1,
          lineHeight: 30,
          alignSelf: 'center'
      },
      buttonModal: {
        alignSelf:'center',
        margin: 20,
        backgroundColor: "#EFDDCF",
        width: wp(50),
        height: hp(5),
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
        width: wp(100),
        height: hp(30),
    },
    title: {
        fontSize: hp(4),
        margin: 10,
        fontFamily: 'Roboto_Bold',
        alignSelf: 'center',
        textAlign: 'center',
        flex: 1
    },
    content: {
        fontSize: hp(2),
        lineHeight: 50,
        fontFamily: 'Roboto_Regular',
        flex: 1
    },
    buttonText: {
        fontFamily: 'Lemon',
        fontSize: hp(2),
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center'
    },
})

export default Tips;
