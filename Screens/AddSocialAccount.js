import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, TextInput, Linking } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header3 from './components/Header3';

const AddSocialAccount = () => {
  return (
    <View style={styles.main_container}>
    <Header3
        HeaderImage={global.ASSETS.BackArrow}
        tittle="Add social accounts"
    />
    <View style={styles.Container_First}>
    <Text style={styles.header_Text_Style}>Add social accounts</Text>
    <Text style={styles.subtitle_Text_Style}>Add your Social accounts for more security.{"\n"} you will go directly to their site.</Text>
    <TouchableOpacity style={styles.Button_Container1}  onPress={() => Linking.openURL('https://www.facebook.com/')}>
    <Image source={global.ASSETS.FACEBOOK} style={styles.FACEBOOK_Img_Style}/>
      <Text style={styles.Button_Container1_Text_Style}>CONNECT WITH FACEBOOK</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.Button_Container2} onPress={() => Linking.openURL('https://www.google.com/')}>
    <Image source={global.ASSETS.GOOGLE} style={styles.FACEBOOK_Img_Style2}/>
      <Text style={styles.Button_Container2_Text_Style}>CONNECT WITH GOOGLE</Text>
    </TouchableOpacity>
    
    </View>
    </View>
  )
}

export default AddSocialAccount

const styles = ScaledSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
},
Container_First: {
    marginTop: "20@s",
    marginHorizontal: "20@s",
    // backgroundColor:'red',
    flex: 1
},
header_Text_Style:{
  marginTop:"60@s",
  fontSize:"24@s",
  fontWeight:"600",
  color:"#010F07",
  textAlign:"center"
},
subtitle_Text_Style:{
  marginTop:"15@s",
  fontSize:"14@s",
  fontWeight:"400",
  color:"#868686",
  textAlign:"center"
},
Button_Container1:{
  height:"50@s",
  backgroundColor:"#395998",
  flexDirection:"row",
  alignItems:"center",
  borderRadius:"10@s",
  marginTop:"40@s",
},
FACEBOOK_Img_Style:{
  height:"28@s",
  width:"28@s",
  resizeMode:"contain",
  marginLeft:"18@s"
},
Button_Container1_Text_Style:{
  fontSize:"12@s",
  fontWeight:"600",
  letterSpacing:"0.5@s",
  marginLeft:"30@s",
  color:"#FFFFFF"
},
Button_Container2:{
  height:"50@s",
  backgroundColor:"#4285F4",
  flexDirection:"row",
  alignItems:"center",
  borderRadius:"10@s",
  marginTop:"20@s",
},
Button_Container2_Text_Style:{
  fontSize:"12@s",
  fontWeight:"600",
  letterSpacing:"0.5@s",
  marginLeft:"30@s",
  color:"#FFFFFF"
},
FACEBOOK_Img_Style2:{
  height:"28@s",
  width:"28@s",
  resizeMode:"contain",
  marginLeft:"18@s"
},
})