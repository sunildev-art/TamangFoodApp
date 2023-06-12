import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert,Share, Image, FlatList, ImageBackground, TextInput, Linking,ShareAction } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header3 from './components/Header3';
// import Share from 'react-native-share';



const Refer = ({navigation}) => {
// const[options,setOptions] = useState("")
const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        'https://ui8.net/76738b',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    Alert.alert(error.message);
  }}
  return (
    <View style={styles.main_container}>
    <Header3
      HeaderImage={global.ASSETS.BackArrow}
      tittle="Refer to Friends"
    />
    <View style={styles.Container_First}>
    <ScrollView>
     <Image source={global.ASSETS.CARD_IMG} style={styles.CARD_IMG_Style}/>
     <Text style={styles.card_Text_Style}>Refer a Friend,Get %10</Text>
     {/* <Text style={styles.card1_Text_Style}>:)</Text> */}
     <Text style={styles.subtitle_Text_Style}>Get $10 in credits when someone sign up {"\n"} using your refer link </Text>
     <TouchableOpacity style={styles.Button_Container} onPress={onShare}>
       <Image source={global.ASSETS.Shape} style={styles.Shape_Img_Style}/>
       <Text style={styles.link_Text_Style}>https://ui8.net/76738b</Text>
     </TouchableOpacity>
     </ScrollView>
    </View>
    </View>
  )
}

export default Refer

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
  CARD_IMG_Style:{
    height:"72@s",
    width:"108@s",
    alignSelf:"center",
  marginTop:"80@s"
    },
    card_Text_Style:{
      fontSize:"22@s",
      color:"#010F07",
      fontWeight:"600",
      marginTop:"25@s",
      textAlign:"center"
    },
    card1_Text_Style:{
      fontSize:"24@s",
      color:"#010F07",
      fontWeight:"600",
      marginTop:"8@s",
      textAlign:"center"
    },
    subtitle_Text_Style:{
      fontSize:"15@s",
      textAlign:"center",
      color:"#868686",
      marginTop:"20@s",
      lineHeight:"22@s",
      fontWeight:"400"
    },
    Button_Container:{
    height:"42@s",
    // borderWidth:"1@s",
    // borderColor:"#EEA734",
    borderRadius:"6@s",
    // justifyContent:"center",
    alignItems:"center",
    marginTop:"25@s",
    marginHorizontal:"40@s",
    backgroundColor:"#F8F8F8",
    flexDirection:"row"
    },
    button_Text_Style:{
      fontSize:"12@s",
      color:"#EEA734",
      fontWeight:"600",
      letterSpacing:"1@s"
    },
    Shape_Img_Style:{
      width:"16@s",
      height:"16@s",
      resizeMode:"contain",
      marginLeft:"18@s"
    },
    link_Text_Style:{
fontSize:"14@s",
color:"#010F07",
paddingLeft:"20@s"
    }
})