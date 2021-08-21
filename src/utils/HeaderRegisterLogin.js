import React from "react";
import { 
ImageBackground,
StyleSheet,
Dimensions
} from "react-native";

const {width} = Dimensions.get('screen')

const Header = (props) => {
  return (
    <ImageBackground
    source={require("../assets/background.jpg")}
    style={{
      width: width,
      height: 550,
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
