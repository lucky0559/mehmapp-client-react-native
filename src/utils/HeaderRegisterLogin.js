import React from "react";
import { 
ImageBackground,
StyleSheet,
Dimensions
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const {width} = Dimensions.get('screen')

const Header = (props) => {
  return (
    <ImageBackground
    source={require("../assets/background.jpg")}
    style={{
      width: wp(100),
      height: hp(60),
      top: -70,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: 'flex-start',
    }}
  ></ImageBackground>
  );
};

const styles = StyleSheet.create({
  
});

export default Header;
