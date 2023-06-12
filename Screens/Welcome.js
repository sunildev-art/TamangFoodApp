import { ImageBackground, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Favorite from './Favorite';

const height = Dimensions.get("window").height
const width = Dimensions.get("window").width

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={global.ASSETS.CIRCLE_BACKGROUND}
        resizeMode="contain"
        style={styles.bgmStyle}>
         <View style={styles.container_first}>
          <Image source={global.ASSETS.LOGO} style={styles.LogoStyle} />
          <Text style={styles.logoTextStyle}>Tamang {'\n'} FoodService</Text>
        </View>
        <View style={styles.iceImageContainer}>
        <Image source={global.ASSETS.ICE_CREEM} style={styles.iceImageStyle}/>
        <Text style={styles.WelcomeTextStyle}>Welcome</Text>
        <Text style={styles.welcomeBioStyle}>it's pleasure to meet you. we are {'\n'} excited that you're here so let's get {'\n'} started!</Text>
       </View>
  </ImageBackground>
       
       
      
      
      
           
     
      <TouchableOpacity style={styles.buttonContainer}
      onPress={()=>navigation.navigate("Favorite")}
      >
          <Text style={styles.buttonTextStyle}>GET STARTED</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = ScaledSheet.create({
  container: {
    flex: 1
  },
  bgmStyle: {
    height: "370@s",
    width: "290@s",
  
  },
  container_first: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: '40@s',
    marginHorizontal: 20
  },
  LogoStyle: {
    height: "65@s",
    width: "65@s",

  },
  logoTextStyle: {
    color: "#000000",
    fontSize: "37@s",
    fontWeight: "700",
    textAlign: "center",
    marginHorizontal: 10

  },
  iceImageContainer:{
    justifyContent:"center",
    alignItems:"center",
    marginTop:"40@s",
    marginLeft:"30@s"
  },
  iceImageStyle:{
    width:"180@s",
    height:"193@s",
    resizeMode:"contain"

  },
  WelcomeTextStyle:{
    fontSize:"26@s",
    color:"#3A3A3A",
    fontFamily:global.FONT.BOLD,
    fontWeight:"700",
    marginTop:"5@s",
    textAlign:"center",
    // marginBottom:"10@s"

  },
  welcomeBioStyle:{
    color:"#3A3A3A",
    textAlign:"center",
    marginTop:"20@s",
    fontSize:"13@s",
    lineHeight:"18@s",
    fontFamily:global.FONT.REGULAR,
    marginVertical:"10@s",
    top:"10@s"
    
  },
  buttonContainer:{
  backgroundColor:"#EEA734",
  height:"45@s",
  width:"320@s",
  justifyContent:"center",
  alignItems:"center",
 marginTop:"50@s",
  borderRadius:"10@s",
  alignSelf:"center",
  position:'absolute',
  bottom:"10@s",
  // marginTop:"30@s",
  // marginBottom:"10@s",
  marginBottom:"10@s"
  },
  buttonTextStyle:{
        color:"#FFFFFF",
        textAlign:"center",
        fontSize:"12@s",
        fontWeight:"700",
        fontFamily:global.FONT.BOLD  ,
        // marginVertical:"20@s"  
  }


})
export default Welcome

