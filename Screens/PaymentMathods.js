import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, Image, FlatList, ImageBackground, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { StatusBar } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import global from '../global';
import Header3 from './components/Header3';


const PaymentMathods = ({navigation}) => {
  return (
    <View style={styles.main_container}>
    <Header3
      HeaderImage={global.ASSETS.BackArrow}
      tittle="Payment Mathods"
    />
    <View style={styles.Container_First}>
    <ScrollView>
     <Image source={global.ASSETS.CARD_IMG} style={styles.CARD_IMG_Style}/>
     <Text style={styles.card_Text_Style}>Don't have any card</Text>
     <Text style={styles.card1_Text_Style}>:)</Text>
     <Text style={styles.subtitle_Text_Style}>it's seems like you have not added any {"\n"} credit or debit card. You may easily add {"\n"} card. </Text>
     <TouchableOpacity style={styles.Button_Container} onPress={()=>navigation.navigate("AddCard")}>
      <Text style={styles.button_Text_Style}>ADD CREDIT CARDS</Text>
     </TouchableOpacity>
     </ScrollView>
    </View>
    </View>
  )
}

export default PaymentMathods

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
      fontSize:"24@s",
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
    borderWidth:"1@s",
    borderColor:"#EEA734",
    borderRadius:"6@s",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"25@s",
    marginHorizontal:"20@s"
    },
    button_Text_Style:{
      fontSize:"12@s",
      color:"#EEA734",
      fontWeight:"600",
      letterSpacing:"1@s"
    }
})